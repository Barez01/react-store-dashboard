import Dropdown from "components/dropdown";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch, FiAlignJustify } from "react-icons/fi";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";
import {
  MdDarkMode,
  MdLanguage,
  MdLightMode,
  MdLogout,
  MdOutlineDarkMode,
  MdOutlineLanguage,
  MdOutlineLightMode,
} from "react-icons/md";

export default function ProfileNavBar() {
  const [darkmode, setDarkmode] = React.useState(false);
  return (
    <div className="relative col-span-1 flex h-[92px] w-full flex-grow items-center justify-between gap-2 rounded-[20px] border-[1px] border-gray-200 bg-white bg-clip-border px-2 py-2 pl-6 pr-6 shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none md:col-span-2 md:flex-grow-0 md:gap-1 lg:col-span-3 xl:gap-2 3xl:col-span-3">
      {/* <div className="flex h-full items-center rounded-[15px] bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="Search..."
              className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
          </div> */}
      {/* <span
            className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
            // onClick={onOpenSidenav}
          >
            <FiAlignJustify className="h-5 w-5" />
          </span> */}
      {/* Profile & Dropdown */}
      <Dropdown
        button={
          <div className="flex gap-3">
            <img
              className="h-10 w-10 rounded-full"
              src={avatar}
              alt="Elon Musk"
            />
            <div className="flex flex-col justify-center leading-none">
              <h6 className="mb-1 text-[16px] font-bold">Barez Azad</h6>
              <p className="text-[14px] text-gray-400">Cashier</p>
            </div>
          </div>
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
      <div className="flex gap-8">
        <button
          // onClick={() => setHeart(!heart)}
          className="right-3 top-3 flex items-center justify-center rounded-md p-2 text-gray-600 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-white/20"
        >
          <div className="flex h-full w-full items-center justify-center rounded-md text-xl dark:text-navy-900">
            {darkmode ? (
              <MdOutlineLanguage className="h-4 w-4 text-gray-600 dark:text-white" />
            ) : (
              <MdLanguage className="h-4 w-4 text-gray-600 dark:text-white" />
            )}
          </div>
        </button>
        <button
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
          className="right-3 top-3 flex items-center justify-center rounded-md p-2 text-gray-600 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-white/20"
        >
          <div className="flex h-full w-full items-center justify-center rounded-md text-xl dark:text-navy-900">
            {darkmode ? (
              <MdOutlineLightMode className="h-4 w-4 text-gray-600 dark:text-white" />
            ) : (
              <MdOutlineDarkMode className="h-4 w-4 text-gray-600 dark:text-white" />
            )}
          </div>
        </button>
        <button
          // onClick={() => setHeart(!heart)}
          className="right-3 top-3 flex items-center justify-center rounded-md p-2 text-gray-600 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-white/20"
        >
          <div className="flex h-full w-full items-center justify-center rounded-md text-xl dark:text-navy-900">
            {darkmode ? (
              <MdLogout className="h-4 w-4 text-gray-600 dark:text-white" />
            ) : (
              <MdLogout className="h-4 w-4 text-gray-600 dark:text-white" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
