# Jusoor reference-to-repository content audit

**Audit date:** 2026-10-28  
**Repository:** `specialgroup2024/jusoor_website`  
**Reference URL supplied:** https://jsuoor.kairossol.io/  
**Status:** Partial audit completed; full source-to-repository verification is blocked because the reference site could not be fetched from this execution environment.

## Important limitation

Attempts to open the reference URL through the web retrieval service failed, and direct retrieval from the execution environment failed at DNS resolution. Search also returned no indexed result for the exact host. Therefore, this report does **not** certify that every live-site paragraph, link, image, form, footer item, legal statement, or interactive behavior has been copied into the repository. Those comparisons require a successful live-site fetch or a supplied export/screenshots of every page and language.

## Repository inventory checked

| Area | Repository evidence | Audit finding |
|---|---|---|
| Main content | `app/content.json` | Contains bilingual home copy, six service/“How We Work” sections, and 15 insurance-coverage categories. |
| Service page | `app/[locale]/services/page.tsx` | Renders the six service sections from `app/content.json`. |
| Coverage page | `app/[locale]/coverage/page.tsx` | **Gap found and corrected on this audit branch:** it previously rendered five newly drafted generic categories instead of the 15 bilingual coverage categories already stored in `app/content.json`. It now renders the repository's complete `siteContent.coverage.items` entries and their bilingual paragraphs. |
| About page | `app/[locale]/about/page.tsx`, `app/reference-content.ts` | Renders the About/Why Us copy and three bilingual company-profile entries. Exact equivalence to the live site remains unverified. |
| Home carousel | `app/reference-content.ts` | Contains six bilingual carousel slides. Image/asset parity with the live site remains unverified. |
| Contact page | `app/[locale]/contact/page.tsx`, `app/reference-content.ts` | Displays `info@jusoor.com.eg` and `01044479475`. These details have not been independently checked against the live source during this audit. |
| Customer rights | `app/[locale]/customer-rights/page.tsx` | Page exists in Arabic and English, but the text is generic drafted copy, not verified transcription from the live site or an approved legal source. |
| Customer complaints | `app/[locale]/customer-complaints/page.tsx` | Page exists in Arabic and English, but the process text is generic drafted copy, not verified transcription from the live site or an approved complaints policy. It deliberately avoids inventing response deadlines. |
| Navigation | `app/components/site-frame.tsx`, `app/lib/localized-ui.ts` | All seven requested sections are present in both languages: home, about, how we work, insurance coverage, customer rights, customer complaints, and contact. |
| Source document | `docs/Website  content English - Arabic.docx`, matching PDF, `scripts/import-website-copy.py` | The repo contains a bilingual source document and import script. This supports a source-document-to-code workflow, but does not prove parity with the current live website. |
| Brand/media/footer/legal | `docs/logo1.png`, shared site frame and CSS | Only repository assets and code can be inventoried without live access; visual and behavioral parity is not verified. |

## Findings and required closure criteria

1. **Fixed on this branch:** the coverage page now renders all 15 existing bilingual coverage categories and their full paragraph arrays from `app/content.json`, rather than substituting five generic categories.
2. **Not verifiable yet:** exact live-site copy, page order, metadata, external/internal links, forms, telephone/email details, images, carousel media, footer, address/map, legal disclosures, and mobile/desktop layout.
3. **Requires business/legal approval:** customer-rights and complaints content must be compared with the actual published wording and approved by Jusoor before production use.
4. **Not yet validated:** no local build, lint, typecheck, browser screenshot comparison, or production deployment check was run as part of this audit.
5. **Full audit completion gate:** retrieve both Arabic and English versions of every reference page (including all linked/secondary pages), record text and asset inventories, compare each item against repository routes/components/content, correct all discrepancies, run `npm run lint`, `npm run typecheck`, and `npm run build`, and verify rendered pages in a browser.

## Conclusion

The repository has the seven requested navigation sections and substantial bilingual content. A concrete coverage-rendering omission has been corrected on the audit branch. However, the task **cannot be marked “full content parity verified”** until the reference website can be fetched and compared directly.
