import { Link } from "react-router-dom";

// AuthLayout.tsx - اضافه کن
interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  title: string;
  subtitle?: string; // ← اضافه کن
  backTo?: { label: string; path: string };
  bottomLinks?: { label: string; path: string }[];
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  imageSrc,
  title,
  subtitle, // ← اضافه کن
  backTo,
  bottomLinks,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="flex w-full max-w-[850px] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
        <div className="hidden w-1/2 items-center justify-center bg-[#A4F6DE] lg:flex">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[420px] w-auto object-contain p-6"
          />
        </div>

        <div className="flex w-full flex-col bg-[#eeeaea] p-6 dark:bg-gray-800 sm:p-8 lg:w-1/2">
          <h2 className="text-right text-xl font-bold text-[#22445D] dark:text-white sm:text-2xl">
            {title}
          </h2>

          {/* ← اضافه کن */}
          {subtitle && (
            <p className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          )}

          <div className="mt-6 flex flex-1 flex-col">{children}</div>

          {backTo && (
            <Link
              to={backTo.path}
              className="mt-3 flex h-12 w-full items-center justify-center rounded-xl border-2 border-[#158B68] bg-white text-sm text-[#22445D] transition hover:bg-green-50 dark:bg-gray-700 dark:text-white"
            >
              {backTo.label}
            </Link>
          )}

          {bottomLinks && bottomLinks.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
              {bottomLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-[#22445D] transition hover:text-[#158B68] hover:underline dark:text-gray-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { AuthLayout };
