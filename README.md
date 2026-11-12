# Space Manager — Ads Landing Page

Static, single-page lead-gen site. No build step. Upload the whole folder.

```
index.html               the page (copy, design, form logic)
config.js                ← EDIT THIS: phone, WhatsApp, email, form URL, Pixel ID
google-apps-script.gs    paste into Google Sheets → Apps Script to collect leads
img/                     optimised WebP images (from client Drive)
```

## Go-live steps

1. **Fill `config.js`**: phone, WhatsApp, email, address (currently placeholders).
2. **Connect the form to Google Sheets**
   - Create a Google Sheet → Extensions → Apps Script → paste `google-apps-script.gs`
   - Deploy → New deployment → Web app → Execute as *Me*, access *Anyone* → copy URL
   - Paste the URL into `config.js` → `formEndpoint`
   - Submit a test lead and check that a row appears in the sheet
3. **Tracking** (after client approval): add `metaPixelId` / `ga4Id` in `config.js`.
   - Fires: `PageView`, `Lead` (form submit), custom `Contact` (call / WhatsApp clicks), `CTA_Click`
   - In Meta Ads, optimise the campaign for the **Lead** event.
4. **Host**: Netlify drop / Vercel / Hostinger / cPanel. Drag the folder in, point
   a subdomain such as `lp.spacemanager.in` at it.
5. Use UTM links in ads, e.g.
   `https://lp.spacemanager.in/?utm_source=facebook&utm_medium=paid&utm_campaign=home_interiors&utm_content=ad1`
   UTMs and fbclid are saved with every lead in the sheet.

## Confirm with the client before ads run

- [ ] Phone / WhatsApp / email / office address (placeholders now)
- [ ] "Since 2021" and "15+ in-house design & site team": approved wording?
- [ ] Client logos strip (Doon Hills Academy, Sheffield School, Swastik Garden Resort,
      SLMG Beverages, Spectrum Eduventures, Sushant Jaggi & Associates, Tozaindia):
      permission to show them?
- [ ] Front-elevation images in the gallery: confirm these are Space Manager's own designs
      (some look like reference images; remove any that aren't theirs: `img/elev-*`)
- [ ] Service areas beyond Dehradun?
- [ ] Is the consultation free? If yes, add "Free" to the CTA, which usually lifts conversions
- [ ] Real Google reviews / testimonials to add (none were provided, so none are shown)
