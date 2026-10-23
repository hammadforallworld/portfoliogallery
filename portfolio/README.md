# Hammad Hassan - Professional Portfolio Website

A professional, high-performance, responsive personal portfolio website built with **HTML5, CSS3, and Vanilla JavaScript**. Designed with a modern dark navy-black aesthetic, purple accent highlights, and clean typography inspired by modern tech portfolios.

---

## 🌟 Key Features

1. **Pixel-Perfect Dark Aesthetic**:
   - Deep navy-black canvas (`#0c0c14`) with elevated card surfaces (`#12121d`).
   - Signature purple accent (`#655cf6`) on buttons, active indicators, and hover glows.
   - Clean, modern typography using the **Inter** font family.

2. **Fixed Top Navigation Bar**:
   - Top navigation bar featuring Hammad's custom code bracket logo (`< / >`) and brand name.
   - Smooth anchor navigation with scroll-spy highlight for sections: **Home**, **About**, **Work**, **Education**, **Projects**, **Certifications**, and **Contact**.
   - Fully responsive with mobile hamburger drawer menu.
   - **Projects** tab is set active initially, showcasing your core work immediately.

3. **Dynamic Project Showcase & Category Filtering**:
   - Responsive **3-column grid** on desktop, 2-column on tablet, and 1-column on mobile.
   - Instant category filtering across 9 professional disciplines:
     - *All*
     - *AI & Chatbots*
     - *Automations*
     - *Web Applications*
     - *Mobile Applications*
     - *Book Design*
     - *Translation*
     - *Graphic Design*
     - *Data Entry*
   - Cards feature aspect-ratio locked banners, overlaid category badges, completion dates, tags, and quick-action buttons.

4. **Instant Real-Time Search**:
   - Live search input matching project titles, categories, descriptions, and technology tags.
   - Works simultaneously with category filters with instant results counter and graceful empty-state recovery.

5. **Interactive Project Detail Modal & Gallery**:
   - Click any card or "View Details" button to open the modal overlay.
   - Multi-image gallery with next/previous controls and clickable thumbnails.
   - Detailed project overview, tech pills, and verified live demo/GitHub links.
   - Keyboard accessible (`Escape` to close, `Arrow` keys to navigate gallery) and scroll-lock protection.

6. **Floating Action Controls**:
   - **Back-to-Top Button**: Smoothly scrolls to the top (bottom-left).
   - **Offline AI Assistant Demo**: Interactive local guide with quick inquiry shortcuts and immediate answers about Hammad's services (bottom-right).

7. **Direct Contact Drafter**:
   - Working direct email integration (`mailto:`) and one-click clipboard copying. Zero non-functional fake forms.

---

## 📁 Project Directory Structure

```text
portfolio/
├── index.html                   # Semantic HTML5 single-page application
├── css/
│   └── style.css                # CSS variables, grid layouts, animations & responsive media queries
├── js/
│   └── script.js                # Vanilla JavaScript database, filters, modal & search engine
├── images/
│   ├── profile/                 # Profile avatar SVG
│   ├── ai-chatbots/             # AI chatbot mockups (Wellness Aura, Medical Chatbot)
│   ├── automations/             # Make.com & n8n automation pipeline diagrams
│   ├── websites/                # Responsive web platform previews
│   ├── mobile-apps/             # iOS & Android React Native app mockups
│   ├── books/                   # Amazon KDP book covers & interior typesetting
│   ├── translations/            # Technical translation & bilingual publishing layouts
│   ├── graphic-design/          # Marketing graphics & brand identity assets
│   ├── data-entry/              # Spreadsheet dashboards & data cleansing samples
│   ├── certifications/          # Verified achievement certificates
│   └── placeholder.svg          # Clean fallback template ("Add Project Image")
└── README.md
```

---

## 🚀 How to Run the Website Locally

### Option 1: Direct File Opening (No Installation Required)
Simply double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using VS Code Live Server
1. Open the `portfolio/` folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **"Open with Live Server"**.

### Option 3: Using a Simple Local Development Server
From your terminal in the `portfolio/` directory:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```
Then visit `http://localhost:8000` in your browser.

---

## 🛠️ How to Add or Edit Projects

All project information is centralized in **`js/script.js`**. You do not need to modify `index.html` to add new projects.

1. Open `js/script.js`.
2. Locate the `PROJECTS_DATA` array near the top of the file.
3. Add a new project object using this structure:

```javascript
{
  id: 16, // Unique numeric ID
  title: "Your Project Name",
  category: "AI & Chatbots", // Must match one of the 8 category names
  year: "2026",
  shortDescription: "Brief 1-2 sentence description for the card.",
  fullDescription: "Detailed multi-paragraph breakdown displayed inside the modal.",
  image: "images/ai-chatbots/your-image.svg", // Or .webp / .png / .jpg
  galleryImages: [
    "images/ai-chatbots/your-image.svg",
    "images/ai-chatbots/another-screenshot.svg"
  ],
  technologies: ["Botpress", "Make.com", "JavaScript", "HTML5"],
  liveUrl: "https://your-live-demo-link.com", // Leave "" if no live link
  githubUrl: "https://github.com/your-username/repo", // Leave "" if none
  featured: true // Displays the purple 'FEATURED' badge on the card
}
```

Save the file and refresh your browser. The project card, modal, search index, and category filter will update automatically.

---

## 🌐 How to Deploy Online

### GitHub Pages (Free)
1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```
2. Create a repository on GitHub (e.g. `hammad-portfolio` or `hammadforallworld.github.io`).
3. Push your code:
   ```bash
   git remote add origin https://github.com/hammadforallworld/hammad-portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub repository **Settings ➔ Pages**, choose the `main` branch and `/root` or `/portfolio` folder, then click **Save**. Your site will be live within 60 seconds!

### Vercel / Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Select the `portfolio` folder as the root directory.
3. Click **Deploy**.

---

## 📄 License & Attribution

Designed and developed for **Hammad Hassan**. Built with standard web technologies (HTML5, CSS3, Vanilla JS, Lucide Icons).
