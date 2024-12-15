import React from "react";
import "./album.css";
import Carousel from '../Carousel'
const Album = () => {
  return (
    <section className="album min-h[50%] bg-slate-200 pt-12" id="album">
      <div className="bungkus">
        <div className="judul flex justify-center w-full">
          <h1 className="text-4xl pb-4 font-bold text-black ">Album Us</h1>
        </div>
        <div className="background">
        <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Album;
