import competitions from "../data/tables/competitions.json";

/**
 * Returns all enabled competitions ordered by display order.
 */
export const getCompetitions = () => {
  return competitions
    .filter((competition) => competition.enabled)
    .sort((a, b) => a.order - b.order);
};

/**
 * Returns one competition by ID.
 * Example: NT_WORLD_CUP
 */
export const getCompetitionById = (id) => {
  return competitions.find((competition) => competition.id === id);
};

/**
 * Returns only enabled competitions.
 */
export const getEnabledCompetitions = () => {
  return competitions.filter((competition) => competition.enabled);
};

/**
 * Returns only active competitions.
 */
export const getActiveCompetitions = () => {
  return competitions.filter(
    (competition) => competition.enabled && competition.active
  );
};