                 Competition
                 (C001)
                     │
              1       │       N
                     │
                Tournament
                (T000123)
                ┌─────────────┐
                │ seasonId    │────────────┐
                │ competition │            │
                └─────────────┘            │
                     │                     │
              1      │      N             │
                     │                     │
                  Medal                    │
               (M000001)                  │
          ┌───────────────┐               │
          │ coachId       │──────────┐    │
          │ nationId      │──────┐   │    │
          │ position      │      │   │    │
          └───────────────┘      │   │    │
                                 │   │    │
                             Coach   Nation   Season
                           (userId)   (ITA)   (S092)