# Aiman Iqbal — Personal Portfolio

A premium, responsive personal portfolio for **Aiman Iqbal**, a Full-Stack Web Developer, BS Mathematics student, and technology community leader based in Multan, Pakistan.

**Tagline:** Where Mathematics Meets Technology.

## Built with
- HTML5 for semantic page structure
- CSS3 for responsive layouts, visual design, and motion
- Vanilla JavaScript for navigation, typing effect, reveal transitions, and email configuration
- Google Fonts (Manrope and DM Mono); the site remains functional if the font service is unavailable

No framework, build step, API key, or paid service is required.

## Run locally
1. Clone the repository:
   ~~~bash
   git clone https://github.com/aimankhakwani456-alt/Aiman-Iqbal-.git
   ~~~
2. Open the project folder and run a local static server:
   ~~~bash
   python -m http.server 8000
   ~~~
3. Visit http://localhost:8000.

You can also open index.html directly, though a local server is recommended.

## Configure professional email
Open script.js and set the single configuration value near the top:
~~~js
const PROFESSIONAL_EMAIL = "your-real-address@example.com";
~~~
Replace this with your real professional email. Until configured, the contact action explains that email is not set up and does not pretend to send a message.

## Personalization notes
- Update the project card when additional public projects are ready to share.
- Keep skill labels aligned with tools and practices you genuinely use.
- The site includes the supplied education, semester, ZCBS leadership role, and PepsiCo internship information.
- No awards, certificates, client claims, fabricated metrics, or unverified contact details are included.

## Project structure
~~~text
.
├── index.html
├── style.css
├── script.js
├── 404.html
├── README.md
└── assets/
    └── favicon/
        └── favicon.svg
~~~

## Deploy to GitHub Pages
1. Push the repository to GitHub.
2. Open Settings → Pages in the repository.
3. Choose Deploy from a branch, select main and / (root), then save.
4. Wait for GitHub Pages to publish the site; its settings page displays the live URL.

## Deploy to Vercel
1. Sign in to https://vercel.com/ and choose Add New → Project.
2. Import aimankhakwani456-alt/Aiman-Iqbal-.
3. Select Other as the framework preset (static site).
4. Leave build command and output directory empty; files are served from the repository root.
5. Deploy. Future pushes to the connected branch trigger deployments.

No environment variables are required.

## Git commands
~~~bash
git clone https://github.com/aimankhakwani456-alt/Aiman-Iqbal-.git
cd Aiman-Iqbal-
git status
git add .
git commit -m "Build personal portfolio website"
git push origin main
~~~

If initializing an existing local folder from scratch:
~~~bash
git init
git branch -M main
git remote add origin https://github.com/aimankhakwani456-alt/Aiman-Iqbal-.git
git add .
git commit -m "Build personal portfolio website"
git push -u origin main
~~~

## SEO and accessibility
- Descriptive title, meta description, author, theme color, and Open Graph metadata.
- Semantic landmarks, accessible navigation labels, keyboard focus styles, and Escape-to-close mobile navigation.
- Typing and scroll effects respect prefers-reduced-motion.
- No fake contact form; email is a configurable mailto link.

## Final testing checklist
- [ ] Check navigation and mobile menu at narrow viewport widths.
- [ ] Test keyboard navigation, visible focus, and Escape-to-close.
- [ ] Enable reduced motion and verify animations are minimized.
- [ ] Configure the professional email and test its mailto link.
- [ ] Verify GitHub and LinkedIn links.
- [ ] Check for horizontal overflow on mobile, tablet, and desktop.
- [ ] Confirm favicon, metadata, and custom 404 page after deployment.
- [ ] Review personal details and project claims before sharing.

---
Made with care by Aiman Iqbal.
