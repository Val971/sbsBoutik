import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import { HeroSection } from "../components/section/HeroSection";
import imageSection1 from "../assets/hero-section1.svg";
import { ServicesSection } from "../components/section/ServicesSections";
import { Stats } from "../components/section/Stats";
import { Contact } from "../components/section/Contact";
import Action from "../components/section/Action";
import aboutUsImg from "../assets/aboutUs.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "../components/section/Footer";

AOS.init();

export default function Home() {
  const { t } = useTranslation();
  const links = [
    {
      name: t("home-page.navigation.home"),
      href: "home",
      id: 1,
    },
    {
      name: t("home-page.navigation.services"),
      href: "services",
      id: 2,
    },
    {
      name: t("home-page.navigation.about"),
      href: "about",
      id: 3,
    },
    {
      name: t("home-page.navigation.contact"),
      href: "contact",
      id: 4,
    },
  ];

  return (
    <>
      <HeroSection
        id={"home"}
        title={
          <h1 className="text-3xl sm:text-5xl font-medium mb-8">
            <span className="text-5xl font-bold leading-none sm:text-6xl ">
              {t("home-page.heroSection1.sub")}
            </span>
            {t("home-page.heroSection1.title")}
          </h1>
        }
        ligne1={t("home-page.heroSection1.description")}
        ligne2={t("home-page.heroSection1.description2")}
        imgAlt={"Accueil picture"}
        imgUrl={imageSection1}
        reverse={false}
        children={
          <Link activeClass="active" className="" smooth spy to={"about"}>
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-light-red transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">
                {t("home-page.heroSection1.btnText")}
              </span>
            </button>{" "}
          </Link>
        }
      />

      <ServicesSection />

      <Action />

      <HeroSection
        id={"about"}
        title={
          <h1 className=" text-5xl font-bold  mb-8">
            {t("home-page.aboutSection.title")}
          </h1>
        }
        ligne1={t("home-page.aboutSection.description")}
        ligne2={t("home-page.aboutSection.description2")}
        imgAlt={"Accueil picture"}
        imgUrl={aboutUsImg}
        reverse={true}
        children={
          <Link activeClass="active" className="" smooth spy to={"contact"}>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-light-red text-white dark:bg-violet-400 dark:text-gray-900 hover:bg-dark-red"
            >
              {t("home-page.aboutSection.btnText")}
            </a>
          </Link>
        }
      />
      <Stats />
      <Contact />
      <Footer links={links} />
    </>
  );
}
