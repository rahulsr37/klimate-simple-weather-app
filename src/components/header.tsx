import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/">
          <img
            src={isDark ? "/logo.png" : "/logo2.png"}
            alt="Klimate"
            className="h-14"
          />
        </Link>

        <div>
          {/* search bar */}
          {/* theme toggle */}
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          >
            {isDark ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-500" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
