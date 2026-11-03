/* My Teacher — shared lesson player.
 * Reads one chapter from window.MT_CHAPTER (see modules/README_CONTENT.md) and runs
 * the loop: Learn → Guided try → Practice (until mastery) → Mastery check.
 * No network, no cookies, no analytics. Progress is kept in memory unless a grown-up
 * ticks "Remember progress on this device" (localStorage on that device only).
 */
(() => {
  'use strict';
  const C = window.MT_CHAPTER;
  const app = document.getElementById('app');
  if (!C || !app) { if (app) app.textContent = 'Lesson content could not be loaded.'; return; }

  const RULE = Object.assign({ guided: 2, practiceMin: 5, practiceWindow: 5, practiceNeed: 4, practiceMax: 12, tries: 2, checkPerSkill: 2, checkPass: 0.8 }, C.rules || {});
  const KEY = 'mt-progress:' + C.id;

  // ---------- state ----------
  const blank = () => ({ skills: {}, check: null });
  let remember = false;
  let progress = blank();
  try { const saved = localStorage.getItem(KEY); if (saved) { progress = Object.assign(blank(), JSON.parse(saved)); remember = true; } } catch (e) { /* storage unavailable: memory only */ }
  let voice = true;

  const save = () => { if (!remember) return; try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch (e) { /* ignore */ } };
  const skillState = id => (progress.skills[id] = progress.skills[id] || { status: 'new', attempts: 0, firstTry: 0 });

  // ---------- helpers ----------
  const el = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) n.setAttribute(k, v === true ? '' : v);
    }
    kids.flat().forEach(c => c != null && n.append(c.nodeType ? c : document.createTextNode(String(c))));
    return n;
  };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const plain = s => String(s || '').replace(/[\p{Extended_Pictographic}\u{FE0F}\u{20E3}]/gu, '').replace(/\s+/g, ' ').trim();
  const speechOK = 'speechSynthesis' in window;
  const say = text => {
    if (!voice || !speechOK) return;
    try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(plain(text).slice(0, 600)); u.lang = C.lang || 'en-US'; u.rate = 0.85; speechSynthesis.speak(u); } catch (e) { /* ignore */ }
  };
  const screen = (...kids) => { if (speechOK) speechSynthesis.cancel(); app.replaceChildren(...kids); window.scrollTo(0, 0); const h = app.querySelector('h1,h2,.prompt'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } };
  const statusIcon = s => ({ new: '⚪', practicing: '🟡', mastered: '⭐', review: '🔁' }[s] || '⚪');
  const statusText = s => ({ new: 'Not started', practicing: 'Practising', mastered: 'Mastered!', review: 'Needs a little more practice' }[s]);
  const stepper = (n) => el('div', { class: 'steps', 'aria-hidden': 'true' }, [0, 1, 2].map(i => el('span', { class: i <= n ? 'on' : '' })));

  // ---------- header voice toggle ----------
  const voiceBtn = document.getElementById('voiceBtn');
  const paintVoice = () => { if (!voiceBtn) return; voiceBtn.textContent = voice ? '🔊 Voice on' : '🔇 Voice off'; voiceBtn.setAttribute('aria-pressed', String(voice)); };
  if (voiceBtn) voiceBtn.addEventListener('click', () => { voice = !voice; if (!voice && speechOK) speechSynthesis.cancel(); paintVoice(); if (voice) say('Voice is on.'); });
  if (!speechOK) voice = false;
  paintVoice();

  // ---------- one question ----------
  /* opts: { mode: 'guided'|'practice'|'check', onDone({correct, firstTry, usedHint}) } */
  function questionView(item, opts) {
    const mode = opts.mode;
    const maxTries = mode === 'check' ? 1 : (mode === 'guided' ? 3 : RULE.tries);
    let tries = 0, hintLevel = 0, done = false;
    const fb = el('div', { class: 'feedback', role: 'status', 'aria-live': 'polite' });
    const show = (cls, text, speak = true) => { fb.className = 'feedback show ' + cls; fb.textContent = text; if (speak) say(text); };

    // stimulus
    const st = item.stimulus || {};
    const stage = el('div', { class: 'stage' },
      st.emoji ? el('span', { class: 'pic', role: 'img', 'aria-label': st.alt || 'picture' , text: st.emoji }) : null,
      st.word ? el('span', { class: 'word', text: st.word }) : null,
      st.label ? el('span', { class: 'label', text: st.label }) : null);

    const optionList = item.kind === 'letters' ? item.options : shuffle(item.options);
    const spokenPrompt = () => {
      let t = item.say || item.prompt;
      if (item.speakOptions) { const ls = optionList.map(o => o.l || o.v); t += ' ' + ls.slice(0, -1).join(', ') + ', or ' + ls[ls.length - 1] + '?'; }
      return t;
    };

    const optBox = el('div', { class: 'options' + (item.kind === 'letters' ? ' letters' : (optionList.length === 3 ? ' n3' : '')) });
    const buttons = [];
    optionList.forEach((o, i) => {
      const showLabel = item.showLabels !== false;
      const aria = showLabel ? (o.l || o.v) : 'Picture ' + (i + 1);
      const b = el('button', { class: 'opt', type: 'button', 'aria-label': aria },
        o.e ? el('span', { class: 'oe', 'aria-hidden': 'true', text: o.e }) : null,
        showLabel ? el('span', { class: 'ol', text: o.l || o.v }) : null);
      b.addEventListener('click', () => choose(o, b));
      buttons.push([o, b]);
      optBox.append(b);
    });

    const nextBtn = el('button', { class: 'primary', type: 'button', hidden: true, text: 'Next →', onclick: () => opts.onDone({ correct: result.correct, firstTry: result.firstTry, usedHint: hintLevel > 0 }) });
    const hintBtn = mode === 'check' ? null : el('button', { type: 'button', class: 'ghost', text: '💡 Hint', onclick: () => giveHint() });
    const hearBtn = el('button', { type: 'button', class: 'ghost', text: '🔊 Hear it again', onclick: () => say(spokenPrompt()) });
    const result = { correct: false, firstTry: false };

    function giveHint() {
      if (done) return;
      const hints = item.hints || [];
      if (!hints.length) return;
      const h = hints[Math.min(hintLevel, hints.length - 1)];
      hintLevel++;
      show('hint', '💡 ' + h);
      if (hintLevel >= hints.length && hintBtn) hintBtn.disabled = true;
    }

    function finish(correct) {
      done = true;
      buttons.forEach(([o, b]) => { b.disabled = true; if (o.v === item.answer) b.classList.add('right'); });
      if (hintBtn) hintBtn.hidden = true;
      nextBtn.hidden = false;
      nextBtn.focus({ preventScroll: true });
      setTimeout(() => nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
    }

    function choose(o, b) {
      if (done || b.classList.contains('wrong')) return;
      tries++;
      if (o.v === item.answer) {
        result.correct = true; result.firstTry = tries === 1;
        b.classList.add('right', 'pop');
        const praise = shuffle(['⭐ Yes!', '🎉 You got it!', '🌟 Super!', '👏 Great listening!'])[0];
        show('good', praise + ' ' + (item.why || ''));
        finish(true);
        return;
      }
      b.classList.add('wrong'); b.disabled = true;
      const fbText = (item.feedback && item.feedback[o.v]) || 'Not quite.';
      if (tries >= maxTries) {
        show('try', mode === 'check' ? 'Not this time. ' + (item.why || '') : fbText + ' ' + (item.why || ''));
        finish(false);
      } else {
        // after a wrong try, offer the next hint automatically in guided mode
        if (mode === 'guided' && item.hints && hintLevel < item.hints.length) { const h = item.hints[hintLevel++]; show('try', fbText + ' 💡 ' + h); }
        else show('try', fbText + ' Try again!');
      }
    }

    const view = el('div', {},
      el('p', { class: 'prompt', text: item.prompt }),
      stage, optBox, fb,
      el('div', { class: 'tools' }, hearBtn, hintBtn, nextBtn));
    setTimeout(() => say(spokenPrompt()), 250);
    return view;
  }

  // ---------- screens ----------
  function startScreen() {
    screen(el('div', { class: 'card start' },
      el('div', { class: 'big', 'aria-hidden': 'true', text: C.emoji || '✦' }),
      el('span', { class: 'pill', text: `GRADE ${C.grade} · ${String(C.subject).toUpperCase()} · ${C.code || ''}` }),
      el('h1', { text: C.title }),
      el('p', { class: 'muted', text: C.tagline || '' }),
      el('button', { class: 'primary', type: 'button', text: '▶ Tap to start', onclick: () => { say('Hello! Let\'s learn together.'); home(); } }),
      el('p', { class: 'muted', text: 'My Teacher talks to you. Turn your sound on! 🔊' })));
  }

  function home() {
    const allMastered = C.skills.every(s => skillState(s.id).status === 'mastered');
    const list = el('div', { class: 'skills' }, C.skills.map((s, i) => {
      const ss = skillState(s.id);
      return el('button', { class: 'skill' + (ss.status === 'mastered' ? ' done' : ss.status === 'review' ? ' review' : ''), type: 'button', onclick: () => learn(s, 0) },
        el('span', { class: 'ico', 'aria-hidden': 'true', text: s.emoji }),
        el('span', {}, el('b', { text: `${i + 1}. ${s.title}` }), el('small', { text: statusText(ss.status) })),
        el('span', { class: 'status', 'aria-hidden': 'true', text: statusIcon(ss.status) }));
    }));
    const chk = progress.check;
    screen(
      el('div', { class: 'card' },
        el('span', { class: 'pill', text: `GRADE ${C.grade} · ${String(C.subject).toUpperCase()} · ${C.code || ''}` }),
        el('h1', { text: `${C.emoji || ''} ${C.title}` }),
        el('p', { class: 'muted', text: 'Pick a skill. Learn it, try it, practise it until you get a ⭐. Then take the Star Challenge!' }),
        list,
        el('button', { class: 'primary checkbtn', type: 'button', onclick: () => check() },
          `🏆 Star Challenge${chk ? ` — best ${chk.best}/${chk.total}${chk.passed ? ' ⭐' : ''}` : ''}`),
        allMastered ? null : el('p', { class: 'muted center', text: 'Tip: get a ⭐ on every skill first.' })),
      parentNotes());
  }

  function parentNotes() {
    const box = el('input', { type: 'checkbox', id: 'remember' });
    box.checked = remember;
    box.addEventListener('change', () => {
      remember = box.checked;
      try { if (remember) localStorage.setItem(KEY, JSON.stringify(progress)); else localStorage.removeItem(KEY); } catch (e) { box.checked = remember = false; alert('This browser cannot remember progress. It will stay for this visit only.'); }
    });
    return el('div', { class: 'card note' },
      el('h2', { text: 'For parents and teachers' }),
      el('p', {}, 'Standards: ', el('b', { text: (C.standards || []).join(', ') }), C.standardsNote ? ' — ' + C.standardsNote : ''),
      el('p', { text: 'How it works: each skill has a short lesson, two guided tries with hints, then practice until your child gets 4 of the last 5 right on the first try. The Star Challenge mixes all skills with no hints; 80% earns the chapter star. Hints never give the answer away.' }),
      el('label', {}, box, 'Remember progress on this device'),
      el('p', { text: 'Off by default. When on, progress is saved only in this browser on this device — nothing is sent anywhere. No account, no tracking.' }),
      el('div', { class: 'row' },
        el('button', { type: 'button', class: 'ghost', text: '⬇ Download progress', onclick: exportProgress }),
        el('button', { type: 'button', class: 'ghost', text: '↻ Start over', onclick: () => { if (confirm('Clear all progress for this chapter?')) { progress = blank(); save(); home(); } } })));
  }

  function exportProgress() {
    const data = { chapter: C.id, title: C.title, exportedAt: new Date().toISOString(), skills: C.skills.map(s => ({ skill: s.title, standard: s.standard, ...skillState(s.id) })), starChallenge: progress.check, note: 'Practice record from My Teacher. Not an official grade.' };
    const a = el('a', { href: URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })), download: `my-teacher-${C.id}-progress.json` });
    document.body.append(a); a.click(); a.remove();
  }

  function skillHeader(s, stepIdx, stepLabel) {
    return [
      el('div', { class: 'row' }, el('button', { type: 'button', class: 'ghost', text: '← Skills', onclick: home }), el('span', { class: 'spacer' }), el('span', { class: 'pill', text: s.standard })),
      el('h2', { text: `${s.emoji} ${s.title}` }),
      stepper(stepIdx),
      el('div', { class: 'stepname', text: stepLabel })];
  }

  function learn(s, i) {
    const ss = skillState(s.id); if (ss.status === 'new') { ss.status = 'practicing'; save(); }
    const card = s.learn[i];
    const last = i === s.learn.length - 1;
    screen(el('div', { class: 'card' },
      ...skillHeader(s, 0, `Learn · ${i + 1} of ${s.learn.length}`),
      el('div', { class: 'learn' },
        el('div', { class: 'emoji', 'aria-hidden': 'true', text: card.emoji || '' }),
        el('p', { text: card.text })),
      el('div', { class: 'tools' },
        el('button', { type: 'button', class: 'ghost', text: '🔊 Hear it again', onclick: () => say(card.say || card.text) }),
        i > 0 ? el('button', { type: 'button', class: 'ghost', text: '← Back', onclick: () => learn(s, i - 1) }) : null,
        el('button', { type: 'button', class: 'primary', text: last ? 'Let\'s try one together →' : 'Next →', onclick: () => last ? guided(s, shuffle(s.items), 0) : learn(s, i + 1) }))));
    setTimeout(() => say(card.say || card.text), 250);
  }

  function guided(s, pool, n) {
    if (n >= RULE.guided) return practice(s, pool.slice(RULE.guided), []);
    screen(el('div', { class: 'card' },
      ...skillHeader(s, 1, `Try it together · ${n + 1} of ${RULE.guided}`),
      questionView(pool[n], { mode: 'guided', onDone: () => guided(s, pool, n + 1) })));
  }

  function practice(s, pool, history) {
    const ss = skillState(s.id);
    const recent = history.slice(-RULE.practiceWindow);
    const solid = recent.filter(Boolean).length;
    if (history.length >= RULE.practiceMin && solid >= RULE.practiceNeed) { ss.status = 'mastered'; save(); return skillDone(s, true, history); }
    if (history.length >= RULE.practiceMax) { if (ss.status !== 'mastered') ss.status = 'review'; save(); return skillDone(s, false, history); }
    if (!pool.length) pool = shuffle(s.items);
    const item = pool[0];
    const meter = el('div', { class: 'meter' }, el('span', { class: 'stars', 'aria-label': `${solid} of ${RULE.practiceNeed} stars`, text: '★'.repeat(Math.min(solid, RULE.practiceNeed)) + '☆'.repeat(Math.max(0, RULE.practiceNeed - solid)) }), '  Get 4 stars by answering right on the first try!');
    screen(el('div', { class: 'card' },
      ...skillHeader(s, 2, `Practice · question ${history.length + 1}`),
      meter,
      questionView(item, { mode: 'practice', onDone: r => { ss.attempts++; if (r.firstTry && !r.usedHint) ss.firstTry++; save(); practice(s, pool.slice(1), history.concat(r.firstTry && !r.usedHint)); } })));
  }

  function skillDone(s, mastered, history) {
    const idx = C.skills.indexOf(s), nextSkill = C.skills[idx + 1];
    const msg = mastered ? `You mastered ${s.title}!` : `Good work! ${s.title} needs a little more practice. Let's come back to it soon.`;
    screen(el('div', { class: 'card result' },
      el('div', { class: 'big pop', 'aria-hidden': 'true', text: mastered ? '⭐' : '🌱' }),
      el('h2', { text: msg }),
      el('p', { class: 'muted', text: `${history.filter(Boolean).length} of ${history.length} right on the first try.` }),
      el('div', { class: 'row', style: null },
        el('button', { type: 'button', class: 'ghost', text: '← All skills', onclick: home }),
        el('button', { type: 'button', class: 'ghost', text: '🔁 Practise again', onclick: () => practice(s, shuffle(s.items), []) }),
        nextSkill ? el('button', { type: 'button', class: 'primary', text: `Next: ${nextSkill.title} →`, onclick: () => learn(nextSkill, 0) })
          : el('button', { type: 'button', class: 'primary', text: '🏆 Star Challenge →', onclick: check }))));
    say(msg);
  }

  function check() {
    const items = shuffle(C.skills.flatMap(s => shuffle(s.items).slice(0, RULE.checkPerSkill).map(it => ({ it, s }))));
    const results = [];
    const step = n => {
      if (n >= items.length) return checkDone(items, results);
      screen(el('div', { class: 'card' },
        el('div', { class: 'row' }, el('button', { type: 'button', class: 'ghost', text: '← Skills', onclick: () => { if (confirm('Leave the Star Challenge?')) home(); } }), el('span', { class: 'spacer' }), el('span', { class: 'pill', text: `${n + 1} of ${items.length}` })),
        el('h2', { text: '🏆 Star Challenge' }),
        el('p', { class: 'muted', text: 'No hints this time. Do your best!' }),
        questionView(items[n].it, { mode: 'check', onDone: r => { results.push(r.correct); step(n + 1); } })));
    };
    step(0);
  }

  function checkDone(items, results) {
    const score = results.filter(Boolean).length, total = results.length, passed = score / total >= RULE.checkPass;
    const prev = progress.check;
    progress.check = { best: Math.max(score, prev ? prev.best : 0), total, passed: passed || !!(prev && prev.passed), last: score };
    const missed = [...new Set(items.filter((x, i) => !results[i]).map(x => x.s))];
    missed.forEach(s => { const ss = skillState(s.id); if (ss.status === 'mastered' && !passed) ss.status = 'review'; });
    save();
    const msg = passed ? `Amazing! You earned the ${C.title} star!` : `You got ${score} out of ${total}. Let's practise a little more and try again.`;
    screen(el('div', { class: 'card result' },
      el('div', { class: 'big pop', 'aria-hidden': 'true', text: passed ? '🏆' : '💪' }),
      el('h2', { text: msg }),
      el('p', { class: 'stars', 'aria-label': `${score} of ${total}`, text: '★'.repeat(score) + '☆'.repeat(total - score) }),
      missed.length ? el('div', {}, el('p', { class: 'muted', text: 'Practise these next:' }), el('ul', {}, missed.map(s => el('li', {}, el('button', { type: 'button', class: 'ghost', text: `${s.emoji} ${s.title}`, onclick: () => practice(s, shuffle(s.items), []) }))))) : null,
      el('div', { class: 'row', style: null }, el('button', { type: 'button', class: 'primary', text: '← All skills', onclick: home }))));
    say(msg);
  }

  startScreen();
})();
