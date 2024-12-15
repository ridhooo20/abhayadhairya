import React, { useEffect, useRef } from "react";
import "./Home.css";
import odd from "../img/img-abhaya.png";

const Home = () => {
  const zoomElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoom-in");
            entry.target.classList.remove("zoom-out");
          } else {
            entry.target.classList.add("zoom-out");
            entry.target.classList.remove("zoom-in");
          }
        });
      },
      { threshold: 0.1 } // Sebagian kecil elemen terlihat akan memicu animasi
    );

    const zoomElement = zoomElementRef.current;
    if (zoomElement) {
      observer.observe(zoomElement);
    }

    return () => {
      if (zoomElement) observer.unobserve(zoomElement);
    };
  }, []);

  return (
    <div className="container w-full pb-40" id="Home">
      <div className="pt-36">
        <h1 className="text-6xl pl-6 font-bold text opacity-30 -z-10">
          About Us
        </h1>
        <h1 className="text-4xl pl-6 font-semibold text2">About Us</h1>

        <div className="flex-wrap">
          <div
            ref={zoomElementRef}
            className="pt-8 self-center relative lg:flex transform transition-transform duration-500"
          >
            <img
              src={odd}
              className="rounded-xl lg:ml-10 ml-5 lg:w-[29rem] w-[90%]  hover:scale-105 hover:rotate-3 duration-75 ease-in-out cursor-pointer"
              alt="Abhaya Dhairya"
            />

            <p className="font-semibold text-xl self-center lg:max-w-[31rem] items-end mx-3 lg:mt-0 mt-6 diskripsi">
              Kami adalah
              <span className="text-lime-600"> Abhaya Dhairya 2024</span>,
              angkatan ODD24 Pramuka <span>Universitas Sriwijaya.</span> Nama
              ini melambangkan keberanian dan keteguhan kami dalam menjelajahi
              pengalaman baru, membangun kebersamaan, dan tumbuh bersama. Dengan
              semangat kepramukaan, ini bukan sekadar angkatan—
              <span className="text-lime-600">ini adalah keluarga.</span>
              <div class="garis bg-white w-80 h-[0.2rem] mt-2 animate-pulse-width1"></div>
              <div class="garis bg-white w-60 h-[0.2rem] mt-6 animate-pulse-width2"></div>
              <div class="garis bg-white w-40 h-[0.2rem] mt-6 animate-pulse-width3"></div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
