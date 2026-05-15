# Project Instructions — D365 Developer Knowledge Base

## Stack
- Angular 19 standalone components, SCSS, TypeScript strict mode
- No UI library — custom design system only
- Data source: `src/assets/data/developments.json`
- Deployed to GitHub Pages via `npm run deploy`

## Workflow for every new feature or requirement

Follow these steps in order, without skipping any:

### 1. Branch
- Fetch latest main: `git fetch origin main`
- Create a new branch from it: `git checkout -b feature/<short-description> origin/main`
- Branch names must be lowercase, hyphen-separated, no abbreviations that need decoding
- Never use "claude" anywhere — not in branch names, commit messages, PR titles, or code comments

### 2. Implement
- Make all changes on the feature branch
- Follow the existing SOLID architecture — one responsibility per component, signals throughout, `inject()` for DI
- No inline styles, no hardcoded hex values not already in `_variables.scss`
- No new NgModules — standalone components only

### 3. Test
- Run `npx ng build --configuration production` — must complete with zero errors and zero warnings
- Verify the build output contains the expected files under `dist/d365-dev-kb/browser/`
- If the build fails, fix all errors before proceeding

### 4. Commit and push
- Stage only the relevant files (never `git add -A` blindly)
- Write a concise commit message: `type: what changed and why` (types: feat, fix, refactor, style, chore)
- Push: `git push -u origin <branch-name>`

### 5. Create PR
- Open a PR from the feature branch into `main`
- Title: short and descriptive, no "claude", no ticket numbers unless provided
- Body: Summary (bullet points), Components changed, Test plan checklist

### 6. Review
- Run the `/review` skill immediately after creating the PR
- Read every issue raised and assess severity

### 7. Fix review comments
- Apply all Critical and Major fixes on the same branch
- Rebuild (`npx ng build --configuration production`) after every fix to confirm no regressions
- Push the fixes

### 8. Deploy and merge
- Rebuild production and redeploy: `npx ng build --configuration production && npx gh-pages -d dist/d365-dev-kb/browser --repo $(git remote get-url origin)`
- Merge the PR into `main` using squash merge
- The feature branch can be deleted after merge

## Adding new developments
- Drop the new `developments.json` into `src/assets/data/`
- Rebuild and redeploy (step 8 above)
- No code changes needed — the app is fully data-driven

## Key files
| File | Purpose |
|------|---------|
| `src/assets/data/developments.json` | All content — the only file that changes for new entries |
| `src/styles/_variables.scss` | All design tokens — add new tokens here, nowhere else |
| `src/app/core/models/` | TypeScript interfaces — extend here for new content types |
| `src/app/core/services/developments.service.ts` | HTTP + cache |
| `src/app/core/services/navigation.service.ts` | Active pane + search state |
