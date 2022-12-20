import Head from "next/head";
import Image from "next/image";
import React from "react";
import {Banner} from "@/components/Banner";
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
      <Banner/>
      <About/>
      <Journal/>
      <Vision/>
      <Gallery/>
    </div>
  );
}
