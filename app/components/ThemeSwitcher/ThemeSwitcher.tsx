"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-yellow-100`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <div className="text-gray-600 flex justify-center items-center h-[20px] w-[20px]">
          <div>
            <FiMoon />
          </div>
        </div>
      ) : (
        <div className="text-black flex justify-center items-center h-[20px] w-[20px] dark:bg-yellow-100 ">
          <div>
            <FiSun className=" fill-yellow-100  h-[20px] w-[20px]" />
          </div>
        </div>
      )}
    </button>
  );
};
