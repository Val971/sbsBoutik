import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { UseScrollPosition } from "../../utils/UseScrollPosition";

export default interface NavBarProps {
  links: Links[];
  logo: string;
}

export interface Links {
  name: string;
  href: string;
  id: number;
}

export function NavBar({ logo, links }: NavBarProps) {
  const scrollPosition = UseScrollPosition();
  const [openNav, setOpenNav] = useState(false);
  const { i18n } = useTranslation();
  const toogleLanguage = () => {
    if (i18n.language === "en-US") {
      i18n.changeLanguage("fr-FR");
    } else {
      i18n.changeLanguage("en-US");
    }
  };

  return (
    <div
      className={`sticky top-0 h-16w-full z-40 bg-white border-gray-200  sm:px-4 py-2.5 px-6 dark:bg-gray-900 ${
        scrollPosition > 0 && !openNav ? "drop-shadow-xl" : ""
      } `}
    >
      <div className="container flex flex-wrap  items-center justify-between mx-auto 2xl:max-w-[1320px]">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <a className=" " href="/">
            <img className="w-14" src={logo} alt="logo" />
          </a>
        </div>
        <button
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 z-40 pl-9 transition-all duration-500 ease-in ${
            openNav ? "top-16 " : "top-[-480px]"
          }`}
        >
          {links.length > 0 &&
            links.map((link) => (
              <li
                key={link.name}
                className={`md:ml-8 text-l md:my-0 my-7 cursor-pointer text-gray-800 duration-500`}
              >
                <Link
                  activeClass="active"
                  className="navLink hover:bg-light-red hover:text-white"
                  smooth
                  spy
                  to={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          <li>
            <button
              onClick={() => toogleLanguage()}
              className="md:ml-8 text-l md:my-0 my-7 w-10 h-10 rounded-full border-[0.5px] hover:bg-light-red hover:text-white"
            >
              {i18n.language === "en-US" ? "FR" : "EN"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
