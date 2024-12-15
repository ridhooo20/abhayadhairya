import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import "./Carousel.css";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import image6 from "../img/image6.jpg";
import image7 from "../img/image7.jpg";
import image8 from "../img/image8.jpg";
import image9 from "../img/image9.jpg";
import image10 from "../img/image10.jpg";
import image11 from "../img/image11.jpg";
import image12 from "../img/image12.jpg";
import image13 from "../img/image13.jpg";
import image14 from "../img/image14.jpg";
import comingSoon from "../img/comingSoon.png";

function ImageCarousel() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image9, image10, image11, image12, image13, image14, comingSoon];

  return (
    <Carousel opts={{ loop: true }} className="w-full max-w-3xl mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="cursor-pointer w-[90%] mx-auto img-carousel h-[80%] object-cover rounded-lg mt-12 "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ImageCarousel;
