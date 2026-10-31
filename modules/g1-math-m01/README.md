# MY TEACHER — M01 My Number Playground

Open `index.html` in a modern browser or upload the complete folder to shared hosting. No build step, server, account, or API required.

## Status
Functional prototype. Automated browser testing not performed. Georgia standards crosswalk pending. Do not represent this as complete 1.NBT.A.1 coverage.

## Privacy
No fetch, cookies, localStorage, analytics, external fonts, or third-party libraries. Session state is held in JavaScript memory. Optional export downloads JSON to the device.

## Known limitations
- The Number Adventure is randomized question types, not a structured mastery progression.
- 'Number Explorer' is a numeral recognition quiz, not a complete teaching lesson.
- Counting Garden deliberately uses small groups even at higher levels; counting to 120 is practiced through sequences.
- The mastery score is a practice indicator, not a validated mastery determination.
- The mastery numeral-recognition display uses digits rather than written number words; revise in a later iteration.
- Full accessibility and mobile testing are still required.

## Manual QA
1. Open locally and via HTTP; verify no missing assets.
2. Test all seven activities at levels A–D.
3. Verify correct/incorrect responses, feedback, hints, and new questions.
4. Verify voice toggle and text alternatives.
5. Test touch, keyboard, zoom 200%, narrow screens, and screen reader.
6. Confirm no network calls, cookies, or persistent browser storage.
7. Test optional export and reset.
8. Audit standards alignment and all generated question ranges.
