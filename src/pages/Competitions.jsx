import {
  Trophy,
  Globe,
  Shield,
  Flag,
} from "lucide-react";

import { PageHeader } from "../components/ui/PageHeader";
import { InfoCard } from "../components/ui/InfoCard";

import { getCompetitions } from "../services/competitionService";

const ICONS = {
  World: Trophy,
  Continental: Globe,
  International: Shield,
  U21: Flag,
};

export const Competitions = () => {
  const competitions = getCompetitions();

  const getIcon = (competition) => {
    if (competition.teamType === "U21") {
      return Flag;
    }

    return ICONS[competition.category] || Trophy;
  };

  return (
    <div className="space-y-10">
      <PageHeader
        title="Competitions"
        description="Browse every official National Team competition included in HT Medals."
      />

      <section className="grid gap-6 md:grid-cols-2">
        {competitions.map((competition) => (
          <InfoCard
            key={competition.id}
            title={competition.name}
            description={`${competition.teamType} • ${competition.category}${
              competition.continent
                ? ` • ${competition.continent}`
                : ""
            }`}
            icon={getIcon(competition)}
          />
        ))}
      </section>
    </div>
  );
};