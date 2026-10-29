# My Teacher 2.0 — development build

BillionPrompts.ai. English-first, parent-configured AI tutoring prototype.

## Install
Upload the **contents** of this folder to a private PHP-enabled site, preferably an HTTPS test subdomain. PHP 8.1+ with cURL and mbstring is required. Open `index.php`. No database required for this prototype.

## What's implemented
- Six built-in guided lessons, grades K–5, subject navigation, basic assignments and objective-question grading.
- Drawing canvas, notes, print/download.
- **Parents' Corner**: session PIN gate, API provider selector, password-style API key entry, model field, connect/disconnect, **Test AI connection** button, and approved source excerpt input.
- Server-side calls to OpenAI chat completions and Gemini generateContent for lesson questions, AI notes, and printable AI assignments.
- English speech synthesis and optional push-to-talk browser speech recognition (browser-dependent, may involve provider processing).
- Temporary in-memory browser content and session-scoped server credentials; End & Clear button.

## Important limitations — NOT ready for children in production
- Parent PIN is a session-local UI gate, **not secure identity verification**. No real parent/child accounts, no parental identity verification, no database, no institutional subscription billing.
- AI safety screening is simplistic and can miss dangerous content or misclassify a child's request for help. The parent lock is a prototype, not a robust safety control.
- Pasted curriculum excerpt is sent to the chosen AI provider with generation requests; no PDF/DOCX ingestion or retrieval integration yet. Review generated content for correctness.
- Browser speech recognition may send audio to a third party; behavior differs by browser. No recordings are intentionally stored by this application.
- AI API provider may retain prompts and data. Session-only storage on this app does not guarantee third-party deletion. PHP session files can remain on server until garbage collection; do not promise instant deletion from every system.
- AI assignment generation is printable text, not interactive grading. Existing objective quiz grading is functional; subjective grading is not production-ready.
- Key is held in a PHP session and not permanently saved, but PHP session storage and host security require production hardening. Never put a key in public JavaScript.
- API calls consume user's paid tokens; this build does not enforce spending limits.
- No guarantee that every provider/model is compatible; test a model and credentials on your own server.
- No production-grade COPPA review, upload security, privacy audit, penetration test, or accessibility audit.

## Pricing intent
Individuals free with their own API key. Institutions free through 2026-12-31; proposed $10/month from 2027-01-01 with affirmative opt-in. Billing **not implemented**.

## Test checklist
1. Open site via HTTPS, select Grade 3 / Math / Pizza Fractions, answer questions.
2. Draw and print notes, save PNG.
3. Parent corner: set PIN, select provider/model, connect, test.
4. Paste a short approved source excerpt; click AI notes / AI assignment.
5. Check microphone permission, speak a question, press Ask, and Read lesson.
6. End & Clear and confirm lesson state resets.
