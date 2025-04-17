import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useAtomValue } from "jotai";
import { profileAtom } from "../../../context/jotai/ProfileProvider";

export default function MonthlyTarget() {
  const data = useAtomValue(profileAtom);

  const profilePercent = data?.profileCompletionPercentage ?? 0;

  const series = [profilePercent];

  const options: ApexOptions = {
    colors: ["#465FFF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "radialBar",
      height: 330,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: "80%",
        },
        track: {
          background: "#E4E7EC",
          strokeWidth: "100%",
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "36px",
            fontWeight: "600",
            offsetY: -40,
            color: "#1D2939",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#465FFF"],
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  return (
    <div
      className=" shadow-xl transition-all duration-300 rounded-2xl border hover:bg-gray-100 dark:hover:bg-gray-700/80 border-gray-200 bg-white/90 dark:border-gray-800 dark:bg-white/[0.03]"
    >
      <div className="px-5 pt-5 bg-white hover:bg-gray-100 shadow-default dark:hover:bg-gray-700/80 rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div className="flex flex-col items-end justify-between mb-5">
          <h3 className="text-lg rtl font-semibold text-gray-800 dark:text-white/90">
            درصد تکمیل پروفایل
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            برای دسترسی به همه امکانات، پروفایل خود را کامل کنید
          </p>
        </div>

        <div className="relative">
          <div className="max-h-[330px]" id="chartDarkStyle">
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={330}
            />
          </div>

          <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[95%] rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
            +10%
          </span>
        </div>
      </div>
    </div>
  );
}
