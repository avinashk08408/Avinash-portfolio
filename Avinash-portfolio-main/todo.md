# Component Architecture Refactor

- [x] Map the existing portfolio blocks to Navbar, Hero, About, Stack, Projects, Journey, Certifications, Resume, Activity, Contact, and Footer components.
- [x] Create the requested component folders with JSX and scoped CSS files.
- [x] Simplify App.jsx to compose the extracted components and retain global index.css tokens.
- [x] Rename the GitHub Pages workflow to `deploy.yml`, validate the build, and push the organized project.

## Architecture-only correction

- [x] Use the approved Quiet Scholar design as the visual source of truth.
- [x] Organize that unchanged design into the requested component folders and JSX files.
- [x] Verify desktop and mobile views remain visually unchanged after organization.
- [ ] Save and synchronize the architecture-only correction.

## Readable source-code formatting

- [x] Inspect the reference repository’s line-by-line JSX conventions.
- [x] Reformat the editable portfolio components without changing their output.
- [x] Build and visually verify the formatting-only update.
- [ ] Save and synchronize the readable-code update.

## Editable component CSS

- [x] Map existing Quiet Scholar rules from shared stylesheets to each section CSS file.
- [x] Write readable existing rules into the matching component CSS files.
- [x] Verify the approved design and production build remain unchanged.
- [ ] Save and synchronize the component CSS update.

## Branch white-page repair

- [ ] Identify the user-edited branch and the file causing the white page.
- [ ] Correct the branch-specific rendering or build error.
- [ ] Verify the branch build and rendered page.

## Main-branch white-page repair

- [ ] Inspect the live deployment and the current main-branch error.
- [ ] Correct the rendering failure without changing the approved design.
- [ ] Verify the repaired GitHub Pages deployment.

## Conflicting Pages publisher repair

- [ ] Confirm the automatic branch-root Pages publisher that overrides the Vite artifact.
- [ ] Disable or bypass that publisher while retaining the workflow deployment.
- [ ] Verify the live site serves built Vite assets instead of `/src/main.jsx`.

## Stale deployment refresh

- [x] Confirm GitHub Pages is retaining the stale raw-source deployment for the current commit.
- [ ] Create a non-visual commit that preserves the portfolio and produces a new deployment version.
- [ ] Verify GitHub Pages serves bundled Vite assets from the new deployment.
