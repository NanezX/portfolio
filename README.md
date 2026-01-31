# Portfolio

A modern, responsive portfolio website built with SvelteKit! 🚀

## ✨ Features

- 🎨 Beautiful gradient hero section with eye-catching design
- 👤 Professional About Me section
- 💻 Skills & Technologies showcase organized by category
- 📁 Featured Projects section with project cards
- 📧 Contact section with social media integration
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth scrolling navigation
- ⚡ Lightning-fast performance with SvelteKit
- ♿ Accessibility-compliant
- 🔒 Security-checked

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or your preferred package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Customization

All the main content is in `src/routes/+page.svelte`. Here's what you need to update:

### 1. Personal Information
- **Line 9:** Replace `"Your Name"` with your actual name
- **Line 10:** Update your job title/tagline
- **Line 11-13:** Customize your hero description

### 2. About Me Section
- **Lines 22-30:** Write your personal bio and introduction

### 3. Skills
- **Lines 39-63:** Update the skills lists for Frontend, Backend, and Tools
- Add or remove skill cards as needed

### 4. Projects
- **Lines 74-120:** Update each project card with:
  - Project title and description
  - Technology tags
  - Demo and source code URLs (replace example.com and yourusername)
  - Add more projects by copying the `<article class="project-card">` structure

### 5. Contact Information
- **Lines 132-145:** Update contact links:
  - Email address
  - GitHub username
  - LinkedIn username
  - Twitter/X username

### 6. Footer
- **Line 153:** Update the copyright with your name

### 7. Styling (Optional)
Want to change colors or styles? Check the `<style>` section at the bottom of `+page.svelte`:
- **Hero gradient:** Lines 193-194 (currently purple gradient)
- **Accent color:** Line 198 (currently #ffd700 gold)
- **Button colors:** Lines 234-250
- All other styling is in the same file for easy customization

## 📦 Project Structure

```
portfolio/
├── src/
│   ├── routes/
│   │   ├── +page.svelte      # Main portfolio page
│   │   └── +layout.svelte    # Layout with meta tags
│   ├── lib/
│   │   └── assets/
│   │       └── favicon.ico   # Site icon
│   └── app.html              # HTML template
├── static/                    # Static files
├── package.json
└── svelte.config.js          # SvelteKit configuration
```

## 🌐 Deployment

This portfolio can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .svelte-kit/output directory
```

### GitHub Pages
Install the static adapter:
```bash
npm install -D @sveltejs/adapter-static
```
Then update `svelte.config.js` to use adapter-static.

## 🛠️ Tech Stack

- **Framework:** SvelteKit 2.50.1
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Pure CSS (no external frameworks)

## 📝 License

This project is open source and available for anyone to use for their personal portfolio.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! If you have suggestions for improvements, please open an issue or pull request.

## 💬 Support

If you have questions or run into issues:
- Check the [SvelteKit documentation](https://svelte.dev/docs/kit)
- Open an issue in this repository

---

Built with 💚 using SvelteKit
