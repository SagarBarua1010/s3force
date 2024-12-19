import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/app/assets";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import { navigation } from "@/constants";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 text-white py-8">
      <Container className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
        <div className="flex flex-col gap-y-5">
          <Link href={"/"} className="flex">
            <Image src={logo} alt="logo" className="w-14"></Image>
            <p className="items-center font-bold text-[20px] md:text-[25px] mt-2">
              ..S3Force
            </p>
          </Link>
          <h1 className=" font-bold ">
            Our team offers CRM implementation, optimization, and custom
            solutions to drive innovation and user adoption.
          </h1>
        </div>
        <div className="flex flex-col gap-1 pt-3  ">
          <h2 className="text-[20px] md:text-[25px] font-bold">Information</h2>
          {navigation?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="flex items-center gap-x-2 hover:text-violet-400 duration-200 font-medium "
            >
              <GoDotFill size={10}></GoDotFill>
              {item?.title}
            </Link>
          ))}
        </div>
        <div className="font-bold -mt-3">
          <h2 className="text-[20px] md:text-[25px]">US OFFICE</h2>
          <p className="text-base flex  gap-x-3 ">
            <GrLocation className="mt-1" />
            CLARENCE DR STE 250 Frisco, TX 75033
          </p>
          <p className="text-base flex items-center gap-x-3 ">
            <IoMdCall />
            +1 (214) 937-9142
          </p>
          <p className="text-base flex items-center gap-x-3 ">
            <BsEnvelopeAt />
            info@S3Force.com
          </p>
        </div>
        <div className="font-bold mt-1">
          <h2 className="text-[20px] md:text-[25px]">BANGLADESH OFFICE</h2>
          <p className="text-base flex  gap-x-3 ">
            <GrLocation className="mt-1" /> Block L Bashundhara R/A, DHAKA 1229
          </p>
          <p className="text-base flex items-center gap-x-3 ">
            <IoMdCall />
            +880 1825 266 105
          </p>
          <p className="text-base flex items-center gap-x-3 ">
            <BsEnvelopeAt />
            infobd@s3force.com
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
