import { Trophy } from "lucide-react";
import { APP } from "../../config/app.config";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Trophy
              size={30}
              className="text-ht-green"
            />

            <div>
              <h2 className="text-lg font-bold text-ht-green">
                {APP.name}
              </h2>

              <p className="text-sm text-gray-500">
                {APP.subtitle}
              </p>
            </div>
          </div>

          {/* Version */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
              Version
            </p>

            <p className="text-sm text-gray-500">
              {APP.version}
            </p>
          </div>

          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
              Developed by
            </p>

            <p className="text-sm text-gray-500">
              {APP.author}
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
          © {currentYear} {APP.name} • {APP.copyright}
        </div>

      </div>
    </footer>
  );
};