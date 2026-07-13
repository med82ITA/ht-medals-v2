export const InfoCard = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {Icon && (
        <Icon
          size={40}
          className="mb-4 text-ht-green"
        />
      )}

      <h2 className="mb-3 text-2xl font-semibold text-gray-800">
        {title}
      </h2>

      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
};