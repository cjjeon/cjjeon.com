import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

export interface MainLayoutProp {}

const MainLayout: React.FC<MainLayoutProp> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  const backgroundCss =
    theme === "dark"
      ? "from-gray-600 to-gray-800"
      : "from-gray-100 to-gray-400";

  return (
    <div
      className={`flex justify-center w-screen h-screen bg-gradient-to-r ${backgroundCss}`}
    >
      <div className={"max-w-screen-lg w-full p-5"}>
        <div className={"flex w-full justify-between items-center"}>
          <div>CJ Jeon</div>
          <div className={"flex gap-3"}>
            <div className={"cursor-pointer underline uppercase"}>
              Personal Info
            </div>
            <div className={"cursor-pointer underline uppercase"}>
              Projects / Blogs
            </div>
            <div className={"cursor-pointer underline uppercase"}>Gears</div>
            <div
              className={"cursor-pointer hover:border-purple-500"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <FontAwesomeIcon
                icon={theme === "dark" ? faSun : faMoon}
                size={"lg"}
              />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
