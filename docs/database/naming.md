# HT Medals v2 - Naming Convention

Version: Alpha 2.0

---

# Purpose

This document defines the naming conventions used throughout the HT Medals project.

Consistent naming improves readability, maintainability and long-term stability.

---

# General Rules

- IDs never change.
- Names may change.
- Relationships always use IDs.
- Never use display names as identifiers.
- Prefer descriptive IDs over numeric IDs.

---

# Competition IDs

Format

```
COMPETITION_NAME
```

Examples

```
NT_WORLD_CUP

U21_WORLD_CUP

EUROPEAN_CHAMPIONSHIP

AMERICAN_CUP

AFRICAN_CUP

ASIAN_OCEANIAN_CUP

NATIONS_CUP
```

---

# Tournament IDs

Format

```
COMPETITION_SEASON
```

Examples

```
NT_WORLD_CUP_S092

NT_WORLD_CUP_S093

EUROPEAN_CHAMPIONSHIP_S091

NATIONS_CUP_S095
```

Tournament IDs must always be unique.

---

# Season IDs

Format

```
S###
```

Examples

```
S001

S054

S092

S100
```

---

# Nation IDs

Nation IDs use the official Hattrick country code.

Examples

```
ITA

ENG

SMR

BRA

ESP

USA

GER
```

---

# Coach IDs

Primary Key

Official Hattrick userId

Examples

```
123456

987654

456321
```

Coach nicknames are not identifiers.

Nicknames may change.

User IDs never change.

---

# Medal IDs

Medal IDs should be descriptive.

Preferred format

```
TOURNAMENT_POSITION_NATION
```

Examples

```
NT_WORLD_CUP_S092_GOLD_SMR

NT_WORLD_CUP_S092_SILVER_ITA

NT_WORLD_CUP_S092_BRONZE_BRA
```

If duplicate bronze medals exist, append a sequential suffix.

Examples

```
NT_WORLD_CUP_S092_BRONZE_BRA_1

NT_WORLD_CUP_S092_BRONZE_ENG_2
```

---

# Variable Naming

JavaScript variables use camelCase.

Examples

```
competitionId

seasonId

coachId

nationId

tournamentId

medalId
```

---

# File Naming

React Components

PascalCase

Examples

```
Hero.jsx

InfoCard.jsx

PageHeader.jsx

StatsCard.jsx
```

---

Services

camelCase

Examples

```
competitionService.js

coachService.js

medalService.js

rankingService.js
```

---

Database Tables

lowercase plural

Examples

```
competitions.json

seasons.json

tournaments.json

coaches.json

nations.json

medals.json
```

---

Documentation

lowercase

Examples

```
database-model.md

standards.md

roadmap.md

relationships.md

tables.md

naming.md
```

---

# Reserved Words

Avoid using generic names.

Prefer

```
competitionId
```

instead of

```
idCompetition
```

Prefer

```
coachNationalityId
```

instead of

```
nationality
```

Prefer

```
coachedNationId
```

instead of

```
country
```

---

# Long-term Goal

Every identifier should remain stable for the lifetime of the project.

Names and labels may evolve.

Identifiers must remain immutable.