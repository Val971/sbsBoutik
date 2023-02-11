import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Error404 from "./pages/Error404";
import { NavBar } from "./components/nav-bar/NavBar";
import Home from "./pages/Home";
import logo from "./assets/logo.png";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
      <NavBar logo={logo} links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
