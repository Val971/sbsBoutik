import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const nameRef = useRef() as any;
  const emailRef = useRef() as any;
  const messageRef = useRef() as any;

  const handleSubmit = (e: Event) => {
    e.preventDefault();
  };
  return (
    <div
      id="contact"
      className="relative mx-auto w-full max-w-7xl bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-50 py-[150px]     "
    >
      <div className="grid grid-cols-2">
        {/* :MAP CONTAINER */}
        <div className="order-1 col-span-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.9192589071076!2d-61.38559158617264!3d16.224590088785117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c1347ea09ab4b03%3A0xcdbea4d05f792151!2sSainte-Anne%20Bureautique%20services%20(SBS)!5e0!3m2!1sen!2sca!4v1675964474010!5m2!1sen!2sca"
            title="map"
            scrolling="no"
            frameBorder="0"
            width="100%"
            height="300px"
            className=""
            loading="lazy"
          />
        </div>

        {/* :CONTACT FORM CONTAINER */}
        <div
          id="contact"
          className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6"
        >
          <form
            action=""
            className="mx-auto max-w-xl space-y-4"
            onSubmit={() => handleSubmit}
          >
            {/* ::Name Input */}
            <div>
              {/* :::label */}
              <label htmlFor="name" className="sr-only">
                {t("home-page.contactSection.name")}
              </label>
              {/* :::input */}
              <input
                ref={nameRef}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="form-input w-full block shadow-sm rounded border-gray-300 bg-gray-100 text-base placeholder-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
            {/* ::Email Input */}
            <div>
              {/* :::label */}
              <label htmlFor="email" className="sr-only">
                {t("home-page.contactSection.email")}
              </label>
              {/* :::input */}
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="form-input w-full block shadow-sm rounded border-gray-300 bg-gray-100 text-base placeholder-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
            {/* ::Message Input */}
            <div className="col-span-full">
              {/* :::label */}
              <label htmlFor="message" className="sr-only">
                {t("home-page.contactSection.message")}
              </label>
              {/* :::input */}
              <textarea
                ref={messageRef}
                name="message"
                id="message"
                cols={30}
                rows={4}
                placeholder="How can we help?"
                className="form-textarea resize-none w-full shadow-sm rounded border-gray-300 bg-gray-100 placeholder-gray-300 focus:border-green-400 focus:ring-green-400"
              ></textarea>
            </div>
            {/* ::Submit Button */}
            <div>
              <button
                type="submit"
                className="py-2 px-6 rounded bg-green-400 text-base text-white font-semibold uppercase hover:bg-green-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
          <div className="mx-auto max-w-xl flex flex-col space-y-5">
            <h2
              className=" text-3xl font-bold lg:text-4xl md:text-4xl xl:text-4xl text-light-dark"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {t("home-page.contactSection.title")}
            </h2>
            <p
              className="my-28 text-gray-500 text-base sm:text-lg text-light-gray"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {t("home-page.contactSection.description")}
            </p>
            <a
              href="#mail"
              className="inline-flex text-light-dark items-center text-sm text-blue-400 font-semibold hover:text-blue-500"
            >
              sbsboutik@gmail.com
            </a>
            <p className="inline-flex text-light-dark items-center text-sm text-blue-400 font-semibold hover:text-blue-500">
              Tel : +59 0690 88 27 27
            </p>
            <div>
              <p className="leading-6 text-gray-500 text-base sm:text-lg text-light-gray">
                Rue Lethiere, <br /> Résidences les Icaques 97180 <br />{" "}
                Sainte-Anne, Guadeloupe
              </p>
            </div>

            <div className="flex items-center">
              <a
                href="#facebook"
                className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125"
                style={{ backgroundColor: "#4267B2" }}
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
