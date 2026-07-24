import { Box, Slider } from "@mui/material";
import React from "react";
import { IoClose } from "react-icons/io5";
import { CourseFilterState } from "../../types/coursesList";

interface FilterSidebarProps {
  filter: CourseFilterState;
  priceRange: number[];
  showMobile: boolean;
  onFilterChange: (params: Partial<CourseFilterState>) => void;
  onPriceChange: (newValue: number[]) => void;
  onClear: () => void;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filter,
  priceRange,
  showMobile,
  onFilterChange,
  onPriceChange,
  onClear,
  onClose,
}) => {
  const courseTypes = [
    { label: "حضوری", value: "1" },
    { label: "آنلاین", value: "2" },
    { label: "آنلاین - حضوری", value: "3" },
  ];

  const courseLevels = [
    { label: "مبتدی", value: "1" },
    { label: "متوسط", value: "2" },
    { label: "پیشرفته", value: "3" },
  ];

  const technologies = [
    { label: "بک اند", value: "backend" },
    { label: "فرانت اند", value: "frontend" },
    { label: "React Js", value: "react" },
  ];

  return (
    <>
      {showMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        dir="rtl"
        className={`fixed left-0 top-0 z-50 h-full w-[300px] overflow-y-auto bg-[#FBF6F6] p-5 shadow-xl transition-transform duration-300 dark:bg-gray-800 lg:relative lg:top-auto lg:z-auto lg:h-auto lg:w-[280px] lg:shrink-0 lg:translate-x-0 lg:rounded-2xl lg:shadow-[0_4px_20px_rgba(0,0,0,0.06)] ${
          showMobile ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <button
          onClick={onClose}
          className="mb-4 rounded-lg p-1 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 lg:hidden"
        >
          <IoClose size={22} />
        </button>

        <h3 className="mb-6 text-center text-lg font-bold text-[#22445D] dark:text-white">
          فیلترها
        </h3>

        <div className="space-y-6">
          <FilterSection title="تکنولوژی">
            {technologies.map((tech) => (
              <FilterCheckbox key={tech.value} label={tech.label} />
            ))}
          </FilterSection>

          <FilterSection title="نوع دوره">
            {courseTypes.map((type) => (
              <FilterRadio
                key={type.value}
                label={type.label}
                name="courseType"
                checked={filter.CourseTypeId === type.value}
                onChange={() => onFilterChange({ CourseTypeId: type.value })}
              />
            ))}
          </FilterSection>

          <FilterSection title="سطح دوره">
            {courseLevels.map((level) => (
              <FilterRadio
                key={level.value}
                label={level.label}
                name="courseLevel"
                checked={filter.courseLevelId === level.value}
                onChange={() => onFilterChange({ courseLevelId: level.value })}
              />
            ))}
          </FilterSection>

          <FilterSection title="محدوده قیمت">
            <Box className="px-2">
              <Slider
                value={priceRange}
                onChange={(_, val) => onPriceChange(val as number[])}
                min={0}
                max={20000000}
                step={100000}
                sx={{
                  color: "#12926C",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#12926C",
                  },
                }}
              />
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{priceRange[1].toLocaleString("fa-IR")} تومان</span>
                <span>{priceRange[0].toLocaleString("fa-IR")} تومان</span>
              </div>
            </Box>
          </FilterSection>
        </div>

        <button
          onClick={onClear}
          className="mt-8 h-10 w-full rounded-xl border border-green-600 bg-white text-sm text-[#12926C] transition hover:bg-green-50 dark:bg-gray-700 dark:text-green-300"
        >
          پاک کردن فیلترها
        </button>
      </aside>
    </>
  );
};

const FilterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <details open>
    <summary className="cursor-pointer text-sm font-semibold text-[#22445D] dark:text-white">
      {title}
    </summary>
    <div className="mt-3 space-y-1 rounded-xl border border-green-200 bg-white p-2 dark:border-green-800 dark:bg-gray-700">
      {children}
    </div>
  </details>
);

const FilterRadio = ({
  label,
  name,
  checked,
  onChange,
}: {
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <label className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-green-50 dark:text-white dark:hover:bg-gray-600">
    <input
      type="radio"
      name={name}
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 accent-green-600"
    />
    {label}
  </label>
);

const FilterCheckbox = ({ label }: { label: string }) => (
  <label className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-green-50 dark:text-white dark:hover:bg-gray-600">
    <input type="checkbox" className="h-4 w-4 accent-green-600" />
    {label}
  </label>
);

export { FilterSidebar };
