# DJ Artist Website

A professional, modern website for a DJ artist — built to showcase mixes, past events, and accept booking requests for parties across the USA.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customize Everything (One File!)

**All website content lives in a single file:**

```
src/data/siteData.js
```

Open that file and replace the demo data with your real information. Every section — name, photos, mixes, events, testimonials, pricing, social links — reads from this file.

### What to update

| Section | What to change |
|---------|---------------|
| **Basic Info** | `djName`, `tagline`, `email`, `phone`, `location` |
| **Social Links** | Instagram, SoundCloud, YouTube, Spotify, TikTok URLs |
| **Hero** | Headline, description, background photo URL |
| **About** | Bio paragraphs, profile photo, stats |
| **Mixes** | Mix titles, genres, cover images, SoundCloud embed URLs |
| **Services** | Event types, descriptions, starting prices |
| **Past Events** | Event names, locations, dates, photos |
| **Testimonials** | Client quotes, names, event types |
| **Gallery** | Photo URLs from your events |
| **Booking** | Event type options, enable/disable demo mode |

Also update the page title in `index.html` (the `<title>` tag).

### Adding your photos

Replace the Unsplash demo URLs with your own images:

1. **Option A — Image URLs:** Upload photos to Instagram, Imgur, or Cloudinary and paste the direct image URLs into `siteData.js`.
2. **Option B — Local images:** Put photos in the `public/` folder (e.g. `public/photos/dj-profile.jpg`) and reference them as `/photos/dj-profile.jpg` in `siteData.js`.

### Connecting the booking form (real emails)

The form runs in **demo mode** by default (shows a success message but doesn't send emails).

To receive real booking requests:

1. Create a free account at [Formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint URL
3. In `src/data/siteData.js`, update the booking section:

```js
booking: {
  // ...
  demoMode: false,
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
},
```

## Live site

Pushing to `main` on GitHub automatically deploys via GitHub Pages:

**https://YOUR_GITHUB_USERNAME.github.io/dj-artist-website/**

Replace `YOUR_GITHUB_USERNAME` with the GitHub account that owns the repo.

## Project Structure

## Project Structure

```
src/
├── data/
│   └── siteData.js       ← Edit this to customize everything
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Mixes.jsx
│   ├── Services.jsx
│   ├── PastEvents.jsx
│   ├── Testimonials.jsx
│   ├── Gallery.jsx
│   ├── Booking.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Tech Stack

- React + Vite
- Tailwind CSS v4
- Lucide React icons
- No backend required (static site)
