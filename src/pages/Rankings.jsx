import {
  Medal,
  User,
  Flag,
  Trophy,
} from "lucide-react";

export const Rankings = () => {
  const rankings = [
    {
      title: "Coaches Ranking",
      description:
        "Discover the most successful National Team coaches based on medals won.",
      icon: User,
    },
    {
      title: "Nations Ranking",
      description:
        "Compare every nation by total medals, gold medals and historical achievements.",
      icon: Flag,
    },
    {
      title: "Nationalities Ranking",
      description:
        "Rank coaches by nationality to discover the most successful football cultures.",
      icon: Medal,
    },
    {
      title: "Hall of Records",
      description:
        "Special rankings highlighting unique achievements and historical records.",
      icon: Trophy,
    },
  ];

  return (
    <div className="space-y-10">
      <section>
        <h1 className="mb-3 text-4xl font-bold text-gray-800">
          Rankings
        </h1>

        <p className="max-w-3xl text-gray-600">
          Explore every ranking available in HT Medals, from coaches to
          nations and historical achievements.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {rankings.map((ranking) => {
          const Icon = ranking.icon;

          return (
            <div
              key={ranking.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon
                size={40}
                className="mb-4 text-ht-green"
              />

              <h2 className="mb-3 text-2xl font-semibold">
                {ranking.title}
              </h2>

              <p className="leading-7 text-gray-600">
                {ranking.description}
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
          Interactive rankings, filters, search and complete medal tables
          will be introduced in the next development phases.
        </p>
      </section>
    </div>
  );
};