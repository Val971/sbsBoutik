import React from "react";

export default interface ServiceCardProps {
  icon: string;
  iconAlt: string;
  duration: string;
  title: string;
  description: string;
}

export const ServiceCard = ({
  icon,
  iconAlt,
  duration,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div
      className="flex flex-col items-center p-8 rounded-md hover:shadow-card cursor-pointer transition duration-700 ease-in-out "
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <img
        className=" dark:text-violet-400 self-start mb-10"
        src={icon}
        alt={iconAlt}
      />
      <h3 className="mb-3 pb-3 text-3xl font-semibold self-start">{title}</h3>
      <div className="space-y-1 leading-tight text-base sm:text-lg text-light-gray">
        <p>{description}</p>
      </div>
    </div>
  );
};
