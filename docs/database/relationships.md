# HT Medals v2 - Database Relationships

Version: Alpha 2.0

---

# Purpose

This document describes the relationships between all database tables.

The goal is to keep the database normalized and avoid duplicated information.

---

# Database Overview

```
Competition
      │
      │ 1
      │
      │ N
Tournament
      ▲
      │
      │ N
Season
      │
      │
      ▼
Medal
├──────────── Coach
└──────────── Nation
```

---

# Competition

Relationship

```
Competition

1 → N Tournament
```

Meaning

One competition contains many tournaments.

Examples

World Cup

↓

Season 91

↓

Season 92

↓

Season 93

---

# Season

Relationship

```
Season

1 → N Tournament
```

Meaning

One Hattrick season contains many tournaments.

Examples

Season 92

↓

World Cup

↓

European Championship

↓

American Cup

↓

African Cup

↓

Asian & Oceanian Cup

↓

Nations Cup

---

# Tournament

Relationships

```
Tournament

N → 1 Competition

N → 1 Season

1 → N Medal
```

Meaning

A tournament belongs to exactly one competition.

A tournament belongs to exactly one season.

A tournament generates multiple medals.

Tournament never stores winners.

Winners are calculated from medals.

---

# Medal

Relationships

```
Medal

N → 1 Tournament

N → 1 Coach

N → 1 Nation
```

Meaning

Each medal belongs to one tournament.

Each medal belongs to one coach.

Each medal belongs to one coached nation.

---

# Coach

Relationship

```
Coach

1 → N Medal
```

Meaning

One coach can win many medals during his career.

The coach is identified by the official Hattrick userId.

Nickname is never used as identifier.

---

# Nation

Relationship

```
Nation

1 → N Medal
```

Meaning

One nation can win many medals.

Historical medals never change even if future information changes.

---

# Historical Rules

Historical data is immutable.

Examples

Coach changes nickname

↓

Historical medals remain unchanged.

Coach changes nationality

↓

Historical medals keep the nationality valid when the medal was won.

Competition renamed

↓

Relationships remain valid because IDs never change.

---

# Data Flow

```
Database Tables

↓

Services

↓

Business Logic

↓

Components

↓

Pages
```

Pages never communicate directly with database tables.

Services are the only layer allowed to access tables.

---

# Cardinality Summary

Competition

```
1 → N Tournament
```

Season

```
1 → N Tournament
```

Tournament

```
1 → N Medal
```

Coach

```
1 → N Medal
```

Nation

```
1 → N Medal
```

---

# Philosophy

The Medal table is the central historical table.

Everything is calculated from Medal.

Examples

- Rankings
- Hall of Fame
- Statistics
- Records

No calculated data should ever be stored permanently.