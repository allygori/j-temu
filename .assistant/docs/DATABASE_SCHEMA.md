# Database Schema

Database: PostgreSQL
ORM: Drizzle ORM
Architecture: Multi-tenant SaaS appointment system

This schema should supports:
- multi-tenancy accounts
- booking scheduling
- availability windows
- blocked time ranges
- Google Calendar integration
- WhatsApp notifications
- booking cancel / reschedule tokens
- SaaS subscriptions (future)

All times should be stored in UTC.

## Tables Overview
- users
- businesses
- business_members
- services
- availability_windows
- blocked_times
- bookings
- booking_tokens
- calendar_integrations
- notifications
- subscriptions


## Entity Relationship Diagram

```mermaid
erDiagram
    users ||--o{ business_members : "has memberships"
    businesses ||--o{ business_members : "has members"
    businesses ||--o{ services : "offers"
    businesses ||--o{ availability_windows : "has schedule"
    businesses ||--o{ blocked_times : "has blocks"
    businesses ||--o{ bookings : "receives"
    businesses ||--o{ calendar_integrations : "connected to"
    businesses ||--o{ subscription : "subscribes"
    services ||--o{ bookings : "booked for"
    bookings ||--o{ notifications : "triggers"
    bookings ||--o{ booking_tokens : "has tokens"
    users ||--o{ bookings : "client books"

    users {
        uuid id PK
        string email UK
        string name
        string phone
        string password_hash
        string avatar_url
        boolean email_verified
        timestamp created_at
        timestamp updated_at
    }

    businesses {
        uuid id PK
        string name
        string slug UK
        string description
        string phone
        string address
        string city
        string timezone
        string logo_url
        string cover_url
        jsonb settings
        uuid owner_id FK
        boolean is_active
        timestamp created_at
        timestamp updated_at
    }

    business_members {
        uuid id PK
        uuid business_id FK
        uuid user_id FK
        enum role "owner|admin|staff"
        boolean is_active
        timestamp created_at
    }

    services {
        uuid id PK
        uuid business_id FK
        string name
        string slug
        string description
        int duration_minutes
        int buffer_before
        int buffer_after
        decimal price
        string currency
        int max_bookings_per_slot
        boolean is_active
        int sort_order
        timestamp created_at
        timestamp updated_at
    }

    availability_windows {
        uuid id PK
        uuid business_id FK
        uuid service_id FK "nullable, null=all services"
        int day_of_week "0-6"
        time start_time
        time end_time
        boolean is_active
        timestamp created_at
    }

    blocked_times {
        uuid id PK
        uuid business_id FK
        timestamp start_at
        timestamp end_at
        string reason
        timestamp created_at
    }

    bookings {
        uuid id PK
        uuid business_id FK
        uuid service_id FK
        uuid client_user_id FK "nullable"
        string client_name
        string client_email
        string client_phone
        timestamp start_at
        timestamp end_at
        enum status "pending|confirmed|cancelled|completed|no_show"
        string notes
        string cancel_reason
        jsonb metadata
        timestamp created_at
        timestamp updated_at
    }

    booking_tokens {
        uuid id PK
        uuid booking_id FK
        string token UK
        enum type "cancel|reschedule|confirm"
        timestamp expires_at
        boolean is_used
        timestamp created_at
    }

    notifications {
        uuid id PK
        uuid booking_id FK
        uuid business_id FK
        enum channel "whatsapp|email|sms"
        enum type "confirmation|reminder|cancellation|reschedule"
        enum status "pending|sent|failed|delivered"
        string recipient
        jsonb payload
        string error_message
        timestamp sent_at
        timestamp created_at
    }

    calendar_integrations {
        uuid id PK
        uuid business_id FK
        uuid user_id FK
        enum provider "google_calendar"
        string access_token
        string refresh_token
        timestamp token_expires_at
        string calendar_id
        boolean is_active
        timestamp created_at
        timestamp updated_at
    }

    subscriptions {
        uuid id PK
        uuid business_id FK
        enum plan "free|basic|pro|enterprise"
        enum status "active|past_due|cancelled|trialing"
        timestamp current_period_start
        timestamp current_period_end
        jsonb features
        timestamp created_at
        timestamp updated_at
    }
```

### Key Schema Design Decisions

| Decision | Rationale |
|----------|-----------|
| **`business_members` junction table** | Enables proper RBAC — a user can be staff in multiple businesses |
| **`client_user_id` is nullable on bookings** | Clients can book without registering (guest booking) |
| **`availability_windows` per day-of-week** | Simple recurring pattern — Mon 9-17, Tue 10-18, etc. |
| **`service_id` nullable on availability_windows** | null = applies to all services (default schedule) |
| **`settings` JSONB on businesses** | Flexible config (booking lead time, cancellation policy, branding) |
| **`metadata` JSONB on bookings** | Extensible (UTM tracking, referral source, etc.) |
| **Session table for Better Auth** | Better Auth auto-creates `sessions` + `accounts` tables |
| **Soft-delete via `is_active`** | No hard deletes for data integrity |
| **`business_id` on all tenant tables** | Core multi-tenancy filter — every query scopes by business |
| **All times stored in UTC** | Display converted to business timezone (WIB/WITA/WIT) |

---

## Multi-Tenancy + RBAC Design

### Multi-Tenancy Strategy

- **Row-Level Isolation** via `business_id` on all tenant-scoped tables
- Every database query in repositories MUST include `WHERE business_id = ?`
- Middleware extracts `business_id` from the authenticated user's session
- A helper `requireBusinessAccess(userId, businessId)` guards all API routes

### RBAC Roles

| Role | Capabilities |
|------|-------------|
| **owner** | Full access: billing, team management, delete business, all CRUD |
| **admin** | Manage services, availability, bookings, view analytics. No billing or team changes |
| **staff** | View own bookings, update booking status, view schedule |