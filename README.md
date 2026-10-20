# Kaycee Flinn — Website

A hand-built static site (plain HTML/CSS/JS, no build step). It can be hosted anywhere: Netlify, GitHub Pages, Cloudflare Pages or any web host.

## Pages
| File | Page |
|---|---|
| `index.html` | Home (long-scroll story from the website copy doc) |
| `all-in.html` | One-on-One: ALL IN |
| `retreats.html` | Private Retreats |
| `speaking.html` | Keynote Speaking |
| `contact.html` | Book a call + enquiry form |

Shared styling is in `assets/styles.css` and behaviour is in `assets/main.js`.

## To view locally
Open `index.html` in a browser, or run the following from this folder:
```
python3 -m http.server 4310
```
Then visit http://localhost:4310.

## Before going live: checklist
- [ ] **Booking link:** paste it into `bookingUrl` at the top of `assets/main.js`. Every "Book a call" button updates automatically.
- [ ] **Photos of Kaycee:** replace the About image in `index.html` (search for "Portrait of Kaycee coming soon"). A 4:5 portrait works best. Lifestyle photos can also replace the brand images on the offer pages.
- [ ] **Instagram / social links:** in the footer of each page (search for `href="#"`).
- [ ] **Font licences:** Triklen Care and Qariga are "© ErmediaStudio 2025, All Rights Reserved". The files in the folder look like FontSpace downloads, which are often personal-use only. Confirm a **web/commercial licence** before launch. Gill Sans (body text) is a Monotype font and isn't embedded. It shows on Apple devices, and other devices fall back to Lato.
- [ ] **Enquiry form:** works automatically on **Netlify** (Netlify Forms). On another host, add an `action="…"` URL from a form service (e.g. Formspree) to the `<form>` in `contact.html`.
- [ ] **Copy review:** see below.

## Copy: what's Kaycee's and what was drafted
**Homepage:** Kaycee's draft, lightly polished. Typos are fixed and these unfinished sentences were completed. Please confirm them:
- "You know your time could…" → "…be going toward what truly lights you up."
- "When you know that you are here for a purpose… you start to create results from…" → "…ease instead of effort."
- "Maybe you're actually living in more alignment than you should" → reworded as "it feels like you should be doing more".
- "There is nothing right or wrong if you know the…" → "…only what's true for you, once you know the cards you're holding."
- The "Using Human Design, I help you see…" paragraph in the About section is new.

**Offer pages (`all-in.html`, `retreats.html`, `speaking.html`):** **drafted fresh** in Kaycee's voice, because the doc only had placeholders. This includes the process steps, the "for you if" lists, the FAQ, the retreat audiences and the three keynote titles. These need Kaycee's review. Nothing commits to prices, dates or session lengths. The "Private Retreat Website Copy" Google Doc linked in the asset register may have text that can replace the retreats draft.

## Brand reference
Colours: Burgundy `#420f15` · Cloud `#fefdfc` · Ivory `#f5f2ee` · Beige `#e7dccd` · Gold `#ceb07f` · Grey Brown `#24201d`.
Fonts: Triklen Care (logo), Qariga (headings), Gill Sans (body).
The hero's opening curtains come from the brand concept: *"draw back the heavy curtains and let the fresh light of early morning pour in."*
