import Image from "next/image";
import React, { useState } from "react";
import TitleSection from "@/components/shared/TitleSection";
import a from "@/assets/images/galleries/a.png";
import b from "@/assets/images/galleries/b.png";
import c from "@/assets/images/galleries/c.png";
import d from "@/assets/images/galleries/4.png";
import e from "@/assets/images/galleries/5.png";
import f from "@/assets/images/galleries/6.png";
import g from "@/assets/images/galleries/7.png";
import h from "@/assets/images/galleries/8.png";
import i from "@/assets/images/galleries/9.png";
import j from "@/assets/images/galleries/7.png";
import k from "@/assets/images/galleries/8.png";
import l from "@/assets/images/galleries/9.png";

import { IJournal,IGallery } from "types";
interface Props {}
const initialGalleriesLeft: IGallery[] = [
  {
    id:1,
    imageUrl: a,
  },
  {
    id:2,
    imageUrl: b,
  },
  {
    id:3,
    imageUrl: j,
  },
];
const initialGalleriesCenter: IGallery[] = [
  {
    id:1,
    imageUrl: d,
  },
  {
    id:2,
    imageUrl: e,
  },
  {
    id:3,
    imageUrl: c,
  },
];
const initialGalleriesCenterTo: IGallery[] = [
  {
    id:1,
    imageUrl: g,
  },
  {
    id:2,
    imageUrl: h,
  },
  {
    id:3,
    imageUrl: i,
  },
];
const initialGalleriesRight: IGallery[] = [
  {
    id:1,
    imageUrl: g,
  },
  {
    id:2,
    imageUrl: h,
  },
  {
    id:3,
    imageUrl: i,
  },
];
const Gallery = (props: Props) => {
  const [galleriesLeft, setGalleriesLeft] = useState<IGallery[]>(initialGalleriesLeft);
  const [galleriesCenter, setGalleriesCenter] = useState<IGallery[]>(initialGalleriesCenter);
  const [galleriesCenterTo, setGalleriesCenterTo] = useState<IGallery[]>(initialGalleriesCenterTo);
  const [galleriesRight, setGalleriesRight] = useState<IGallery[]>(initialGalleriesRight);
  
  return (
    <div className="h-auto w-full bg-orange-500/5">
      <div className="py-10">
        <div className="flex justify-center items-center flex-col py-4">
          <TitleSection title="GALLERY">
            <h2 className="font-bold text-3xl text-stone-700 my-1 mb-4 flex flex-col">
            View our gallery
            </h2>
          </TitleSection>
        </div>
        <div className="grid grid-cols-4 gap-2">
        <div className="">
          {galleriesLeft.map((item, index) => (
           <div key={index}>
            <Image src={item.imageUrl} alt="img" className="w-full h-auto mb-3"/>
           </div>
          ))}
        </div>
        <div className="">
          {galleriesCenter.map((item, index) => (
           <div key={index}>
            <Image src={item.imageUrl} alt="img"  className="w-full h-auto mb-3"/>
           </div>
          ))}
        </div>
        <div>
          {galleriesCenterTo.map((item, index) => (
           <div key={index}>
            <Image src={item.imageUrl} alt="img"  className="w-full h-auto mb-3"/>
           </div>
          ))}
        </div>
        <div>
          {galleriesRight.map((item, index) => (
           <div key={index}>
            <Image src={item.imageUrl} alt="img" className="w-full h-auto mb-3"/>
           </div>
          ))}
        </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-primary py-3 px-10 my-5 text-white rounded-full hover:bg-primary/90 mx-3">
            Read more
          </button>
        </div> 
      </div>
    </div>
  );
};

export default Gallery;
