import React from "react";
import { Link } from "react-scroll";

export default interface FooterProps {
  links: Links[];
}

export interface Links {
  name: string;
  href: string;
  id: number;
}
export const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="bg-dark-blue text-white dark:bg-gray-800 dark:text-gray-50 ">
      <div className="container flex flex-col p-4 md:p-8 lg:flex-row divide-gray-400 mx-auto 2xl:max-w-[1320px]">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          {links.length > 0 &&
            links.map((link) => {
              return (
                <li key={link.id} className="cursor-pointer">
                  {" "}
                  <Link className="" smooth spy to={link.href}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-4 h-4"
              >
                <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
