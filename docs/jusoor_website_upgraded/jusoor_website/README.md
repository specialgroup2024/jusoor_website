# Jusoor website

Bilingual Arabic/English website for Jusoor for Insurance Brokerage, built with Next.js.

## Required public pages

The primary navigation includes all requested sections in Arabic and English:

| Arabic navigation | English navigation | Route (Arabic/English prefix) |
|---|---|---|
| الرئيسية | Home | `/` |
| من نحن | About Us | `/about` |
| كيف نعمل | How We Work | `/services` |
| التغطية التأمينية | Insurance Coverage | `/coverage` |
| حقوق العملاء | Customer Rights | `/customer-rights` |
| شكاوى العملاء | Customer Complaints | `/customer-complaints` |
| اتصل بنا | Contact Us | `/contact` |

Open `/ar` for Arabic or `/en` for English. The language switch preserves the current page and updates the document language and text direction.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000/ar or http://localhost:3000/en.

Available checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Website copy and review

The bilingual service descriptions in `app/content.json` are based on
[`docs/Website  content English - Arabic.docx`](docs/Website%20%20content%20English%20-%20Arabic.docx).
The homepage carousel, company profile statements, and public contact channels in
`app/reference-content.ts` are based on the [Jusoor reference website](https://jsuoor.kairossol.io/).
The DOCX remains the source for service descriptions; regenerate those after updating it:

```bash
python scripts/import-website-copy.py
```

Insurance coverage descriptions are general information, not a guarantee of cover or a binding offer. Actual terms depend on the insurer and issued policy.

**Before production:** Jusoor should review and approve the customer-rights and complaints wording, privacy language, complaint acknowledgement/response timelines, escalation steps, and any applicable regulatory contact details. Do not publish unverified regulatory claims or service-level commitments. The reference website's displayed address and map link disagree, so the street address is omitted until verified.
