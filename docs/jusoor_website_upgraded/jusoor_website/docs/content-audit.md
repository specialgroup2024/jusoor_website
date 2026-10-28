# Jusoor reference-to-repository content audit

**Audit date:** 2026-10-28  
**Repository:** `specialgroup2024/jusoor_website`  
**Reference URL supplied:** https://jsuoor.kairossol.io/  
**Status:** Repository fixes are merged to `main`; exact live-site parity remains unverified because the reference host could not be resolved from this execution environment.

## Reference-site access limitation

The reference URL could not be opened through web retrieval, and a direct HTTPS request failed with DNS resolution error (`Could not resolve host: jsuoor.kairossol.io`). Search returned no indexed results for the exact host. This report therefore does **not** certify that every live-site paragraph, link, image, form, footer item, legal statement, or interactive behavior has been copied into the repository. Do not treat repository values as independently confirmed live-site values until the source is accessible.

## Brand and contact values currently implemented

| Field | Current repository value | Source file | Verification status |
|---|---|---|---|
| English company name | `Jusoor for Insurance Brokerage` | `app/content.json` → `companyName.en` | Present in repo; live-site match unverified |
| Arabic company name | `جسور لوساطة التأمين` | `app/content.json` → `companyName.ar` | Present in repo; live-site match unverified |
| Contact email | `info@jusoor.com.eg` | `app/reference-content.ts` → `contactDetails.email` | Present in repo; live-site match unverified |
| Display phone | `01044479475` | `app/reference-content.ts` → `contactDetails.phoneDisplay` | Present in repo; live-site match unverified |
| Telephone link | `+201044479475` | `app/reference-content.ts` → `contactDetails.phoneHref` | Present in repo; live-site match unverified |

The shared site frame renders the localized company name in the header and footer. The contact page renders the email and phone values as `mailto:` and `tel:` links.

## Repository inventory checked

| Area | Repository evidence | Audit finding |
|---|---|---|
| Main content | `app/content.json` | Contains bilingual home copy, six service/“How We Work” sections, and 15 insurance-coverage categories. |
| Service page | `app/[locale]/services/page.tsx` | Renders the six service sections from `app/content.json`. |
| Coverage page | `app/[locale]/coverage/page.tsx` | **Fixed and merged to `main`:** it renders all 15 bilingual coverage categories and their paragraphs from `siteContent.coverage.items`, instead of five generic placeholder categories. |
| About page | `app/[locale]/about/page.tsx`, `app/reference-content.ts` | Renders About/Why Us copy and three bilingual company-profile entries. Exact equivalence to the live site remains unverified. |
| Home carousel | `app/reference-content.ts` | Contains six bilingual carousel slides. Image/asset parity with the live site remains unverified. |
| Contact page | `app/[locale]/contact/page.tsx`, `app/reference-content.ts` | Renders the contact values listed above. Exact live-source match remains unverified. |
| Customer rights | `app/[locale]/customer-rights/page.tsx` | Page exists in Arabic and English, but text is generic drafted copy, not verified transcription from the live site or an approved legal source. |
| Customer complaints | `app/[locale]/customer-complaints/page.tsx` | Page exists in Arabic and English, but process text is generic drafted copy, not verified transcription from the live site or an approved complaints policy. It deliberately avoids inventing response deadlines. |
| Navigation | `app/components/site-frame.tsx`, `app/lib/localized-ui.ts` | All seven requested sections are present in both languages: home, about, how we work, insurance coverage, customer rights, customer complaints, and contact. |
| Source document | `docs/Website  content English - Arabic.docx`, matching PDF, `scripts/import-website-copy.py` | The repo contains a bilingual source document and import script. This supports a source-document-to-code workflow but does not prove parity with the current live website. |
| Brand/media/footer/legal | `docs/logo1.png`, shared site frame and CSS | Repository assets and code have been inventoried; visual and behavioral parity is not verified. |

## Findings and closure criteria

1. **Merged fix:** the coverage page now renders all 15 existing bilingual coverage categories and their full paragraph arrays from `app/content.json`.
2. **Existing brand/contact implementation:** the company name is centralized in `app/content.json`; email and phone values are centralized in `app/reference-content.ts`; the header/footer and contact page consume those values.
3. **Not verifiable yet:** exact live-site copy, page order, metadata, external/internal links, forms, telephone/email details, images, carousel media, footer, address/map, legal disclosures, and mobile/desktop layout.
4. **Requires business/legal approval:** customer-rights and complaints content must be compared with the actual published wording and approved by Jusoor before production use.
5. **Not yet validated in this audit:** no local build, lint, typecheck, or full browser screenshot comparison was run.
6. **Full audit completion gate:** make the reference host resolvable or provide a complete export/screenshots of both Arabic and English versions of every page (including linked/secondary pages); compare text and assets route by route; correct discrepancies; run `npm run lint`, `npm run typecheck`, and `npm run build`; then verify rendered desktop/mobile pages.

## Conclusion

The repository has all seven requested navigation sections and substantial bilingual content. The missing coverage rendering has been corrected and merged. The company name and contact values are present in the repository, but **full content parity with the supplied live site cannot honestly be marked complete until the live source can be retrieved and compared directly**.
