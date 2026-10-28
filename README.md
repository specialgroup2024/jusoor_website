# Jusoor website

## Run locally

```bash
npm install
npm run dev
```

Open `/en` for English or `/ar` for Arabic. The language switch keeps the
current page and updates the document language and text direction.

## Website copy

The bilingual website copy in `app/content.json` was transcribed from
[`docs/Website  content English - Arabic.docx`](docs/Website%20%20content%20English%20-%20Arabic.docx).
Keep that supplied document as the source of truth when updating the website
copy. Regenerate the derived content file after updating the Word document:

```bash
python scripts/import-website-copy.py
```

The contact page remains a placeholder because no contact details were
included in the source.

Review the insurance descriptions and any regulatory or coverage statements
with the company before publishing.
