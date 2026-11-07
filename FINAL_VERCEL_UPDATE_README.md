# SIP Reality Check — Consolidated Vercel Fix (7 November 2026)

## Changes
- Correct current-concern learning-topic matching. A monthly SIP payment that is hard to afford is **not** an actual failed debit.
- Recognize confusion about selected mutual funds and suitability as a **fund-types and risks** learning topic, not an automatically missing investment goal.
- Preserve the investor's manually chosen learning topic when toggling between *Partly* and *Not yet*.
- Show neutral, more concrete steps for evaluating mutual fund information without recommending a specific fund.
- Correct the privacy dialog: user entries are processed through a Vercel-hosted server function (not Netlify) and then sent to the Gemini API.
- Preserve all existing reflection, storage opt-in, editing, educational links, and no-pressure guardrails.

## Deployment
1. Keep the current Vercel URL active while preparing this upload.
2. In the existing **private** GitHub repository `sip-reality-check-vercel`, upload the **contents** of this ZIP at the repository root, replacing files with the same names. Preserve `api/`, `netlify/functions/`, and `tests/` directory structure.
3. Commit to `main` **once**. Vercel should deploy the new commit automatically.
4. Keep the already-configured `GEMINI_API_KEY` in Vercel project settings. **Do not** upload or reveal the key.
5. Once Vercel reports Ready, open the site in a private/incognito window and verify:
   - Concern: "My monthly expenses have increased and I'm struggling to manage my SIP payments. I can't afford the same amount." → Budget or affordability.
   - Concern: "I'm confused about the mutual funds I selected. I don't know whether they are suitable for my goals." → Understanding different mutual funds.
   - Concern: "My SIP instalment failed this month." → Missed or failed payment.
   - On Partly select a different learning topic, then switch to Not yet; the chosen topic remains.
   - Privacy **Learn more** mentions **Vercel**, not Netlify.
   - Check at least one full AI reflection and a Quick Read; fallback mode is explicitly labelled if Gemini is unavailable.

## Validation limits
Local tests passed. These are deterministic checks and mocked API responses; real Gemini output has not been independently verified in this bundle. The app is educational and must not provide personalized financial advice. Retain the old Netlify URL as a backup and use the new Vercel link for fellowship submission only after the above checks pass.
