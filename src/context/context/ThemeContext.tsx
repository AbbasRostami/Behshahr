import React, { createContext, useContext, useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { RiComputerFill, RiSunLine } from "react-icons/ri";

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const applyTheme = (resolved: "light" | "dark") => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(resolved);
      setResolvedTheme(resolved);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = () => {
      applyTheme(mediaQuery.matches ? "dark" : "light");
    };

    if (theme === "system") {
      handleSystemChange();
      mediaQuery.addEventListener("change", handleSystemChange);
    } else {
      applyTheme(theme);
    }

    localStorage.setItem("theme", theme);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

type ThemeButtonVariant = "default" | "admin";

const themeOptions: Theme[] = ["light", "dark", "system"];

const ThemeIcon = ({
  t,
  variant,
  size = "w-6 h-6",
}: {
  t: Theme;
  variant?: ThemeButtonVariant;
  size?: string;
}) => {
  if (t === "light")
    return (
      <IoMoon
        className={`${size} ${variant === "admin" ? "text-gray-600 dark:text-gray-300" : "text-yellow-500"}`}
      />
    );

  if (t === "dark")
    return (
      <RiSunLine
        className={`${size} ${variant === "admin" ? "text-gray-400 dark:text-gray-300" : "text-gray-300"}`}
      />
    );

  return (
    <RiComputerFill
      className={`${size} ${variant === "admin" ? "text-blue-600 dark:text-blue-400" : "text-blue-500"}`}
    />
  );
};

export const ThemeToggleButton = ({
  variant = "default",
}: {
  variant?: ThemeButtonVariant;
}) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const next: Record<Theme, Theme> = {
      light: "dark",
      dark: "system",
      system: "light",
    };
    setTheme(next[theme]);
  };

  return (
    <div className="group relative">
      <button
        onClick={toggleTheme}
        aria-label="تغییر تم"
        className={`rounded-full border p-2 transition-all duration-300 ${
          variant === "admin"
            ? "bg-emerald-200/50 hover:bg-emerald-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
            : "border-gray-300 bg-white shadow-sm hover:scale-110 hover:shadow-lg dark:border-gray-600 dark:bg-neutral-800"
        }`}
      >
        <ThemeIcon t={theme} variant={variant} />
      </button>

      <div
        className={`absolute left-1/2 z-10 mt-2 flex -translate-x-1/2 gap-1 rounded-lg border p-2 shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 ${
          variant === "admin"
            ? "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
            : "border-gray-300 bg-white dark:border-gray-600 dark:bg-neutral-800"
        }`}
      >
        {themeOptions.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            aria-label={t}
            className={`rounded-full p-2 transition-all duration-300 ${
              variant === "admin"
                ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                : "hover:bg-gray-200 dark:hover:bg-neutral-700"
            } ${theme === t ? "ring-2 ring-green-400" : ""}`}
          >
            <ThemeIcon t={t} variant={variant} />
          </button>
        ))}
      </div>
    </div>
  );
};
