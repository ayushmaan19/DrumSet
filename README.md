<!-- README.md - DrumSet (Vanilla JS, HTML, CSS) -->
# DrumSet — Interactive Browser Drum Kit  
**A lightweight, responsive virtual drum kit built with plain HTML, CSS, and JavaScript.**

[![Status](https://img.shields.io/badge/status-demo--ready-brightgreen)](https://github.com/ayushmaan19/DrumSet)
[![Stack](https://img.shields.io/badge/stack-Vanilla%20JS%2FHTML%2FCSS-blue)]()

---

> DrumSet is a small, fun web app that turns your keyboard or screen taps into drum sounds. Built from scratch with pure HTML, CSS and vanilla JavaScript — no frameworks, no build tools. Perfect for demos, learning, or embedding in interactive pages.

---

## ✨ Features
- Play drum sounds via **keyboard keys** or **on-screen pads**.  
- **Responsive UI** that works on desktop and mobile (touch support).  
- **Visual feedback**: active pads animate when hit.  
- **Simple, dependency-free** codebase — ideal for learning and quick deployment.  
- Low-latency audio playback using the Web Audio / HTMLAudio APIs.

---

## 🎯 Why this project?
- Great demo for frontend fundamentals (DOM, events, audio).  
- Tiny, production-ready static app that can be hosted on GitHub Pages.  
- Easy to extend: add more instruments, change samples, or record sequences.

---

## 📦 Tech Stack
- HTML5 (semantic markup)  
- CSS3 (flexbox, transitions, media queries)  
- JavaScript (ES6+, DOM events, audio control)  
- No frameworks or build tools required

---

## 🗂 Recommended folder structure

```
DrumSet/
├── assets/
│ ├─ sounds/
│ │ ├── kick.mp3
│ │ ├── snare.mp3
│ | |─ hihat.mp3
│ 
├── index.html
├── styles.css
├── app.js
└── README.md
```
---

## 🚀 Quick start (run locally)
1. Clone or download the repo.  
2. Open `index.html` in your browser (double-click or `File > Open`).  
3. Press the keys shown on-screen (e.g., `A`, `S`, `D`, etc.) or tap the pads on mobile.

No npm, no build — just open and play.

---

## 🧭 Usage & Controls
- Click or tap any drum pad to play its sound.  
- Press the associated keyboard key to trigger the pad (key labels are shown).  
- Hold or repeatedly tap to play rolls.  
- Customize samples by replacing files in `assets/sounds/`.

---

## 🛠 Developer notes
- Uses `new Audio()` / Web Audio fallback for simple and compatible playback.  
- Minimal CSS animations for instant feedback (no heavy transitions).  
- Designed for cross-browser compatibility; test on Chrome/Firefox/Safari.

---

## 👤 Author
**Ayushmaan Kumar Yadav** — Frontend & UX.  
