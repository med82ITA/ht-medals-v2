# HT Medals v2 - Development Standards

Version: 2.0 Alpha

---

# 1. Purpose

This document defines the development standards for HT Medals.

Every new feature should follow these rules.

The goal is to keep the project consistent, maintainable and scalable over time.

---

# 2. Project Philosophy

HT Medals is a historical database with a modern React interface.

The project is data-driven.

The frontend must never own business logic.

Historical consistency has priority over implementation convenience.

---

# 3. Application Architecture

```
Database Tables

↓

Services

↓

Lib (Algorithms)

↓

Components

↓

Pages
```

Every layer has a single responsibility.

---

# 4. Responsibilities

## Database

Stores historical information.

Never contains calculated values.

---

## Services

Responsible for

- loading data
- filtering data
- joining tables
- exposing clean APIs
- preparing data for the frontend

Services never contain UI code.

---

## Lib

Contains reusable algorithms.

Examples

- Ranking calculation
- Hall of Fame calculation
- Statistics
- Sorting
- Medal points
- Utility functions

Lib never accesses React.

---

## Components

Display information.

Components never know where data comes from.

Components never import JSON files.

---

## Pages

Compose components.

Pages never contain business logic.

Pages communicate only with Services.

---

# 5. Database Rules

Every JSON file represents one database table.

Examples

```
competitions.json

↓

Competition Table
```

```
tournaments.json

↓

Tournament Table
```

```
medals.json

↓

Medal Table
```

Future versions may replace JSON with SQL without changing the React pages.

---

# 6. Entity Standards

Whenever applicable, every entity should contain

- id
- order
- name
- shortName
- enabled
- active

Not every entity requires every field.

Only use fields that make sense for that entity.

---

# 7. Identifier Standards

IDs never change.

Names may change.

Relationships always use IDs.

Never use names as foreign keys.

---

Competition IDs

```
NT_WORLD_CUP

U21_WORLD_CUP

EUROPEAN_CHAMPIONSHIP

NATIONS_CUP
```

---

Tournament IDs

```
NT_WORLD_CUP_S092

EUROPEAN_CHAMPIONSHIP_S091
```

---

Season IDs

```
S001

S092

S100
```

---

Nation IDs

```
ITA

BRA

SMR

ENG
```

Use official Hattrick nation codes.

---

Coach IDs

Use the official Hattrick userId.

Never identify a coach using the nickname.

---

# 8. Historical Rules

Historical data is immutable.

Examples

Coach changes nickname

No historical changes.

Coach changes nationality

Historical medals remain unchanged.

Competition renamed

Relationships remain valid.

---

# 9. Coding Rules

Prefer readability.

Avoid duplicated code.

Keep components small.

Create reusable components only when duplication exists.

Avoid premature abstraction.

---

# 10. React Rules

Components

- Presentation only

Pages

- Composition only

Hooks

- Shared UI logic only

Business logic belongs inside Services or Lib.

---

# 11. Services Rules

Every table has its own Service.

Examples

```
competitionService

seasonService

tournamentService

coachService

nationService

medalService
```

Services expose functions.

Examples

```
getCompetitions()

getCompetitionById()

getCoachRanking()

getHallOfFame()
```

Pages never manipulate raw data.

---

# 12. Lib Rules

Algorithms belong here.

Examples

```
calculateRanking()

calculateHallOfFame()

calculateStatistics()

sortMedals()

sortCoaches()

calculatePoints()
```

Lib functions should be pure whenever possible.

---

# 13. UI Rules

Use reusable UI components.

Examples

- Hero
- PageHeader
- InfoCard
- StatsCard

Avoid duplicated layouts.

---

# 14. Documentation Rules

Every architectural decision must be documented.

Important documents

- README.md
- database-model.md
- standards.md
- roadmap.md

Documentation is part of the project.

---

# 15. Git Workflow

Development process

```
Modify

↓

Test

↓

Commit

↓

Push
```

Commit messages should be meaningful.

Examples

```
Create Competition Service

Implement Hero component

Add Tournament model

Create Ranking Engine
```

---

# 16. Long-term Goal

The application should be able to migrate from local JSON tables to a relational database without changing the React frontend.

Only the Services layer should require modification.