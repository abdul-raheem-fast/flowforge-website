# FlowForge — Assignment Deliverables

This repository contains the FlowForge business plan and website for the PPiT Assignment 1.

## Contents

- **website/** — Static website (Home, Services, About, Contact)
- **BUSINESS_PLAN.md** — Full business plan (convert to PDF for submission)

## Website Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Import the repository and deploy.
4. Copy the generated URL (e.g. `https://your-project.vercel.app`).
5. Add the URL to the **Website** section in `BUSINESS_PLAN.md` before converting to PDF.

## Local Preview

From the project root:

```bash
npx serve website
```

Then open http://localhost:3000

## PDF Generation

Convert `BUSINESS_PLAN.md` to PDF using one of:

- **Pandoc:** `pandoc BUSINESS_PLAN.md -o BUSINESS_PLAN.pdf`
- **VS Code:** Install "Markdown PDF" extension, right-click the file → Export to PDF
- **Online:** Use a Markdown-to-PDF converter (e.g. markdown2pdf.com)

Add the website URL to the document before generating the PDF.
