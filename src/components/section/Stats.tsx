import React from "react";
import samsung from "../../assets/samsung-logo.png";
import microsoft from "../../assets/microsoft-logo.png";
import hpLogo from "../../assets/hp-logo.png";
import Nickel from "../../assets/Nickel-logo.png";
import canonLogo from "../../assets/canon-logo.png";

export const Stats = () => {
  return (
    <section className="dark:bg-gray-800 py-[150px] text-light-dark dark:text-gray-100 mx-auto">
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <div className="grid gap-20 place-items-center grid-cols-1 sm:gap-0 sm:grid-cols-5">
          <img
            className="grayscale h-14"
            src={Nickel}
            alt="nickel logo"
          />
          <img
            className="grayscale h-14"
            src={samsung}
            alt="samsung logo"
          />
          <img
            className="grayscale h-14"
            src={hpLogo}
            alt="hp logo"
          />
          <img
            className="grayscale h-14"
            src={canonLogo}
            alt="canon logo"
          />
          <img
            className="grayscale h-14"
            src={microsoft}
            alt="microsoft logo"
          />
        </div>
      </div>
    </section>
  );
};
