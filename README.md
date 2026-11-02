# Maaz Bin Irfan — Personal Portfolio 🚀

A high-performance, responsive personal developer portfolio with a custom **tactile neo-comic / cartoony theme** designed with UI/UX Pro Max and Taste standards (warm paper canvas, deep ink outlines, offset hard drop shadows, and zero generic AI gradients).

Built with zero external frameworks or heavy dependencies: pure semantic HTML5, CSS3, and JavaScript.

---

## ⚡ How to Publish on Vercel (2 Quick Ways)

### Option 1: Vercel Web Dashboard (Easiest & Fastest, No Terminal Needed)
1. Initialize a git repository and push this folder to your GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit for portfolio"
   git branch -M main
   git remote add origin https://github.com/sus4400/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Connect your GitHub account and click **Import** next to `portfolio`.
4. Leave all build settings as default (Framework Preset: **Other**, Build Command: empty).
5. Click **Deploy**! In ~10 seconds your portfolio will be live at `https://portfolio-sus4400.vercel.app`.

---

### Option 2: Deploy from Terminal via Vercel CLI
Run the following in this directory:
```bash
npx vercel
```
* Follow the quick CLI prompts:
  * Set up and deploy: **y**
  * Which scope: select your personal Vercel account
  * Link to existing project: **n**
  * What's your project name: `maaz-portfolio`
  * In which directory is your code located: `./`
* To deploy directly to production:
```bash
npx vercel --prod
```

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main portfolio page with semantic layout & sections
├── style.css               # Custom cartoony CSS with tactile buttons & hard shadows
├── script.js               # Interactive filtering, modal drawer & copy toast
├── vercel.json             # Vercel deployment & security headers config
├── Maaz_Bin_Irfan_CV.pdf   # Direct download link for your single-page CV
└── README.md               # Deployment instructions
```

---

## 🎨 Design System
* **Style:** Tactile Neo-Comic / Playful Editorial
* **Palette:**
  * Canvas: `#FAF6EE` (Warm Parchment) + `#E7DECA` Grid Dots
  * Ink: `#18181B` (Deep Charcoal Ink)
  * Accents: Honey Amber (`#F59E0B`), Coral Clay (`#F43F5E`), Matcha Green (`#10B981`), Sky Blue (`#0284C7`), Butter Yellow (`#EAB308`)
* **Typography:** `Plus Jakarta Sans` (Display/Body) + `Space Mono` (Telemetry & Code)
