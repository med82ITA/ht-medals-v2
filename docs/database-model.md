# HT Medals v2 - Database Model

Version: 2.0 Alpha

---

# 1. Project Philosophy

HT Medals is not simply a React website.

HT Medals is a historical relational database with a modern web interface.

The frontend is only responsible for displaying information.

Business logic belongs to the Services layer.

Historical data must always remain consistent and immutable.

---

# 2. Architecture

```
                 React Pages
                      │
                      ▼
              React Components
                      │
                      ▼
                 Services Layer
                      │
                      ▼
              Database Tables (JSON)
```

The storage engine is currently based on JSON files.

Future versions may migrate to SQL, PostgreSQL, SQLite or an external API without changing the React application.

Pages never communicate directly with the database.

Pages communicate only with Services.

---

# 3. Database Domains

The database is divided into two logical domains.

## Static Tables

These tables rarely change.

- Competition
- Season
- Nation

---

## Historical Tables

These tables grow over time.

- Tournament
- Coach
- Medal

---

# 4. Entity Relationship Diagram

```
Season
   │
   │ 1
   │
   │ N
Tournament
   ▲
   │
   │ N
Competition
   │
   │ 1
   │
   ▼
Medal
├──────── Coach
└──────── Nation
```

---

# 5. Table: Competition

Represents a competition definition.

Examples

- World Cup
- U21 World Cup
- European Championship
- American Cup
- African Cup
- Asian & Oceanian Cup
- Nations Cup

## Fields

| Field | Type | Description |
|--------|------|-------------|
| id | string | Permanent identifier |
| order | number | Display order |
| code | string | Internal code |
| name | string | Full name |
| shortName | string | Short name |
| category | string | World / Continental / International |
| teamType | string | NT / U21 |
| continent | string \| null | Continent if applicable |
| enabled | boolean | Visible inside application |
| active | boolean | Competition currently active |

## Example IDs

```
NT_WORLD_CUP
U21_WORLD_CUP
EUROPEAN_CHAMPIONSHIP
AMERICAN_CUP
AFRICAN_CUP
ASIAN_OCEANIAN_CUP
NATIONS_CUP
```

Relationships

Competition

```
1 → N Tournament
```

---

# 6. Table: Season

Represents one Hattrick season.

Example

```
Season 92
```

## Fields

| Field | Type | Description |
|--------|------|-------------|
| id | string | Season identifier |
| number | number | Hattrick season |
| enabled | boolean | Available |

## Example IDs

```
S001
S092
S100
```

Relationships

Season

```
1 → N Tournament
```

---

# 7. Table: Tournament

Represents one edition of one competition.

Examples

```
NT World Cup Season 92

European Championship Season 90

Nations Cup Season 95
```

## Fields

| Field | Type | Description |
|--------|------|-------------|
| id | string | Tournament identifier |
| competitionId | string | FK Competition |
| seasonId | string | FK Season |
| startDate | string \| null | Optional |
| endDate | string \| null | Optional |
| enabled | boolean | Visible |

## Example IDs

```
NT_WORLD_CUP_S092

EUROPEAN_CHAMPIONSHIP_S091

NATIONS_CUP_S095
```

Relationships

Tournament

```
N → 1 Competition

N → 1 Season

1 → N Medal
```

Tournament never stores winners.

Gold medal determines the winner.

---

# 8. Table: Coach

Represents one Hattrick manager.

Primary Key

Official Hattrick userId.

Nickname is NOT an identifier.

## Fields

| Field | Type | Description |
|--------|------|-------------|
| userId | number | Official Hattrick userId |
| login | string | Current nickname |
| displayName | string | Display name |
| enabled | boolean | Available |

Relationships

Coach

```
1 → N Medal
```

---

# 9. Table: Nation

Represents one Hattrick National Team.

## Fields

| Field | Type | Description |
|--------|------|-------------|
| id | string | Nation code |
| htId | number | Hattrick Nation ID |
| name | string | English name |
| localizedName | string | Local language name |
| continent | string | Continent |
| flag | string | Flag asset |
| enabled | boolean | Available |

Example IDs

```
ITA

ENG

SMR

BRA
```

Relationships

Nation

```
1 → N Medal
```

---

# 10. Table: Medal

Represents one historical achievement.

One medal equals one database record.

This is the central table of HT Medals.

## Fields

| Field | Type | Description |
|--------|------|-------------|
| id | string | Medal identifier |
| tournamentId | string | FK Tournament |
| coachId | number | FK Coach |
| coachedNationId | string | Nation coached |
| coachNationalityId | string | Coach nationality at that time |
| position | number | 1,2,3 |
| points | number | Ranking points |

Relationships

Medal

```
N → 1 Tournament

N → 1 Coach

N → 1 Nation
```

---

# 11. Historical Consistency

Historical data is immutable.

Examples

Coach changes nickname

→ History does not change.

Coach changes nationality

→ Medals keep the historical nationality.

Competition changes name

→ IDs remain unchanged.

---

# 12. Ranking Philosophy

The database never stores rankings.

Every ranking is calculated.

Examples

Coach Ranking

```
GROUP BY coachId
```

Nation Ranking

```
GROUP BY coachedNationId
```

Nationality Ranking

```
GROUP BY coachNationalityId
```

Hall of Fame

```
SUM(points)
```

Competition Ranking

```
GROUP BY competitionId
```

---

# 13. Design Principles

- Normalize data.
- Never duplicate information.
- IDs are immutable.
- Names may change.
- Services contain business logic.
- Components contain presentation only.
- Pages compose components.
- Rankings are calculated.
- Statistics are calculated.
- Hall of Fame is calculated.

---

# 14. Future Database

Current storage

```
JSON Tables
```

Future supported storage

- PostgreSQL
- SQLite
- MySQL
- REST API
- GraphQL
- Supabase

No frontend changes should be required.

Only the Services layer should be replaced.

---

# 15. Long-term Vision

HT Medals should become the definitive historical archive for Hattrick National Team competitions.

The database must remain independent from the user interface.

Every future feature must be built on this data model.