# SIP Reality Check — Vercel deployment guide

This package is a **separate Vercel-compatible copy** of the corrected MVP. It leaves your currently published Netlify version untouched.

## Safest deployment

1. **Do not upload this into the existing Netlify-connected GitHub repository's main branch.** Instead, create a new GitHub repository (for example `sip-reality-check-vercel`) and upload the contents of this extracted folder to its root. Do not upload only the ZIP file.
2. In Vercel, select **Add New → Project → Import Git Repository**, choose the new repository, and select your personal Hobby scope if eligible for non-commercial use.
3. Set the framework preset to **Other**, root directory to `./`, and leave build command blank if Vercel recognizes the static site. There is no npm build required.
4. Before deploying, expand **Environment Variables** and enter `GEMINI_API_KEY` with the same privately held key used for the current app. Do **not** paste the key in GitHub, ChatGPT, or your screenshots. If your previous deployment has a custom `GEMINI_MODEL`, add that too. The app otherwise uses its existing default model.
5. Deploy. On Vercel, open the URL and check the reflection endpoint by submitting a test scenario. A fallback 'guided' response is **not** proof that Gemini is configured; verify that the response indicates AI-assisted mode when available.
6. Test payment failure, affordability, mutual fund selection, learning topics, Partly/Not yet, saved starting point, and Edit my answers. Only replace your submission URL if the Vercel version passes.

## Changes from Netlify

- A Vercel Node.js function in `api/reflect.mjs` adapts the existing security and Gemini reflection logic in `netlify/functions/reflect.cjs`.
- `app.js` now sends POST requests to `/api/reflect`.
- `vercel.json` specifies function timeout and security headers.
- The existing Netlify config is included for provenance only and is unused by Vercel.

## Important

The AI safety checks catch some errors, not all possible unsupported assumptions. Financial information is educational only. The Vercel build and live Gemini connection have **not** been verified from this offline environment. Keep Netlify as the working backup.
