# Vinay — Professional Portfolio (Next.js App Router)

A production‑ready portfolio that **doesn’t read like a resume**. Clean architecture, animations, dark mode, case‑study pages, and a working contact API (Nodemailer‑ready).

## Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- framer‑motion
- Nodemailer (optional; demo mode without SMTP)
- SEO (metadata, OG image), sitemap & robots

## Quickstart
```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Configure
- Replace links in `app/page.tsx` and `lib/projects.ts`
- Drop your `public/resume.pdf`
- Edit SEO in `app/layout.tsx`
- Case studies in `app/case-studies/*`

## Contact API
Set env vars (Vercel or `.env.local`):
```
SMTP_HOST=
SMTP_PORT=465
SMTP_USER=
SMTP_PASS=
CONTACT_TO=to@example.com
CONTACT_FROM=from@example.com
```
Without these, the route runs in **demo mode** and logs to server console.

## Deploy
- **Vercel**: Import from GitHub, set env vars, build.
- **Netlify / Cloudflare** also work; ensure Node runtime for the API route.

## License
MIT
