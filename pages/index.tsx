import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/layouts/Navbar";
import About from "@/components/About";
import Journal from "@/components/Journal";
import Vision from "@/components/Vision";
import Gallery from "@/components/Gallery";

type Props = {
  imageUrl: ImageUrl;
  imageAlt: string;
  title: string;
  message: string;
};
type ImageUrl = {
  src: string;
};
export default function Home({ imageUrl, imageAlt, title, message }: Props) {
  return (
    <div>
      <Banner />
      <About />
      <Journal />
      <Vision />
      <Gallery />
    <div className="w-full h-44 flex justify-center items-center">
    <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
    For the Lord, the Eternal
        <span className="mx-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
          <span className="relative text-white">does nothing without</span>
        </span>
       ,  revealing his secret to his servants the prophets.
      </blockquote>
    </div>
    </div>
  );
}
