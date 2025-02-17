import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  CalendarCheck,
  UserPen,
  MessageSquareText,
  Bolt,
  Kanban,
  Home,
  Notebook,
  LogOut,
  ShieldCheck as LogoIcon,
} from "lucide-react";

const menuItems = [
  { id: 1, label: "Home", icon: Home, link: "/" },
  { id: 2, label: "Overview", icon: Kanban, link: "/overview" },
  { id: 3, label: "Appointments", icon: CalendarCheck, link: "/appointments" },
  { id: 4, label: "Doctors", icon: UserPen, link: "/doctors" },
  { id: 5, label: "Pathology Results", icon: Notebook, link: "/pathology" },
  { id: 6, label: "Chats", icon: MessageSquareText, link: "/chats" },
  { id: 7, label: "Account", icon: null, link: null, isHeader: true },
  { id: 8, label: "Settings", icon: Bolt, link: "/settings" },
];

const Sidebar = ({ toggleCollapse,isCollapsed  }) => {
  const router = useRouter();

  const activeMenu = menuItems.find((menu) => menu.link === router.pathname);

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 flex justify-between flex-col bg-white dark:bg-gray-900 shadow-lg transition-all duration-300",
    {
      ["w-60"]: !toggleCollapse,
      ["w-15"]: toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-gray-300 dark:bg-gray-800"]: activeMenu?.id === menu.id,
      }
    );
  };

  return (
    // <div className={wrapperClasses}>
    <div
      className={`h-screen px-4 pt-8 pb-4 flex flex-col transition-all ${
        isCollapsed ? "w-20" : "w-50"
      }`}
    >
      {/* Top Section - Logo */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon className="text-blue-500" />
            <span
              className={classNames(
                "mt-2 text-lg font-medium text-gray-800 dark:text-white",
                {
                  hidden: isCollapsed,
                }
              )}
            >
              Logo
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col items-start mt-8">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            if (menu.isHeader) {
              return (
                <div
                  key={menu.id}
                  className="mt-6 mb-2 pl-3 text-sm font-semibold text-gray-500 dark:text-gray-400"
                >
                  {menu.label}
                </div>
              );
            }
            return (
              <div key={menu.id} className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      {Icon && (
                        <Icon className="text-gray-600 dark:text-white" />
                      )}
                    </div>
                    {!isCollapsed && (
                      <span className="text-sm font-normal text-gray-700 dark:text-gray-300">
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logout Button */}
      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogOut className="text-red-500" />
        </div>
        {!isCollapsed && (
          <span className="text-md font-medium text-gray-700 dark:text-gray-300">
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
