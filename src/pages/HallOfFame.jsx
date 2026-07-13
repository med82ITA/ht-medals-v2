import {
  Crown,
  Trophy,
  Star,
  Medal,
} from "lucide-react";

export const HallOfFame = () => {
  const categories = [
    {
      title: "Legendary Coaches",
      description:
        "Celebrate the greatest National Team coaches in Hattrick history.",
      icon: Crown,
    },
    {
      title: "Legendary Nations",
      description:
        "The most decorated nations across every official competition.",
      icon: Trophy,
    },
    {
      title: "Historic Records",
      description:
        "Unique achievements, winning streaks and unforgettable performances.",
      icon: Star,
    },
    {
      title: "Greatest Champions",
      description:
        "The teams and coaches who defined the history of Hattrick National Teams.",
      icon: Medal,
    },
  ];

  return (
    <div className="space-y-10">
      <section>
        <h1 className="mb-3 text-4xl font-bold text-gray-800">
          Hall of Fame
        </h1>

        <p className="max-w-3xl text-gray-600">
          A celebration of the greatest achievements in the history of
          Hattrick National Team competitions.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon
                size={40}
                className="mb-4 text-ht-green"
              />

              <h2 className="mb-3 text-2xl font-semibold">
                {category.title}
              </h2>

              <p className="leading-7 text-gray-600">
                {category.description}
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
          Hall of Fame rankings, legends, trophies and historical records
          will be available in future updates.
        </p>
      </section>
    </div>
  );
};