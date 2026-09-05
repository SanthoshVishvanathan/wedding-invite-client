# Umesh & Sandhya — Wedding E‑Invitation

A single-page, mobile-first wedding invitation site for a traditional
Tamil Nadu wedding, built with plain HTML/CSS/JS + Leaflet (no build step).

---

## 1. Run it locally in VS Code

1. Open this folder (`wedding-invite`) in VS Code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open **http://localhost:3000** in your browser.

   (You can also just double-click `index.html` to preview it without a
   server — everything except the relative asset paths will still work
   in most browsers. The Node server is only needed for Render deployment.)

---

## 2. What to edit before you deploy

| What | File | Where |
|---|---|---|
| Names, date, title | `index.html` | search for `Umesh`, `Sandhya`, `17` |
| Muhurtham time | `index.html` | `<p class="detail-text">10:30 AM onwards</p>` — **please confirm the actual muhurtham time and update this**, I used a placeholder |
| Venue name | `index.html` | `Lena Alamelu Mahal` (appears twice) |
| Map coordinates | `js/script.js` | `VENUE.lat` / `VENUE.lng` at the top |
| Blessing quote / RSVP line | `index.html` | `.blessing-quote` and `.rsvp-copy` sections near the bottom |
| Couple photo | `assets/couple.jpg` | replace the file (keep the same filename) to swap the photo |
| Colours | `css/style.css` | the `:root { --maroon-deep ... }` block at the top |

The map marker already points at your exact coordinates
(`9.921538648604315, 78.60753050514693`) and opens Google Maps at that
precise pin when tapped — no changes needed there unless the venue moves.

---

## 3. Deploy to Render (get a shareable URL)

1. **Push this folder to GitHub** (Render deploys from a Git repo):
   ```bash
   git init
   git add .
   git commit -m "Wedding invitation site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to **https://dashboard.render.com** → **New +** → **Web Service**.
3. Connect your GitHub repo.
4. Render should auto-detect the settings from `render.yaml`; otherwise set:
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
5. Click **Create Web Service**. After the build finishes, Render gives you
   a public URL like:
   ```
   https://umesh-sandhya-wedding-invite.onrender.com
   ```
   Share that link with your relatives on WhatsApp.

> Free-tier Render web services sleep after inactivity and take ~30–50
> seconds to wake on the first visit. If you'd rather have an always-instant
> load, deploy the same folder as a Render **Static Site** instead (Publish
> directory: `.` / root) — no server code needed for that path either.

---

## 4. Design notes — why it looks the way it does

This invitation draws on common visual conventions of **Tamil Nadu
Hindu wedding invitations**, rather than a generic "wedding site" template:

- **Palette** — kumkum/vermilion red, temple gold, and turmeric-yellow,
  the three colours most associated with South Indian auspicious
  ceremonies, on a warm ivory base (not the default AI-generated
  cream + terracotta combo).
- **`ॐ ஸ்ரீ` / "Sri" invocation** at the very top — conventionally
  printed at the head of Tamil wedding cards before the couple's names.
- **Kalasham (sacred pot) icon** below the title — used at Tamil
  ceremonies to invoke auspiciousness, commonly illustrated on cards.
- **Kolam-style dot-and-loop border** — a nod to the rice-flour floor
  patterns drawn at the entrance of a wedding hall.
- **Lotus motif** between the couple's names, standing in for the usual
  hand-drawn "&" flourish on printed cards.
- **Peacock** in the closing section — a recurring motif in South
  Indian textile and card art, placed at the blessing/farewell page.
- **Gopuram-style roofline icon** used for the venue marker on the map.
- **Typefaces** — `Yatra One` for display text (a festive, carved-letter
  feel appropriate to Indian celebration cards) paired with `Mukta`
  for body copy (clean, and built with Tamil-script support in mind).

### About the couple's photo
Your uploaded photo is used as-is for the circular hero portrait, and as a
stylised full-bleed backdrop on every section (CSS colour-grading:
duotone warm tones + raised contrast, similar to a hand-painted
invitation illustration) so it stays clearly recognisable rather than
becoming a literal cartoon/AI-generated image. If you'd instead like a
true illustrated/animated portrait, that needs an image-generation tool
outside of what I can run here — happy to help you brief that separately,
or you can run the photo through an illustration filter app and swap in
the result as `assets/couple.jpg`.

---

## 5. File structure

```
wedding-invite/
├─ index.html          # all page content/sections
├─ css/style.css        # palette, type, layout, motifs
├─ js/script.js         # Leaflet map + venue marker click handler
├─ assets/couple.jpg     # your photo
├─ server.js            # tiny static server (for Render Web Service)
├─ package.json
├─ render.yaml          # optional Render blueprint
└─ README.md
```
