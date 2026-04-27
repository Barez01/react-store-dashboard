import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import {
  IoMdHome,
  IoMdInformationCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import {
  MdApps,
  MdBarChart,
  MdCategory,
  MdDashboard,
  MdGroup,
  MdGroups,
} from "react-icons/md";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";
import Dropdown from "components/dropdown";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch, FiAlignJustify } from "react-icons/fi";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdCategory className="h-7 w-7" />}
          title={"Categories"}
          subtitle={"20 groups"}
          path="categories"
        />
        <Widget
          icon={<MdApps className="h-6 w-6" />}
          title={"Products"}
          subtitle={"180 items"}
          path="data-tables"
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Sales"}
          subtitle={"$10"}
          path="nft-marketplace"
        />
        <div className="relative flex h-[92px] w-[555px] flex-grow items-center justify-around gap-2 rounded-[20px] px-2 py-2 border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:text-white dark:!bg-navy-800 dark:shadow-none md:w-[1000px] md:flex-grow-0 md:gap-1 xl:w-[900px] xl:gap-2">
          <div className="flex h-full items-center rounded-[15px] bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="Search..."
              className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
          </div>
          <span
            className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
            // onClick={onOpenSidenav}
          >
            <FiAlignJustify className="h-5 w-5" />
          </span>
          {/* start Notification */}
          <Dropdown
            button={
              <p className="cursor-pointer">
                <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
              </p>
            }
            animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
            children={
              <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-navy-700 dark:text-white">
                    Notification
                  </p>
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    Mark all read
                  </p>
                </div>

                <button className="flex w-full items-center">
                  <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                    <BsArrowBarUp />
                  </div>
                  <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                    <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                      New Update: Horizon UI Dashboard PRO
                    </p>
                    <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                      A new update for your downloaded item is available!
                    </p>
                  </div>
                </button>

                <button className="flex w-full items-center">
                  <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                    <BsArrowBarUp />
                  </div>
                  <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                    <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                      New Update: Horizon UI Dashboard PRO
                    </p>
                    <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                      A new update for your downloaded item is available!
                    </p>
                  </div>
                </button>
              </div>
            }
            classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
          />
          {/* start Horizon PRO */}
          <Dropdown
            button={
              <p className="cursor-pointer">
                <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />
              </p>
            }
            children={
              <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                <div
                  style={{
                    // backgroundImage: `url(${navbarimage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="mb-2 aspect-video w-full rounded-lg"
                />
                <a
                  target="blank"
                  href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                  className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
                >
                  Buy Horizon UI PRO
                </a>
                <a
                  target="blank"
                  href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
                  className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
                >
                  See Documentation
                </a>
                <a
                  target="blank"
                  href="https://horizon-ui.com/?ref=live-free-tailwind-react"
                  className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
                >
                  Try Horizon Free
                </a>
              </div>
            }
            classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}
            animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          />
          <div
            className="cursor-pointer text-gray-600"
            // onClick={() => {
            //   if (darkmode) {
            //     document.body.classList.remove("dark");
            //     setDarkmode(false);
            //   } else {
            //     document.body.classList.add("dark");
            //     setDarkmode(true);
            //   }
            // }}
          >
            {false ? (
              <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
            ) : (
              <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
            )}
          </div>
          {/* Profile & Dropdown */}
          <Dropdown
            button={
              <img
                className="h-10 w-10 rounded-full"
                // src={avatar}
                alt="Elon Musk"
              />
            }
            children={
              <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                <div className="ml-4 mt-3">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      👋 Hey, Adela
                    </p>{" "}
                  </div>
                </div>
                <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

                <div className="ml-4 mt-3 flex flex-col">
                  <a
                    href=" "
                    className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                  >
                    Profile Settings
                  </a>
                  <a
                    href=" "
                    className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                  >
                    Newsletter Settings
                  </a>
                  <a
                    href=" "
                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                  >
                    Log Out
                  </a>
                </div>
              </div>
            }
            classNames={"py-2 top-8 -left-[180px] w-max"}
          />
        </div>
        {/* <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"$1,000"}
          path="profile"
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
          path="nft-marketplace"
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
          path="nft-marketplace"
        /> */}
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable tableData={tableDataComplex} />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
