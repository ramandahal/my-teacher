#!/usr/bin/env node
/* Quality gate for My Teacher chapter files. Usage: node tools/validate-chapter.js modules/<id>/chapter.js
 * Fails (exit 1) on any error. Run before every upload. */
'use strict';
const fs = require('fs'), vm = require('vm');
const file = process.argv[2];
if (!file) { console.error('Usage: node tools/validate-chapter.js <chapter.js>'); process.exit(2); }
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
const C = sandbox.window.MT_CHAPTER;
const errors = [], warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

if (!C) { console.error('window.MT_CHAPTER not set'); process.exit(1); }
for (const k of ['id', 'grade', 'subject', 'title', 'standards', 'skills']) if (C[k] == null) err('chapter', `missing "${k}"`);
const ids = new Set();
(C.skills || []).forEach(s => {
  const w = `skill ${s.id}`;
  for (const k of ['id', 'title', 'standard', 'learn', 'items']) if (s[k] == null) err(w, `missing "${k}"`);
  if (s.standard && !(C.standards || []).includes(s.standard)) err(w, `standard ${s.standard} not listed in chapter.standards`);
  if (!s.learn || s.learn.length < 2) err(w, 'needs at least 2 learn cards');
  if (!s.items || s.items.length < 10) err(w, `needs at least 10 items (has ${s.items ? s.items.length : 0}) so practice does not repeat too soon`);
  (s.items || []).forEach(it => {
    const iw = `${w} / item ${it.id}`;
    if (ids.has(it.id)) err(iw, 'duplicate item id'); ids.add(it.id);
    if (!it.prompt) err(iw, 'missing prompt');
    const vals = (it.options || []).map(o => o.v);
    if (vals.length < 3) err(iw, 'needs at least 3 options');
    if (new Set(vals).size !== vals.length) err(iw, 'duplicate option values');
    if (!vals.includes(it.answer)) err(iw, `answer "${it.answer}" is not one of the options`);
    if (it.showLabels === false && (it.options || []).some(o => !o.e)) err(iw, 'picture-only item has an option without a picture');
    if (!it.hints || it.hints.length < 2) err(iw, 'needs 2 hint levels');
    if (!it.why) err(iw, 'missing "why" explanation');
    // hints must not give the answer away
    const ans = String(it.answer).toLowerCase();
    (it.hints || []).forEach((h, i) => {
      const words = h.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/);
      const inStimulus = JSON.stringify(it.stimulus || {}).toLowerCase().includes(ans);
      if (ans.length > 1 && words.includes(ans) && !inStimulus) err(iw, `hint ${i + 1} contains the answer "${it.answer}"`);
    });
    // every wrong option should have its own feedback (misconception-based)
    vals.filter(v => v !== it.answer).forEach(v => { if (!it.feedback || !it.feedback[v]) warn(iw, `no specific feedback for wrong option "${v}"`); });
    if (it.showLabels === false) {
      const st = JSON.stringify(it.stimulus || {});
      if ((it.options || []).some(o => o.e && st.includes(o.e))) err(iw, 'stimulus shows the answer picture');
    }
  });
});
// answer position bias is handled by runtime shuffling; check that all items in a skill are not identical
warnings.forEach(w => console.log('WARN  ' + w));
errors.forEach(e => console.log('ERROR ' + e));
const n = (C.skills || []).reduce((a, s) => a + (s.items || []).length, 0);
console.log(`\n${C.id}: ${C.skills.length} skills, ${n} items — ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
