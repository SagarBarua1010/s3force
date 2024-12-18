import React from "react";
import Container from "./Container";
import Image from "next/image";
import { banner } from "@/constants";
import bannerImage from "@/app/assets/bannerImageOne.png";
import Button from "./Button";
import { GoArrowRight } from "react-icons/go";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-purple-900 py-2 text-white">
      <Container className="flex flex-col gap-5 md:flex-row items-center justify-between">
        <div>
          <h2 className="text-5xl font-bold max-w-[500px]">{banner?.title}</h2>
          <p className="text-lg font-bold py-4">{banner?.textTwo}</p>

          <Button
            href={banner?.buttonLink}
            className="flex items-center gap-1 bg-white text-black rounded-md
        w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-themeWhite py-3 border
        border-transparent hover:border-white/40 duration-200"
          >
            Contact <GoArrowRight className="text-lg"></GoArrowRight>
          </Button>
        </div>
        <Image src={bannerImage} alt="bannerImageOne"></Image>
      </Container>
    </div>
  );
};

export default Banner;
