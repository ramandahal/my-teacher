# My Teacher — working foundation release

A responsive child-friendly PHP/JavaScript learning application by BillionPrompts.ai.

## Run
Requires PHP 8.1+ with cURL and mbstring. Upload all files together into a folder on a PHP-enabled Hostinger website with HTTPS, or locally run `php -S localhost:8000` in this folder and open `http://localhost:8000/index.php`. Use HTTPS for production. The PHP built-in server is for local development only.

## Included and working
- Kindergarten–Grade 5 grade picker and subject picker; six complete guided lessons in specific grade/subject combinations.
- Three-step interactive multiple-choice lessons, instant feedback, hints, basic assessment, and browser-printable assignments.
- Notes, printable/downloadable notes, touchscreen drawing canvas with pen/eraser/colors, PNG export and printing.
- Temporary PHP-session API key configuration for OpenAI chat completions or Gemini generateContent, with live Q&A during lessons. Keys are never placed in browser storage. Provider API use costs money.
- Basic parent PIN gate and reviewable in-session keyword alerts. No accounts, tracking scripts, persistent database, or payment processing.
- Session clear button.

## Critical limitations — do not deploy publicly for children without further work
- **This is a functional foundation, not a completed production platform.** Lesson animations are emoji/text-based; no upload/ingestion, institutional accounts, subscriptions, saved portfolios, AI-generated assignments, true open-ended AI grading, full lesson generation, or school curriculum integrations yet.
- The PIN is session-only and is **not verified parental consent or secure authentication**. Safety filtering is a very basic keyword heuristic, not a robust child-safety moderation service. Parent alerts do not persist after session end and cannot notify an absent parent. Child safety and emergency handling need professional review.
- PHP sessions may persist server-side until cleanup; browser reload closes the active AI session best-effort. A server administrator may access temporary server files. Third-party LLM providers may retain requests. Do not promise absolute zero data processing or guaranteed immediate deletion.
- In-session data held in JavaScript disappears on reload; refresh and navigation may cause loss of work. Download before leaving. The default PHP session handler writes API keys to server-side session files: for public launch, implement a short-TTL encrypted vault or client-held ephemeral credentials with robust security review.
- CSP and server security headers should be audited in deployment; CSRF and origin validation need full production security testing, as do abuse limits and session fixation defenses. Never share your personal API key with children.
- Do not use this release for actual school student records or production child accounts. Obtain legal review of COPPA, FERPA (where applicable), and privacy policies before launch.

## Roadmap
Secure adult account/consent system, educator-approved content upload, source-grounded lesson generation, structured drawing tasks, safe multimodal grading, institution billing ($10/month from Jan 1 2027 only after opt-in), teacher review, privacy-safe storage/export, WCAG testing, and external security review.

Pricing policy: individuals free; institutions free through Dec 31, 2026, then $10/month only with explicit authorization; BYO AI provider API usage is separate. **No billing is implemented in this release.**
