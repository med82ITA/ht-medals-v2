export const StatsCard = ({ value, label }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-2 text-4xl font-extrabold text-ht-green">
        {value}
      </div>

      <div className="text-sm font-medium uppercase tracking-wide text-gray-500">
        {label}
      </div>
    </div>
  );
};