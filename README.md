
---

## 🚀 Getting Started

1. **Clone or download** the project folder.
2. Ensure the three files (`index.html`, `style.css`, `script.js`) are in the same directory.
3. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).

No build tools, dependencies, or server required — it works completely offline.

---

## 🛠️ Technologies Used

- **HTML5** — semantic markup
- **CSS3** — custom properties (variables), grid, flexbox, animations, and media queries
- **JavaScript (Vanilla)** — navigation, mobile menu, FAQ accordion, intersection observer for reveal effects, and form handling
- **Google Fonts** — Cormorant Garamond & Outfit
- **Unsplash** — high-quality background images (loaded remotely)

---

## 📱 Responsive Breakpoints

| Breakpoint   | Target Devices     |
|--------------|--------------------|
| > 992px      | Desktop            |
| 768 – 992px  | Tablet landscape   |
| 576 – 767px  | Tablet portrait    |
| < 576px      | Mobile             |

The layout adapts gracefully: navigation becomes a hamburger menu, grids collapse to single columns, and font sizes scale down.

---

## 🧩 Customisation

- **Colors & Fonts**: Edit the CSS variables inside the `:root` block in `style.css`.
- **Content**: Modify the text directly in `index.html`.
- **Images**: Replace the Unsplash URLs in the destination cards and hero with your own images.
- **WhatsApp Number**: Update the phone number in the WhatsApp floating button (`href="https://wa.me/2348030617540..."`).
- **Contact Form Action**: Currently the form simulates a success message; to connect it to a real backend, modify the `handleFormSubmit()` function in `script.js`.

---

## ⚠️ Important Notes

- **External Images**: The hero background and destination cards use images from **Unsplash**. These require an internet connection to display. To work fully offline, download the images and replace the URLs with local paths.
- **Fonts**: Google Fonts are loaded via CDN; offline fallback fonts are defined in the CSS.
- **Demo Only**: The contact form does **not** send data anywhere — it only shows a success animation for demonstration purposes.

---

## 📄 License

This project is provided for **educational and demonstration purposes**.  
All content and branding are property of **Becca Travels & Tours Ltd**.

---

Enjoy building and customising your travel agency site! 🛫