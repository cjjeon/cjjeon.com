import React, { useState } from "react";
import { useRouter } from "next/router";

import { NAVIGATIONS, SOCIALMEDIAS } from "../../constants";
import CloseIcon from "../../assets/icons/close";
import MenuIcon from "../../assets/icons/menu";

interface INavbarItemProps {
  name: string;
  href: string;
}

const NavbarItem: React.FC<INavbarItemProps> = (props) => {
  const router = useRouter();

  return (
    <a
      className={
        "block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" +
        (router.pathname === props.href
          ? " bg-gray-200 rounded-lg dark-mode:bg-gray-700"
          : " bg-transparent rounded-lg dark-mode:bg-transparent")
      }
      href={props.href}
    >
      {props.name}
    </a>
  );
};

interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // This is modified sidebar from https://tailwindcomponents.com/component/responsive-sidebar-with-dropdown
  return (
    <div className="flex flex-col w-full md:w-72 text-gray-700 dark-mode:text-gray-200 bg-gray-300 dark-mode:bg-gray-800 flex-shrink-0 md:justify-center md:h-screen">
      <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between md:self-center">
        <a
          href="#"
          className="text-lg md:text-4xl font-paris font-bold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
        >
          CJ Jeon
        </a>
        <button
          className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            {!isOpen ? <CloseIcon /> : <MenuIcon />}
          </svg>
        </button>
      </div>
      <div className={"pb-5 px-2 text-center italic hidden md:block"}>
        Engineer, Software Developer, and a Nerd
      </div>
      <nav
        className={
          "md:block px-4 pb-4 md:pb-0 md:overflow-y-auto " +
          (isOpen ? "block" : "hidden")
        }
      >
        {NAVIGATIONS.map((navigation, index) => {
          return (
            <NavbarItem
              key={index}
              name={navigation.name}
              href={navigation.link}
            />
          );
        })}

        <div className={"pt-2 md:pt-10 flex justify-center"}>
          {SOCIALMEDIAS.map((socialMedia, index) => {
            return (
              <div key={index} className={"pr-2"}>
                <div
                  className={
                    "flex justify-center self-center rounded-full border p-2"
                  }
                >
                  <a href={socialMedia.link} rel="noreferrer" target="_blank">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <socialMedia.icon />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
