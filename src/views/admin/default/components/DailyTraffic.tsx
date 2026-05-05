import Card from "components/card";
import BarChart from "components/charts/BarChart";
import { MdArrowDropUp, MdOutlineCalendarToday } from "react-icons/md";
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from "variables/charts";
const DailyTraffic = ({
  data,
  categories,
}: {
  data: number[];
  categories: string[];
}) => {
  return (
    <Card extra="!p-[20px]">
      <div className="flex justify-between">
        <button className="linear flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">
            Daily Profit
          </span>
        </button>
        <div className="mt-2 flex items-start">
          <div className="flex items-center text-sm text-green-500">
            <MdArrowDropUp className="h-5 w-5" />
            <p className="font-bold"> +3.56% </p>
          </div>
        </div>
        {/* <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
                <MdBarChart className="h-6 w-6" />
              </button> */}
      </div>

      <div
        className={`h-[300px] w-full ${data.length < 7 && "flex items-center justify-center"
          }`}
      >
        {data.length < 7 ? (
          <p className="text-gray-600">Unlocks after one week</p>
        ) : (
          <BarChart
            // chartData={barChartDataDailyTraffic}
            // chartOptions={barChartOptionsDailyTraffic}
            chartOptions={
              categories.length < 7
                ? barChartOptionsDailyTraffic
                : {
                  ...barChartOptionsDailyTraffic,
                  xaxis: {
                    ...barChartOptionsDailyTraffic.xaxis,
                    categories: categories,
                  },
                }
            }
            chartData={
              data.length < 7
                ? barChartDataDailyTraffic
                : barChartDataDailyTraffic.map((item) => ({
                  ...item,
                  data: data,
                }))
            }
          />
        )}
      </div>
    </Card>
  );
};

export default DailyTraffic;
