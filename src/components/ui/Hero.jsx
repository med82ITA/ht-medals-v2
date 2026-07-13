import { APP } from "../../config/app.config";
import { getAppStats } from "../../services/appService";

import { StatsCard } from "./StatsCard";

export const Hero = () => {
  const stats = getAppStats();

  return (
    <section className="rounded-3xl bg-gradient-to-r from-green-700 via-green-600 to-green-700 px-8 py-16 text-white shadow-xl">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight">
          {APP.name}
        </h1>

        <p className="mx-auto mb-12 max-w-4xl text-xl text-green-100">
          {APP.subtitle}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            value={stats.competitions}
            label="Competitions"
          />

          <StatsCard
            value={stats.nations}
            label="Nations"
          />

          <StatsCard
            value={stats.coaches}
            label="Coaches"
          />

          <StatsCard
            value={stats.medals}
            label="Medals"
          />
        </div>
      </div>
    </section>
  );
};