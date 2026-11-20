# David Yang — Personal Portfolio & Research Archive

Welcome to the personal portfolio and research showcase of **David (Zhiyuan) Yang** — Software Development Engineer at Amazon Web Services (AWS), Computer Vision Researcher (MDPI author), and Tech Co-Founder.

🔗 **Live Site:** [https://yzyly1992.github.io/](https://yzyly1992.github.io/)

---

## 🛠️ Architecture & Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Build Tool:** [Vite](https://vitejs.dev/) (Lightning-fast HMR and optimized production bundles)
- **Routing:** [Vue Router 4](https://router.vuejs.org/) (Hash mode for 100% deep-link reliability on static hosting)
- **Icons:** SVG icon system with Lucide icons
- **Styling:** Modern CSS Design Tokens with light & dark theme persistence (`localStorage`)
- **Hosting & CI/CD:** GitHub Pages with automated GitHub Actions workflow

---

## 📂 Project Structure

```
yzyly1992.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Actions deployment
├── public/
│   ├── favicon.ico
│   └── 404.html                # Static host fallback
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── tokens.css      # Design tokens (colors, light/dark themes, spacing)
│   │       └── main.css        # Base styles, resets, typography, and rich prose
│   ├── components/
│   │   ├── icons/              # Custom SVG brand icons (GitHub, LinkedIn)
│   │   ├── layout/
│   │   │   ├── AppHeader.vue   # Glassmorphism navbar with active pills & mobile drawer
│   │   │   └── AppFooter.vue   # Social links, dynamic copyright, back-to-top
│   │   └── ui/
│   │       ├── ThemeToggle.vue # Animated dark/light mode toggle with localStorage
│   │       └── ProjectCard.vue # Interactive project card with hover states
│   ├── data/
│   │   ├── projects.json       # Centralized single source of truth for all 24 projects
│   │   └── profile.json        # Bio, AWS role, timeline, education, and skills
│   ├── router/
│   │   └── index.js            # Router definitions with dynamic document titles
│   ├── views/
│   │   ├── HomeView.vue        # Hero, AWS SDE badge, highlights, featured cards
│   │   ├── WorkView.vue        # Filterable & searchable portfolio archive
│   │   ├── ProjectView.vue     # Dynamic case study view with Next/Prev pagination
│   │   ├── AboutView.vue       # Interactive career timeline & education honors
│   │   ├── ContactView.vue     # 1-click email copy & social connection cards
│   │   └── NotFoundView.vue    # 404 fallback page
│   ├── App.vue                 # App root with page transition animations
│   └── main.js                 # App mount & global styles
├── index.html                  # HTML entry with full OpenGraph/Twitter SEO tags
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `18.x` or higher
- npm `9.x` or higher

### Install Dependencies
```bash
npm install
```

### Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser. Changes will update instantly with Hot Module Replacement (HMR).

### Build for Production
```bash
npm run build
```
Generates an optimized, tree-shaken static production bundle in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment

The repository includes an automated GitHub Actions deployment workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

### One-Time Setup in GitHub Repository Settings:
1. Navigate to **Settings** > **Pages** in this GitHub repository.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. That's it! Every time you push to the `main` branch, GitHub Actions will automatically build the site with Vite and deploy it to `https://yzyly1992.github.io/`.

---

## 📝 How to Add or Update Content

### Adding / Editing a Project
Open [`src/data/projects.json`](src/data/projects.json) and add or modify the project object:
```json
{
  "id": "my-new-project",
  "title": "Project Title",
  "fullTitle": "Full Comprehensive Project Title",
  "technology": "Key Tech Used",
  "date": "2026 November",
  "coverImage": "https://...",
  "category": "ai",
  "tags": ["ai", "python", "fullstack"],
  "displayTags": ["PyTorch", "FastAPI"],
  "summary": "Short 1-2 sentence description for the card preview...",
  "featured": true,
  "links": [
    { "title": "Live Demo", "url": "https://..." }
  ],
  "contentHtml": "<p>Detailed project case study paragraphs...</p>"
}
```
The new project will automatically appear on the Home page (if `featured: true`), the Work archive with full filtering and search, and its dedicated deep-linked detail page (`/#/work/my-new-project`).

### Updating Career Experience or Skills
Open [`src/data/profile.json`](src/data/profile.json) to update your current title, work history items, education honors, or technical skills matrix.

---

## 📄 License
Copyright © 2026 Zhiyuan (David) Yang. All rights reserved.
