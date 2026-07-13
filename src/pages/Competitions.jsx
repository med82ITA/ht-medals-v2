import {
  Trophy,
  Globe,
  Shield,
  Flag,
} from "lucide-react";

export const Competitions = () => {
  const competitions = [
    {
      title: "World Cup",
      description:
        "The most prestigious National Team competition in Hattrick.",
      icon: Trophy,
    },
    {
      title: "Continental Championships",
      description:
        "Continental tournaments for Europe's, America's, Africa's and Asia/Oceania's best national teams.",
      icon: Globe,
    },
    {
      title: "Nations Cup",
      description:
        "International competition played between World Cup editions.",
      icon: Shield,
    },
    {
      title: "U21 World Cup",
      description:
        "The official World Cup dedicated to Under 21 National Teams.",
      icon: Flag,
    },
  ];

  return (
    <div className="space-y-10">
      <section>
        <h1 className="mb-3 text-4xl font-bold text-gray-800">
          Competitions
        </h1>

        <p className="max-w-3xl text-gray-600">
          Browse every official National Team competition included in
          HT Medals.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {competitions.map((competition) => {
          const Icon = competition.icon;

          return (
            <div
              key={competition.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon
                size={40}
                className="mb-4 text-ht-green"
              />

              <h2 className="mb-3 text-2xl font-semibold">
                {competition.title}
              </h2>

              <p className="leading-7 text-gray-600">
                {competition.description}
              </p>
            </div>
          );
        })}
      </section>

      <section className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-700">
          Coming Soon
        </h3>

        <p className="text-gray-500">
          Competition details, medal tables, champions and historical
          statistics will be available in the next development phases.
        </p>
      </section>
    </div>
  );
};