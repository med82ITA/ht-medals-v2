import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="max-w-lg text-center">
        <AlertTriangle
          size={72}
          className="mx-auto mb-6 text-yellow-500"
        />

        <h1 className="mb-4 text-6xl font-bold text-gray-800">
          404
        </h1>

        <h2 className="mb-4 text-3xl font-semibold text-gray-700">
          Page Not Found
        </h2>

        <p className="mb-8 leading-7 text-gray-600">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-ht-green px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};