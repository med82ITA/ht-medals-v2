import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Trophy, Menu, X } from "lucide-react";
import { NAVIGATION } from "../../config/navigation.config";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-ht-green font-semibold"
        : "text-gray-600 hover:text-ht-green"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-ht-green"
          onClick={closeMenu}
        >
          <Trophy size={28} />
          <span>HT Medals</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAVIGATION
            .filter((item) => item.enabled)
            .map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={getNavClass}
              >
                {item.label}
              </NavLink>
            ))}
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-ht-green md:hidden"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="border-t bg-white shadow-md md:hidden">
          <div className="container mx-auto flex flex-col px-4 py-3">
            {NAVIGATION
              .filter((item) => item.enabled)
              .map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 transition-colors ${
                      isActive
                        ? "bg-green-100 text-ht-green font-semibold"
                        : "text-gray-700 hover:bg-gray-100 hover:text-ht-green"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
          </div>
        </nav>
      )}
    </header>
  );
};