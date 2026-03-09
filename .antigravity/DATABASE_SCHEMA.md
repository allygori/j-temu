# Database Schema

Database: PostgreSQL
ORM: Drizzle ORM
Architecture: Multi-organization SaaS appointment system

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
- organizations
- roles
- user_roles
- event_types
- availability
- bookings
- audit_logs

## Entity Relationship Diagram

```mermaid
erDiagram
    %% Relationships (Cardinalities: || = one, o{ = many)
    ORGANIZATIONS ||--o{ USERS : "has many"
    ORGANIZATIONS ||--o{ ROLES : "defines"
    ORGANIZATIONS ||--o{ EVENT_TYPES : "owns"
    ORGANIZATIONS ||--o{ BOOKINGS : "has"
    ORGANIZATIONS ||--o{ AUDIT_LOGS : "logs"

    USERS ||--o{ USER_ROLES : "assigned to"
    ROLES ||--o{ USER_ROLES : "assigned to"

    EVENT_TYPES ||--o{ AVAILABILITY : "has rules"
    EVENT_TYPES ||--o{ BOOKINGS : "generates"

    %% Entities with key fields
    ORGANIZATIONS {
        uuid id PK
        text name
        text slug UK
        text plan
        timestamptz created_at
        timestamptz updated_at
    }

    USERS {
        uuid id PK
        uuid organization_id FK
        text email UK
        text password_hash
        text full_name
        text avatar_url
        text timezone
        timestamptz created_at
        timestamptz updated_at
    }

    ROLES {
        uuid id PK
        uuid organization_id FK
        text name
        jsonb permissions
    }

    USER_ROLES {
        uuid user_id PK,FK
        uuid role_id PK,FK
    }

    EVENT_TYPES {
        uuid id PK
        uuid organization_id FK
        uuid creator_id FK "references users"
        text title
        text slug UK "per organization"
        int duration_minutes
        text description
        text color
        boolean is_active
        int max_bookings_per_day
        int buffer_before
        int buffer_after
        timestamptz created_at
        timestamptz updated_at
    }

    AVAILABILITY {
        uuid id PK
        uuid event_type_id FK
        int day_of_week
        time start_time
        time end_time
        date date_specific
        boolean is_recurring
    }

    BOOKINGS {
        uuid id PK
        uuid organization_id FK
        uuid event_type_id FK
        text invitee_name
        text invitee_email
        text invitee_phone
        timestamptz start_time
        timestamptz end_time
        text status
        text notes
        text payment_status
        timestamptz created_at
        timestamptz updated_at
    }

    AUDIT_LOGS {
        uuid id PK
        uuid organization_id FK
        uuid user_id FK
        text action
        text entity_type
        uuid entity_id
        jsonb details
        timestamptz created_at
    }
```

### Key Schema Design Decisions

| Decision | Rationale |
|----------|-----------|
| **`availability` per day-of-week** | Simple recurring pattern — Mon 9-17, Tue 10-18, etc. |
| **`event_type_id` nullable on availability** | null = applies to all services (default schedule) |
| **`settings` JSONB on organizations** | Flexible config (booking lead time, cancellation policy, branding) |
| **`metadata` JSONB on bookings** | Extensible (UTM tracking, referral source, etc.) |
| **Session table for Better Auth** | Better Auth auto-creates `sessions` + `accounts` tables |
| **Soft-delete via `is_active`** | No hard deletes for data integrity |
| **`organization_id` on all organization tables** | Core multi-tenancy filter — every query scopes by organization |
| **All times stored in UTC** | Display converted to organization timezone (WIB/WITA/WIT) |

---

## Multi-Tenancy + RBAC Design

### Multi-Tenancy Strategy

- **Row-Level Isolation** via `organization_id` on all organization-scoped tables
- Every database query in repositories MUST include `WHERE organization_id = ?`
- Middleware extracts `organization_id` from the authenticated user's session
- A helper `requireBusinessAccess(userId, organizationId)` guards all API routes

### RBAC Roles

| Role | Capabilities |
|------|-------------|
| **owner** | Full access: billing, team management, delete organization, all CRUD |
| **admin** | Manage services, availability, bookings, view analytics. No billing or team changes |
| **staff** | View own bookings, update booking status, view schedule |