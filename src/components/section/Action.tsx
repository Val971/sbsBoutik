import React from "react";
import { useTranslation } from "react-i18next";
import action from "../../assets/furnitures2.png";

export default function Action() {
  const { t } = useTranslation();
  return (
    <section
      className={` py-6 grid grid-cols-1 lg:grid-cols-2  md:grid-cols-2 dark:bg-violet-400 dark:text-gray-900 my-[150px]`}
    >
      <div className="container text-white bg-light-blue  lg:p-36 p-8 md:p-14 xl:p-36 2xl:p-50 h-96 text-left flex flex-col justify-center ">
        <h2
          className={`pb-8 text-4xl font-bold`}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {t("home-page.actionSection1.description")}
        </h2>
        <h2
          className={`pt-2 pb-8 text-lg`}
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          {t("home-page.actionSection1.description2")}
        </h2>
      </div>
      <div className="hover:opacity-20 transition duration-300 ease-in-out bg-purple-700">
        <img src={action} alt="" className="w-full object-cover h-96" />
      </div>
    </section>
  );
}
