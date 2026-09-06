# Arena Round 1 — UX, SEO, Accessibility Audit

Date: 2026-08-29
Repository: Ngoc-Can-Granite
Mode: read-only

## Agent status

| Agent | Model | Status |
| --- | --- | --- |
| Codex | GPT-5.6 Sol | completed |
| Claude Code | Opus | timeout/no output after more than 2 minutes; stopped |
| Grok Build | Grok 4.6 | unavailable; `grok` CLI not installed |

## Consolidated claims

### C1 — Catalog imagery is not reliably product-specific

- Status: observed, high confidence.
- Evidence: `loai-da.html:135`, `153`, `171` reuse `images/stone_granite_natural.png` for different named stones; `loai-da.html:189`, `207`, `225` reuse one image for Volakas, Carrara and Dark Emperador.
- Related inconsistency: filter labels at `loai-da.html:125-128` show 9/3/3/3, while the visible card groups contain 23/10/7/6 cards.
- Action: use variant-specific photos, or explicitly label images as illustrative group images and clarify what the filter counts mean.

### C2 — Technical and local SEO signals are incomplete

- Status: observed omission, high confidence; ranking impact not measured.
- Evidence: page heads such as `index.html:6-18` contain title, description, font, favicon and stylesheet but no canonical, Open Graph, JSON-LD or Twitter metadata. No repository `robots.txt`, sitemap or JSON-LD was found.
- Related inconsistency: visible address uses `93/17 Đường Nguyễn Thị Tú`, while the map query uses `93 Đường Nguyễn Thị Tú` at `loai-da.html:1274`, `1295`.
- Action: reconcile the exact business address, then add canonical URLs, `LocalBusiness` JSON-LD, social metadata, `robots.txt` and sitemap when the public domain is known.

### C3 — Gallery/lightbox interaction is incomplete for accessibility

- Status: observed omission, high confidence.
- Evidence: `san-pham.html:212-220` has no dialog semantics; `js/gallery.js:39-50` does not move, trap or restore focus; filter state at `san-pham.html:76-80` is represented only by the `active` class; `css/styles.css:1555-1560` removes the summary focus outline.
- Action: implement dialog semantics and focus management, expose filter state with `aria-pressed` or an equivalent pattern, and restore visible `:focus-visible` styling.

## Verdict

1. Highest business risk: replace or qualify misleading catalog images.
2. Highest user-access risk: repair lightbox, filter state and keyboard focus behavior.
3. Highest discoverability risk: add canonical/local-business metadata and make the address consistent.

## Limitations

- This round did not edit source files, run a browser audit, crawl a deployed URL, or measure Core Web Vitals.
- Claude and Grok did not contribute substantive findings, so agreement across independent agents is not established yet.
- Existing user changes in `doc.md` and `doc2.md` were preserved.
