import { useState } from "react";
import { BellDotIcon, MoreVertical, Search, User } from "lucide-react";
import { useRouter } from "next/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="flex justify-between items-center p-4 border-b shadow-sm w-full sticky top-0 z-50">
      {/* Search Field */}
      <div className="flex items-center flex-grow max-w-lg relative">
        <Search
          size={20}
          className="text-gray-500 dark:text-white absolute left-3 top-1/2 transform -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white dark:bg-gray-800 text-black dark:text-white"
        />
      </div>

      {/* Icons & User Info */}
      <div className="flex items-center space-x-4">
        <BellDotIcon
          className="cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition"
          size={24}
        />

        {/* User Info */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <User />
            <div className="hidden sm:block">
              <h3 className="font-semibold text-gray-700 dark:text-white">
                constGenius
              </h3>
              <h6 className="text-xs text-gray-500 dark:text-gray-300">
                constgenius@gmail.com
              </h6>
            </div>
            <MoreVertical size={20} className="text-gray-600 dark:text-white" />
          </div>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 py-2">
              <button
                className="block w-full px-4 py-2 text-left text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => router.push("/signIn")}
              >
                Sign In
              </button>
              <button
                className="block w-full px-4 py-2 text-left text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => router.push("/signUp")}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
