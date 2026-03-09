# Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Runtime** | Node.js 20+ | LTS, stable |
| **Framework** | Next.js 16 (App Router) | Already set up, SSR + API routes |
| **Frontend** | React 19, Zustand | State management, server components |
| **UI** | Shadcn UI + Radix + Tailwind CSS 4 | Dashboard components |
| **Auth** | Better Auth | Multi-tenancy + RBAC built-in |
| **ORM** | Drizzle ORM + `postgres` driver | Type-safe, lightweight, great migrations |
| **Database** | PostgreSQL 16 (Neon/Supabase) | Managed, serverless-friendly |
| **Validation** | Zod | Schema validation, shared client/server |
| **Date/Time** | `date-fns` + `date-fns-tz` | Timezone handling (WIB/WITA/WIT) |
| **Email** | React Email + Resend | Transactional emails |
| **WhatsApp** | Fonnte API or WA Cloud API | Booking confirmations + reminders |
| **Background Jobs** | Trigger.dev v3 | Serverless-friendly, cron + event-driven |
| **File Storage** | Uploadthing or Cloudflare R2 | Business logos, profile photos |
| **Analytics** | PostHog (future) | Product analytics |
| **Deployment** | Vercel + Neon PostgreSQL | Zero-config, auto-scaling |