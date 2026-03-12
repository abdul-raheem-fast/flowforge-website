# FlowForge — Workflow Automation Startup (PPiT Assignment 1)

FlowForge is a simulated B2B workflow automation startup created for **PPiT Assignment 1**.  
This repository contains both the **marketing website** and the **formal business plan**.

---

## Project Overview

- **Company name:** FlowForge  
- **Tagline:** *Streamline. Automate. Scale.*  
- **Type:** SaaS workflow automation platform for small and mid-size businesses  
- **Deliverables in this repo:**
  - `website/` — Multi-page marketing site (Home, Services, About, Contact)
  - `BUSINESS_PLAN.md` — Full business plan (to be exported to PDF)

The website follows **HCI principles**, **clean information architecture**, and a modern, responsive layout suitable for desktop and mobile.

---

## Tech Stack

- **Frontend:** Semantic HTML5, modern CSS (flexbox, grid, responsive layout)
- **Styling:** Custom design system (CSS variables, gradients, shadows, components)
- **Behavior:** Vanilla JavaScript for navigation and contact-form UX
- **Deployment:** Vercel (static site, no backend required)

No build tools or frameworks are required; everything runs as a static site.

---

## Running the Website Locally

From the project root:

```bash
cd "D:\PPiT Assignment 1"
npx serve website
```

Then open `http://localhost:3000` in your browser.

> You can also open `website/index.html` directly in a browser, but using a local server is closer to production behavior.

---

## Deploying to Vercel

1. Push this project to GitHub (repository: `flowforge-website`).
2. Go to [`https://vercel.com`](https://vercel.com) and sign in with your account.
3. Click **Add New → Project** and import the `flowforge-website` repository.
4. When asked for the **root directory**, select `website/` (or keep `rootDirectory: "website"` in `vercel.json`).
5. Click **Deploy** and wait for the build to finish.
6. Copy the generated URL (for example: `https://flowforge-website.vercel.app`).

Update the **Website** section in `BUSINESS_PLAN.md` with the final live URL before exporting to PDF.

---

## Business Plan → PDF

`BUSINESS_PLAN.md` contains:

- Company overview, vision, and mission  
- Problem statement and solution  
- Products & services  
- Target market and customer segments  
- Business model and revenue strategy  
- Technology stack  
- Marketing and sales strategy  
- Company structure and roles  
- Operational workflow  
- Future growth and scalability  
- Logo and website link

To generate the PDF required for submission, use **one** of the following:

```bash
# Using Pandoc
pandoc BUSINESS_PLAN.md -o BUSINESS_PLAN.pdf
```

Or:

- **VS Code:** Install a “Markdown PDF” extension, right‑click `BUSINESS_PLAN.md` → **Export to PDF**  
- **Online tool:** Use any Markdown → PDF converter.

> Make sure the **website URL** and **logo** render correctly in the exported PDF before submitting.

---

## Assignment Mapping

- **Website pages required:** Home, Services/Products, About Us (team), Contact → implemented in `website/`.
- **Logo:** Included in `website/assets/` and referenced in both the site and business plan.
- **Business plan sections:** All required sections from the assignment brief are covered in `BUSINESS_PLAN.md`.

This README is intentionally written in a professional style to reflect real-world project documentation.
