# Jusoor website

## Run locally

```bash
npm install
npm run dev
```

Open `/en` for English or `/ar` for Arabic. The language switch keeps the
current page and updates the document language and text direction.

## Website copy

The bilingual service descriptions in `app/content.json` are based on
[`docs/Website  content English - Arabic.docx`](docs/Website%20%20content%20English%20-%20Arabic.docx).
The homepage carousel, company profile statements, and public contact
channels in `app/reference-content.ts` are based on
[the Jusoor reference website](https://jsuoor.kairossol.io/). The DOCX remains
the source for the service descriptions; regenerate those after updating it:

```bash
python scripts/import-website-copy.py
```

The contact page uses the email address and phone number listed on the
reference website. Its street address is omitted because the site's displayed
address and map link disagree. Privacy and complaints-policy text is not
reproduced because the reference contains data-collection statements and
placeholder fields that need company and qualified-professional review.

Review the insurance descriptions and any regulatory or coverage statements
with the company before publishing.
