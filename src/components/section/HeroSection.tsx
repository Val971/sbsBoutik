import React from "react";

export default interface HeroSectionProps {
  title: string | React.HTMLProps<HTMLButtonElement>;
  id: string;
  ligne1: string;
  ligne2: string;
  reverse: boolean;
  imgAlt: string;
  imgUrl: string;
  children: string | JSX.Element | JSX.Element[];
}

export const HeroSection = ({
  title,
  imgUrl,
  imgAlt,
  reverse,
  id,
  ligne1,
  ligne2,
  children,
}: HeroSectionProps) => {
  return (
    <section
      id={id}
      className="dark:bg-gray-800 m-auto text-light-dark dark:text-gray-100 2xl:max-w-[1320px]"
    >
      <div
        className={`container flex flex-col justify-center p-6 mx-auto sm:py-12  lg:py-24   lg:justify-between ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div
          className="flex flex-col lg:w-2/4 p-6 text-center rounded-sm lg:text-left justify-between"
          data-aos="fade-up"
          data-aos-duration="2100"
        >
          <>
            {title}
            <p
              className="mb-4 text-base sm:text-lg sm:mb-6 text-light-gray"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {ligne1}
            </p>
            <p
              className="my-4 text-base sm:text-lg sm:mb-6 text-light-gray"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              {ligne2}
            </p>
          </>
          <div
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {children}
          </div>
        </div>
        <div
          className="flex items-center justify-center mt-8  h-72 sm:h-80 lg:mt-0 lg:h-[28rem] xl:h-112 2xl:h-128"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src={imgUrl}
            alt={imgAlt}
            className=" h-72 sm:h-80 lg:h-[28rem] xl:h-112 2xl:h-128 "
          />
        </div>
      </div>
    </section>
  );
};
