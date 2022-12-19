import React from "react";
import Image from "next/image";
import bannerImg from "../assets/images/banner.png";
import bannerOffaman from "../assets/images/banner_offman.png";
import { Navbar } from "@/layouts/Navbar";
interface Props {}

export const Banner = (props: Props) => {
  return (
    <div className="w-full h-auto">
      <div className="relative top-0 right-0 bottom-0 flex h-auto">
        <Image src={bannerImg} alt="test" className="saturate-100 h-screen"/>
      </div>
      <div 
      className="absolute top-0 right-0 bottom-0 w-full 
      bg-gradient-to-b from-secondary/40 to-gray-800 flex justify-between items-center">
        <div className="flex justify-between items-center container mx-auto">
        <div className="text-white">
         <h6 className="text-2xl mb-8">WELCOME TO WORDOFGOD CHURCH</h6>
          <h1 className="text-white text-6xl font-bold">
            In the evening time, <br/>the light will appear
          </h1>
          <p className="font-thin mt-8">Oh Safe To the Rock That Is Higher Than I
            Far far away, behind the word mountains,<br/> far from the countries Vokalia and Consonantia,
            there live the blind texts.
        </p>
        <button className="bg-primary py-3 px-10 my-5 text-white rounded-full hover:bg-primary/90">Read more</button>
        </div>
        <div>
        <Image src={bannerOffaman} alt="test" className="cover" />
        </div>
        </div>
      </div>
    </div>
  );
};
