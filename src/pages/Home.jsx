import { Trophy, Medal, Globe, BarChart3 } from "lucide-react";

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
      {/* Hero */}
      <section className="rounded-2xl bg-gradient-to-r from-green-700 to-green-600 px-8 py-14 text-center text-white shadow-lg">
        <h1 className="mb-4 text-5xl font-extrabold">
          HT Medals
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-green-100">
          The unofficial archive dedicated to Hattrick National Team
          competitions, medals, rankings and historical statistics.
        </p>
      </section>

      {/* Feature cards */}
      <section>
        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          Explore
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon
                  size={36}
                  className="mb-4 text-ht-green"
                />

                <h3 className="mb-2 text-xl font-semibold">
                  {section.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">
          About HT Medals
        </h2>

        <p className="leading-7 text-gray-600">
          HT Medals is an unofficial project that collects the complete
          history of Hattrick National Team competitions, providing
          rankings, medal tables and historical records in one place.
        </p>
      </section>
    </div>
  );
};