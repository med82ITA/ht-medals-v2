import {
  Trophy,
  Medal,
  Globe,
  BarChart3,
} from "lucide-react";

import { Hero } from "../components/ui/Hero";
import { PageHeader } from "../components/ui/PageHeader";
import { InfoCard } from "../components/ui/InfoCard";

export const Home = () => {
  const sections = [
    {
      title: "Competitions",
      description:
        "Browse World Cups, Continental Championships and Nations Cup history.",
      icon: Trophy,
    },
    {
      title: "Rankings",
      description:
        "Discover the most successful coaches, nations and nationalities.",
      icon: Medal,
    },
    {
      title: "Hall of Fame",
      description:
        "Celebrate the greatest achievements in Hattrick National Teams.",
      icon: Globe,
    },
    {
      title: "Statistics",
      description:
        "Explore medals, finals, victories and historical records.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="space-y-12">
      <Hero />

      <PageHeader
        title="Explore"
        description="Browse every section of HT Medals and discover the complete history of Hattrick National Teams."
      />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {sections.map((section) => (
          <InfoCard
            key={section.title}
            title={section.title}
            description={section.description}
            icon={section.icon}
          />
        ))}
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          About HT Medals
        </h2>

        <p className="leading-7 text-gray-600">
          HT Medals is an unofficial project dedicated to preserving and
          presenting the complete history of Hattrick National Team
          competitions. The goal is to provide the community with a
          modern, fast and comprehensive archive featuring medal tables,
          rankings, Hall of Fame, statistics and historical records for
          National Teams and U21 competitions.
        </p>
      </section>
    </div>
  );
};