import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { LiaUser } from "react-icons/lia";
import { navigation } from "@/constants";
import MobileNavigation from "./MobileNavigation";
import { logo } from "@/app/assets";

const TopHerder = () => {
  return (
    <div className="bg-gradient-to-r from-violet-400 to-purple-300 ">
      <Container className="flex items-center gap-4 md:gap-4 lg:gap-20 justify-between py-4">
        <div className="flex items-center ">
          <Link href={"/"} className="flex">
            <Image src={logo} alt="logo" className="w-14"></Image>
            <p className="items-center font-bold text-[20px] md:text-[25px]">
              ..S3Force
            </p>
          </Link>
        </div>
        <div>
          <div className=" hidden md:block text-xs md:text-sm font-medium  gap-5 ">
            {navigation?.map((item) => (
              <Link
                className="hover:bg-[#9333ea] hover:text-black rounded-lg p-2"
                key={item?.title}
                href={item?.href}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link href={"/signin"} className="flex items-center gap-2 text-sm">
            <div className="border-2 border-gray-700 p-1.5 rounded-full text-xl">
              <LiaUser></LiaUser>
            </div>
            <div>
              <p>Hello, Guests</p>
              <p>Login / register</p>
            </div>
          </Link>
        </div>
        <MobileNavigation></MobileNavigation>
      </Container>
    </div>
  );
};

export default TopHerder;
