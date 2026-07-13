# HT Medals v2 - Database Tables

Version: Alpha 2.0

---

# Philosophy

Every JSON file inside the project represents a database table.

Although JSON is currently used as the storage engine, the data model is designed as a normalized relational database.

Future versions may migrate to SQL without changing the application architecture.

---

# Static Tables

Static tables rarely change.

---

## Competition

Purpose

Defines every competition available in HT Medals.

Primary Key

id

Relationships

Competition

1 → N Tournament

Current Status

✅ Implemented

---

## Season

Purpose

Defines every Hattrick season.

Primary Key

id

Relationships

Season

1 → N Tournament

Current Status

🚧 Planned

---

## Nation

Purpose

Defines every Hattrick National Team.

Primary Key

id

Relationships

Nation

1 → N Medal

Current Status

🚧 Planned

---

# Historical Tables

Historical tables continuously grow.

---

## Tournament

Purpose

Represents one edition of one competition.

Examples

NT World Cup Season 92

European Championship Season 93

Primary Key

id

Relationships

Competition

1 → N Tournament

Season

1 → N Tournament

Tournament

1 → N Medal

Current Status

🚧 Planned

---

## Coach

Purpose

Represents one Hattrick manager.

Primary Key

Official Hattrick userId

Relationships

Coach

1 → N Medal

Current Status

🚧 Planned

---

## Medal

Purpose

Represents one historical achievement.

One medal equals one row.

Primary Key

id

Relationships

Tournament

1 → N Medal

Coach

1 → N Medal

Nation

1 → N Medal

Current Status

🚧 Planned

---

# Central Table

The Medal table is the heart of the application.

Everything is calculated from Medal.

Examples

- Coach Ranking
- Nation Ranking
- Nationality Ranking
- Hall of Fame
- Statistics
- Competition Rankings

No ranking is permanently stored.

---

# Database Growth

The expected growth order is

Competition

↓

Season

↓

Nation

↓

Coach

↓

Tournament

↓

Medal

---

# Future Tables

Possible future additions

- Match
- MatchEvent
- Formation
- Player
- Staff
- Achievement
- ImportHistory

These tables are not required for Version 1.0.

---

# Storage Layer

Current

JSON Tables

Future

- PostgreSQL
- SQLite
- MySQL
- REST API
- GraphQL
- Supabase

Only the Services layer should change.

The React application should remain unchanged.