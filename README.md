# Marinia Group React Website

A React/Vite version of the Marinia Group website.

## Local setup

```bash
cd marinia_group_react
npm install
npm run dev
```

## Build for AWS Amplify

```bash
npm run build
```

Amplify settings:
- Build command: `npm run build`
- Output directory: `dist`

## Project structure

```text
marinia_group_react/
├── index.html
├── package.json
├── public/
│   └── assets/
│       ├── marinia-logo.png
│       ├── merge-banner.png
│       ├── elevate-banner.png
│       ├── vista-logo.png
│       ├── merge-hero.mp4
│       ├── elevate-hero.mp4
│       └── vista-hero.mp4
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

## Hero video placeholder

The hero section currently has a placeholder for a future animated Marinia Group logo.
After creating it in Runway, add it to:

```text
public/assets/marinia-hero.mp4
```

Then replace the placeholder block in `src/App.jsx` with a video tag.

## Pricing note
All Marinia Group membership levels require a $300 deposit before work begins, followed by weekly automated withdrawals.
