import React, { createContext, useContext, useEffect, useState } from "react";
import { RiComputerFill, RiSunLine } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";

type Theme = "light" | "dark" | "system";
// //
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

    const handleSystemThemeChange = () => {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      applyTheme(systemDark ? "dark" : "light");
    };

    if (theme === "system") {
      handleSystemThemeChange();
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", handleSystemThemeChange);
    } else {
      applyTheme(theme);
    }

    localStorage.setItem("theme", theme);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleSystemThemeChange);
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
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// export const ThemeToggleButton = () => {
//   const { theme, setTheme } = useTheme();

//   const toggleTheme = () => {
//     if (theme === "light") setTheme("dark");
//     else if (theme === "dark") setTheme("system");
//     else setTheme("light");
//   };

//   return (
//     <div className="relative group">
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110"
//     >
//       {theme === "light" ? (
//         <IoMoon className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400 transition duration-300" />
//       ) : theme === "dark" ? (
//         <RiSunLine className="w-6 h-6 text-gray-300 group-hover:text-orange-300 transition duration-300" />
//       ) : (
//         <RiComputerFill className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition duration-300" />
//       )}
//     </button>

//     {/* گزینه‌های تغییر تم */}
//     <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-10 flex space-x-2 bg-white dark:bg-neutral-800 p-2 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
//       <button
//         onClick={() => setTheme("light")}
//         className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all duration-300"
//       >
//         <IoMoon className="w-6 h-6 text-yellow-500 transition duration-300" />
//       </button>
//       <button
//         onClick={() => setTheme("dark")}
//         className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all duration-300"
//       >
//         <RiSunLine className="w-6 h-6 text-gray-300 transition duration-300" />
//       </button>
//       <button
//         onClick={() => setTheme("system")}
//         className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all duration-300"
//       >
//         <RiComputerFill className="w-6 h-6 text-blue-500 transition duration-300" />
//       </button>
//     </div>
//   </div>
//   );
// };

type ThemeButtonVariant = "default" | "admin";

type ThemeToggleButtonProps = {
  variant?: ThemeButtonVariant;
};

export const ThemeToggleButton = ({
  variant = "default",
}: ThemeToggleButtonProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <div className={`relative group `}>
      <button
        onClick={toggleTheme}
        className={`
          p-2 rounded-full border transition-all duration-300
          ${
            variant === "admin"
              ? " dark:border-gray-700 bg-emerald-200/50 dark:bg-gray-900 hover:bg-emerald-100 dark:hover:bg-gray-800"
              : "border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-lg"
          }
          ${variant === "default" ? "hover:scale-110" : "hover:scale-[1.05]"}
        `}
      >
        {theme === "light" ? (
          <IoMoon
            className={`
            w-6 h-6 transition duration-300
            ${
              variant === "admin"
                ? "text-gray-600 dark:text-gray-300"
                : "text-yellow-500"
            }
            group-hover:${
              variant === "admin"
                ? "text-gray-700 dark:text-gray-100"
                : "text-yellow-400"
            }
          `}
          />
        ) : theme === "dark" ? (
          <RiSunLine
            className={`
            w-6 h-6 transition duration-300
            ${
              variant === "admin"
                ? "text-gray-400 dark:text-gray-300"
                : "text-gray-300"
            }
            group-hover:${
              variant === "admin"
                ? "text-gray-500 dark:text-gray-100"
                : "text-orange-300"
            }
          `}
          />
        ) : (
          <RiComputerFill
            className={`
            w-6 h-6 transition duration-300
            ${
              variant === "admin"
                ? "text-blue-600 dark:text-blue-400"
                : "text-blue-500"
            }
            group-hover:${
              variant === "admin"
                ? "text-blue-700 dark:text-blue-300"
                : "text-blue-400"
            }
          `}
          />
        )}
      </button>

      {/* Dropdown Options */}
      <div
        className={`
        absolute left-1/2 transform -translate-x-1/2 mt-2 
        opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 
        flex space-x-2 p-2 rounded-lg shadow-lg border
        ${
          variant === "admin"
            ? "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
            : "bg-white dark:bg-neutral-800 border-gray-300 dark:border-gray-600"
        }
      `}
      >
        {["light", "dark", "system"].map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t as Theme)}
            className={`
              p-2 rounded-full transition-all duration-300
              ${
                variant === "admin"
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "hover:bg-gray-200 dark:hover:bg-neutral-700"
              }
            `}
          >
            {t === "light" && <IoMoon className="w-6 h-6 text-yellow-500" />}
            {t === "dark" && <RiSunLine className="w-6 h-6 text-gray-400" />}
            {t === "system" && (
              <RiComputerFill className="w-6 h-6 text-blue-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
