import React from "react";
import logounsri from "../img/logounsri.png";
import oddDingin from "../img/abhaya-img.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="bgg px-10 pt-64 flex-wrap lg:flex lg:h-96">
      <div className="text lg:w-1/2">
        <h1 className="lg:text-5xl text-3xl font-bold">
          <span className="text-lime-800">Hello </span>World,
        </h1>
        <h1 className="lg:text-2xl thisourweb text-lg font-semibold">
          this is our website{" "}
          <span className="text-lime-800">"abhaya dhairya 2024"</span>
        </h1>
        <h1 className="lg:text-lg text-sm font-semibold max-w-2xl">
          Abhaya Dhairya 2024 adalah website angkatan ODD24 Pramuka Universitas
          Sriwijaya yang mencerminkan semangat berani dan tangguh. Dibuat untuk
          menginspirasi, menyatukan, dan menjadi wadah kreatif bagi anggota dan
          generasi muda lainnya.
        </h1>
        <div className="flex gap-4 mt-2">
          <button className="btn flex gap-4">
            <a
              className="group relative inline-flex items-center overflow-hidden rounded-md bg-lime-900 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
              href="#album"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="size-3 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                Let's explore the world
              </span>
            </a>

            <a
              className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-white focus:outline-none focus:ring active:text-white"
              href="https://www.instagram.com/abhaya_dhairya.24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                {" "}
                Let's follow our Instagram!{" "}
              </span>
            </a>
          </button>
        </div>
      </div>
      <div className="gambar lg:mt-[-0.5rem] mt-3 lg:ml-0 lg:w-1/2">
        <div className="relative">
          <img
            src={oddDingin}
            className="image-hero rounded-lg lg:ml-14 lg:w-[75%] w-[90%] lg:mt-[-2rem] mt-6 drop-shadow-xl"
            alt="Abhaya Dhairya"
          />
          <div className="pb-80">
            <div className="rectangle bg-lime-900 rounded-tr-3xl lg:w-[400px] lg:h-[300px] -z-3 lg:inline hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
