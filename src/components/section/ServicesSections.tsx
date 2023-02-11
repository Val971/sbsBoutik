import React from "react";
import { useTranslation } from "react-i18next";
import printer from "../../assets/printer.png";
import pencil from "../../assets/pencil.png";
import internet from "../../assets/internet.png";
import laptop from "../../assets/laptop.png";
import printerColor from "../../assets/printer-color.png";
import { ServiceCard } from "../ServiceCard";

export const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="services"
      className="m-auto text-[#263238] py-[150px] dark:bg-gray-800 2xl:max-w-[1320px] dark:text-gray-100"
    >
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <p
          className="dark:text-gray-400 text-[25px] font-semibold mb-[20px] text-light-red"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {t("home-page.servicesSection.sub")}
        </p>
        <h2
          className="text-5xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          {t("home-page.servicesSection.title")}
        </h2>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<ServiceCard icon={printer}iconAlt={"printer image"}duration={"2000"}title={t("home-page.servicesSection.card1.title")}description={t("home-page.servicesSection.card1.description")}/>

		<ServiceCard icon={pencil}iconAlt={"pencil image"}duration={"1500"}title={t("home-page.servicesSection.card2.title")}description={t("home-page.servicesSection.card2.description")}/>
     
	 
		<ServiceCard icon={internet}iconAlt={"internet image"}duration={"1000"}title={t("home-page.servicesSection.card2.title")}description={t("home-page.servicesSection.card2.description")}/>

		<ServiceCard icon={printerColor}iconAlt={"laptop image"}duration={"2000"}title={t("home-page.servicesSection.card4.title")}description={t("home-page.servicesSection.card4.description")}/>


		<ServiceCard icon={laptop}iconAlt={"laptop image"}duration={"1500"}title={t("home-page.servicesSection.card5.title")}description={t("home-page.servicesSection.card5.description")}/>
      </div>
    </section>
  );
};
