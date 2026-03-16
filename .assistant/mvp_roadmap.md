# Otonomy: MVP Roadmap (Fast Launch Guide)

This roadmap outlines the essential steps to build and launch your appointment scheduling SaaS for the Indonesian market.

## Phase 1: Authentication & Identity
- [ ] **Better Auth Integration**: Complete the login/signup flow using the `users`, `accounts`, and `sessions` tables.
- [ ] **Onboarding Flow**: After signup, force users to "Create an Organization" or "Join an Organization" (Multi-tenancy entry point).
- [ ] **User Profile**: Basic profile management (name, image, timezone).

## Phase 2: Organization & Team Management
- [ ] **Dashboard Home**: A summary view for the organization owner (Total bookings, upcoming events).
- [ ] **Member Invitation**: UI to invite staff/admins via email (using the `invitations` table).
- [ ] **Role Management**: Implement middleware to check `member.role` (owner vs. staff) for sensitive actions.

## Phase 3: Scheduling Core (The Product)
- [ ] **Event Type CRUD**: 
    - Create/Edit/Delete event types (15m, 30m, etc.).
    - Toggle `is_active` status.
- [ ] **Availability Builder**: 
    - Weekly recurring schedule UI (Mon-Fri).
    - Date-specific overrides (for holidays or time off).
- [ ] **Timezone Handling**: Ensure all availability is saved in UTC but displayed in the organization's local timezone (WIB/WITA/WIT).

## Phase 4: Public Booking Flow (End-User Value)
- [ ] **Organization Booking Page**: `otonomy.id/[org-slug]` listing all active event types.
- [ ] **Availability Engine**: Server-side logic to calculate "Available Slots" based on:
    - Event Type rules.
    - Staff availability.
    - Existing bookings in the `bookings` table.
- [ ] **Booking Form**: Collect client name, email, and WhatsApp number.
- [ ] **Success Page**: Confirmation with "Add to Calendar" links.

## Phase 5: Indonesian Market Differentiators
- [ ] **WhatsApp Notifications (via API)**:
    - Automatic confirmation to the invitee.
    - Reminder 1 hour/24 hours before the appointment.
- [ ] **Google Calendar Sync**: Two-way sync to block out slots based on the owner's personal calendar.

## Phase 6: Polishing & Launch
- [ ] **Indonesian Payment Gateway (Midtrans/Xendit)**: Optional for MVP, but good for paid consultations.
- [ ] **Landing Page**: Marketing site (Hero, Features, Pricing).
- [ ] **Deployment**: Setup on VPS or Vercel + Neon/Postgres.

---

### Priority Implementation Order (The "Fast Path")
1. **Auth + Org Setup** (2 days)
2. **Simple Event Creation (no complex rules)** (1 day)
3. **Public Booking Page (Read Availability)** (3 days)
4. **WhatsApp Confirmation (Simple API call)** (1 day)
5. **Launch!** (7-10 days total)
