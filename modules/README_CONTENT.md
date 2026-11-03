# My Teacher — how chapters are built

Every chapter, for every grade and subject, runs on one shared player:

```
modules/engine/player.js    the lesson player (shared, no network)
modules/engine/player.css   shared styles (mobile-first)
modules/<chapter-id>/index.html   7-line page that loads the two files below
modules/<chapter-id>/chapter.js   the content: data only
tools/validate-chapter.js   quality gate, run before every upload
```

Naming: `g<grade>-<subject>-m<nn>` — e.g. `g1-ela-m01`, `g1-math-m02`, `g3-sci-m04`.

## The learning loop (same for every chapter)

1. **Learn**: 2–4 short cards, read aloud automatically.
2. **Try it together**: 2 guided questions. A wrong answer brings up the next hint automatically.
3. **Practice**: continues until the child gets **4 of the last 5 right on the first try without a hint** (minimum 5, maximum 12 questions). Reaching 12 without that marks the skill *needs more practice* (🔁), not failed.
4. **Star Challenge**: 2 questions per skill, mixed, no hints, one try. 80% earns the chapter star. Missed skills are listed with a "practise" button.

Rules can be tuned per chapter with `rules: { practiceNeed: 4, practiceWindow: 5, practiceMin: 5, practiceMax: 12, checkPerSkill: 2, checkPass: 0.8 }`.

## Content format (`chapter.js`)

```js
window.MT_CHAPTER = {
  id: 'g1-ela-m01', code: 'ELA M01', grade: 1, subject: 'English', lang: 'en-US',
  title: 'Sound Safari', emoji: '🦁', tagline: '…',
  standards: ['RF.1.2c', 'RF.1.3b'], standardsNote: 'Common Core (US) …',
  skills: [{
    id: 'first', title: 'First sounds', emoji: '👂', standard: 'RF.1.2c',
    learn: [{ emoji: '☀️🧦', text: 'shown on screen', say: 'what the voice says (optional)' }],
    items: [{
      id: 'first-1',
      prompt: 'Which one starts with the same sound as “sun”?',
      say: 'spoken version (optional)',
      stimulus: { emoji: '☀️', label: 'sun', word: 'big text', alt: 'screen-reader text' },
      options: [{ v: 'sock', e: '🧦', l: 'sock' }, …],   // shuffled at runtime
      answer: 'sock',
      kind: 'letters',          // optional: small letter buttons, kept in order
      showLabels: false,        // optional: picture-only options (reading tasks)
      speakOptions: true,       // optional: voice reads the options (pre-readers)
      hints: ['nudge — never the answer', 'stronger scaffold — still not the answer'],
      why: 'one-line explanation shown after answering',
      feedback: { bus: 'Bus ENDS with that sound. We need one that STARTS like sun.' }  // per wrong option
    }]
  }]
};
```

## Quality bar (enforced by `node tools/validate-chapter.js modules/<id>/chapter.js`)

- Every answer is one of the options; option values are unique; ids unique.
- At least 10 items and 2 learn cards per skill; every skill's standard is listed on the chapter.
- Two hint levels on every item, and **no hint contains the answer**.
- Every wrong option has its own feedback that names the likely misunderstanding (warning if missing).
- Picture-only items: every option has a picture, and the stimulus doesn't show the answer picture.

Human review is still required for each chapter: correct content, age-appropriate words, pictures that a 6-year-old will name the way we expect, and the standards alignment.

## Privacy

The player makes no network requests, sets no cookies and has no analytics. Progress is kept in memory unless a grown-up ticks "Remember progress on this device", which uses `localStorage` in that browser only. "Download progress" saves a JSON file to the device.
