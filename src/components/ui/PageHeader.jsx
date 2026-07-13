export const PageHeader = ({
  title,
  description,
  centered = false,
}) => {
  return (
    <section
      className={`mb-10 ${
        centered ? "text-center" : ""
      }`}
    >
      <h1 className="mb-3 text-4xl font-bold text-gray-800">
        {title}
      </h1>

      <p
        className={`text-gray-600 ${
          centered ? "mx-auto max-w-3xl" : "max-w-3xl"
        }`}
      >
        {description}
      </p>
    </section>
  );
};