# Sharm Shutters — Complete Static Front End

## Purpose

This project is a responsive static HTML, CSS and JavaScript foundation for the Sharm Shutters website. It is structured for later conversion into a custom WordPress theme. It contains no PHP, framework, external font service or page-builder dependency.

## Completed scope

- Complete Home page
- Internal, no-index Style Guide page
- Shared visual tokens, typography and layout system
- Responsive desktop and mobile header/navigation
- Accessible Solutions submenu and Escape-key handling
- Shared footer, buttons, cards, CTA and form patterns
- Floating WhatsApp action
- Front-end-only demonstration form state
- Complete eleven-page public sitemap
- Accessible project filters and expandable project details
- Native, progressively enhanced FAQ accordion
- Contact page with confirmed contact actions, demonstration form and map placeholder

## File structure

```text
index.html
style-guide.html
projects.html
solutions.html
screens-display.html
apartments-residential.html
commercial-stores.html
hotels-resorts.html
villas.html
faqs.html
contact.html
technical-specifications.html
assets/
  css/
    variables.css
    base.css
    components.css
    pages.css
    responsive.css
  js/main.js
  images/
    brand/
    placeholders/
    projects/
    technical/
      bk-shutter-datasheet-ar.jpg
  icons/
README.md
```

## Public sitemap

- `index.html` — public Home page
- `projects.html`
- `solutions.html`
- `screens-display.html`
- `apartments-residential.html`
- `commercial-stores.html`
- `hotels-resorts.html`
- `villas.html`
- `faqs.html`
- `contact.html`
- `technical-specifications.html` — public BK Shutter specifications, controls, warranty and datasheet reference

Internal page:

- `style-guide.html` — component review page with `noindex,nofollow`

## Shared components and interactions

- Header, mobile navigation and accessible Solutions submenu
- Footer, legal placeholders and floating WhatsApp action
- Internal page hero, CTA band, solution and project cards
- Project filters use buttons with `aria-pressed`; empty categories show an honest empty state
- Project details expand inline using real buttons, `aria-expanded` and `aria-controls`
- FAQs use native `details` and `summary`, so answers remain readable without JavaScript
- Home and Contact forms are front-end demonstrations only and never claim delivery
- Contact form uses a page-specific accessible status message
- All geometric image and gallery areas are temporary placeholders, not completed-project photography

## Confirmed business information

- Business: Sharm Shutters
- Showroom: Jasmine Mall, Nabq Bay, Sharm El Sheikh
- Primary phone / WhatsApp: +20 101 157 1159
- Secondary phone: +20 102 613 6122
- Instagram: https://www.instagram.com/sharm_shutters/
- Facebook: https://www.facebook.com/SharmShutters/
- Verified range: roller shutters, awnings and shading solutions
- Verified service: installation, maintenance, repair and deep cleaning for electric roller shutters
- Free inspection and measurements inside Sharm El Sheikh
- Restaurants and cafés are confirmed suitable applications

## Approved BK Shutter technical content

- The public technical reference is `technical-specifications.html`.
- The approved original datasheet is preserved at `assets/images/technical/bk-shutter-datasheet-ar.jpg`.
- Technical profile data is attributed to Nile Company — BK Shutter. Nile Company is an important source of shutter materials, and Sharm Shutters uses selected materials supplied through Nile Company; no exclusive relationship is claimed.
- BK Shutter supplied values include 50 mm slat coverage height, 10.90 mm profile depth, 0.27 mm aluminium thickness and 20 slats per metre.
- Normal-foam guidance is a 3.50 m maximum recommended width and 2.50 kg weight per metre.
- High-density-foam guidance is a 4.50 m maximum recommended width and 3.3 kg weight per metre.
- Weight values are intentionally displayed as weight per metre and are not converted to kg/m².
- Rolling-size values are reproduced as guidance from the supplied datasheet, not as guaranteed maximum operating heights.
- Country of origin and motor brands remain unspecified.
- Final profile, foam, box, tube, motor and control selection requires inspection and measurement by the technical team.

## Approved control and warranty information

- Operation options: manual operation and electric motor operation.
- Controls: wall switch; receiver-enabled switch with remote control; smart Wi-Fi switch through a compatible mobile application.
- Control compatibility depends on the selected motor, electrical preparation and project requirements. No specific smart-home platform or application brand is claimed.
- Motors: 5-year warranty against manufacturing defects.
- Shutters and aluminium profiles: 2-year warranty against manufacturing defects.
- Maintenance service, technical support and spare parts are available when required.
- Warranty coverage remains subject to the approved quotation, correct operation, installation conditions and final project warranty terms.

## Missing information

- Email address
- Opening hours
- Exact Google Business Profile / map URL
- Privacy Policy page and approved copy
- Cookie Policy page and approved copy
- Approved project photography and remaining project details

Privacy Policy and Cookie Policy are shown as non-clickable, clearly pending footer items rather than dead links.

## Intentionally hidden content

- Hay El Nour property category
- All source content marked `[CONFIRM]`
- Email, opening hours and map
- Unconfirmed specifications, warranties and project details

## Logo and image replacement

The original supplied logo remains unchanged at `sharm-shutters-logo.jpg`. An identical working copy was created at `assets/images/brand/sharm-shutters-logo.jpg`, and both HTML pages use that stable asset path. The palette in `assets/css/variables.css` is a temporary approximation based on the supplied logo.

Geometric blocks labelled “Temporary image placeholder” are deliberate stand-ins, not project photography. Replace each `.placeholder` element with an optimized image while preserving its accessible text, aspect ratio and category mapping. Store final brand assets under `assets/images/brand/` and approved project images under `assets/images/projects/`.

## WordPress developer notes

- HTML comments identify Header, Main, every major Home section and Footer.
- Repeated BEM-style component classes are designed to map cleanly to template parts and blocks.
- CSS variables centralize visual tokens.
- No IDs are used for styling; IDs exist only for accessibility and anchor targeting.
- Navigation links already use the requested future static filenames and can be replaced with WordPress permalinks.
- The form is presentation-only. Submission is prevented in `assets/js/main.js`; WordPress form delivery, upload processing, validation, spam protection, consent storage and success handling must be integrated later.
- Keep current public copy aligned with the Final Website Content document.

### Recommended WordPress mapping

- Header and Footer: shared theme template parts
- Projects: Custom Post Type
- Project categories: taxonomy
- Project summaries, details and galleries: custom fields
- Contact information and social links: global theme options
- BK Shutter profile and rolling guidance: structured, editable product/specification custom fields
- Warranty periods and approved wording: global warranty fields
- Manual, electric and control configurations: editable control-option settings
- Nile Company credit: editable supplier-attribution fields
- Original technical datasheets: media-managed assets linked from product records
- Forms: WordPress backend or an approved form plugin with validation, upload security, spam protection and consent handling
- FAQs: editable structured content or custom fields

## WordPress handoff checklist

- [ ] Convert shared header, footer, CTA, card, form and placeholder patterns into reusable theme parts/blocks
- [ ] Register the Projects content model and approved category taxonomy
- [ ] Connect approved project photography and metadata
- [ ] Connect form processing and production confirmation states
- [ ] Add verified map, email and opening hours only after approval
- [ ] Create and connect Privacy Policy and Cookie Policy pages
- [ ] Preserve semantic landmarks, keyboard behavior, focus styles and reduced-motion support
- [ ] Replace temporary placeholders without changing their natural aspect ratios

## Test checklist

- [ ] Open `index.html` and `style-guide.html` locally
- [ ] Check layouts at 320, 360, 390, 768, 1024 and 1440 px
- [ ] Confirm no horizontal overflow
- [ ] Tab through all interactive controls and verify visible focus
- [ ] Open and close the mobile menu by button and Escape
- [ ] Open and close the Solutions submenu with keyboard and pointer
- [ ] Confirm mobile navigation closes after selecting a link
- [ ] Verify both telephone links and the approved WhatsApp URL
- [ ] Verify Instagram and Facebook destinations
- [ ] Submit the form and confirm it explicitly says nothing was sent
- [ ] Confirm floating WhatsApp does not obscure form/footer controls
- [ ] Confirm no visible `[CONFIRM]` content, fake claims or stock photography
- [ ] Confirm browser console contains no errors

## Open locally on Windows

Local-server testing is preferred to opening `index.html` directly with a `file://` URL because browsers may display local-origin security warnings for file-based pages.

Open Command Prompt inside the project folder and run:

```text
python -m http.server 8000
```

If `python` is not available, use:

```text
py -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Use `http://localhost:8000/style-guide.html` for the internal style guide. No build step is required. The site itself does not perform unsafe self-navigation or attempt to load `file://` resources; warnings seen only during direct file opening are browser local-origin behavior, not an application workaround requirement.
