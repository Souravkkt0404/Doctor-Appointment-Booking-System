import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {
  CalendarCheck,
  UserPen,
  MessageSquareText,
  Bolt,
  Kanban,
  Home,
  Notebook,
  LogOut,
  Menu as CollapsIcon,
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

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );



  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 flex justify-between flex-col",
    {
      ["w-50"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-lg font-medium", {
                hidden: toggleCollapse,
              })}
            >
              Logo
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-8">
          {menuItems?.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            if (menu.isHeader) {
              return (
                <div
                  key={menu.id}
                  className="mt-6 mb-2 pl-3 text-sm font-semibold text-text-light"
                >
                  {menu.label}
                </div>
              );
            }
            return (
              <div key={menu.id} className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>{Icon && <Icon />}</div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-sm font-normal text-text-light"
                        )}
                      >
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

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogOut />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
