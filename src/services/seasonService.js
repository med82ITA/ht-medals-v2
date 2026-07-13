import seasons from "../data/tables/seasons.json";

/**
 * Returns all enabled seasons ordered by season number.
 */
export const getSeasons = () => {
  return seasons
    .filter((season) => season.enabled)
    .sort((a, b) => a.number - b.number);
};

/**
 * Returns one season by its ID.
 * Example: S092
 */
export const getSeasonById = (id) => {
  return seasons.find((season) => season.id === id);
};

/**
 * Returns one season by Hattrick season number.
 * Example: 92
 */
export const getSeasonByNumber = (number) => {
  return seasons.find((season) => season.number === number);
};

/**
 * Returns the current season.
 */
export const getCurrentSeason = () => {
  return seasons.find((season) => season.current);
};

/**
 * Returns only enabled seasons.
 */
export const getEnabledSeasons = () => {
  return seasons.filter((season) => season.enabled);
};