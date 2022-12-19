import Image from "next/image";
import React, { useState } from "react";
import TitleSection from "@/components/shared/TitleSection";
import vision from "@/assets/images/vision.png";
import play from "@/assets/icons/play.svg";
type Props = {};

const Vision: React.FC<Props> = (props) => {
  return (
    <div className="h-auto w-full bg-secondary text-white">
      <div className="container px-5 mx-auto py-10">
        <div className="flex flex-col justify-start items-start">
          <TitleSection title="Vision">
            <h2 className="font-bold text-3xl text-white-700 my-1 mb-4 uppercase flex flex-col">
              OUR VISION
            </h2>
          </TitleSection>
        </div>

        <div className="grid md:grid-cols-5 gap-10 mb-8">
          <div className="relative col-span-2">
            <Image src={vision} alt="vision-image" />
            <div 
            className="flex justify-center 
            items-center absolute top-0 
            right-0 left-0 bottom-0 
            cursor:pointer">
              <Image src={play} alt="play-icon" className="cursor-pointer hover:text-orange-400" />
            </div>
          </div>
          <div className="col-span-3 grid grid-rows-3 gap-0 text-white-800">
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <div className="grid grid-cols-2 gap-10">
            <div className="flex justify-evenly flex-col">
              <h6 className="font-bold">PEACE WITH GOD</h6>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            </div>
            <div className="flex justify-evenly flex-col">
              <h6 className="font-bold">PEACE WITH GOD</h6>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
            <div className="flex justify-evenly flex-col">
              <h6 className="font-bold">PEACE WITH GOD</h6>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            </div>
            <div className="flex justify-evenly flex-col">
              <h6 className="font-bold">PEACE WITH GOD</h6>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button 
          className="bg-primary py-3
           px-10 my-5 text-white 
           rounded-full 
           hover:bg-primary/90 mx-3">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vision;
