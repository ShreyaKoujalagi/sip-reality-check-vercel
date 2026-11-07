# Final offline accuracy and learning relevance fix

This update is **not deployed**. Netlify's paused production deployments mean the existing live site remains unchanged.

Changes:
- If a user merely expresses confusion, Gemini is instructed not to manufacture specific user beliefs. The server rejects common second-person speculative belief statements unless the input explicitly contains a belief. Rejected AI responses fall back to the labeled guided worksheet.
- Neutralized a speculative returns-related guided worksheet statement.
- Added a distinct educational topic for comparing or choosing mutual funds, without recommending a fund.
- Added the topic to the learning dropdown; existing learning options and two-stage layout are preserved.

Checks: main automated test suite and targeted relevance tests pass. These checks do **not** guarantee all AI statements are accurate. Live Gemini output and live deployment have not been tested.

To deploy after production deploys resume: upload the contents of this folder to the existing GitHub repository root, preserving paths, and commit. Do not create a new Netlify site.
