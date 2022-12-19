import Image from "next/image";
import React, { useState } from "react";
import TitleSection from "@/components/shared/TitleSection";
import journalCard from "@/assets/images/journalCard.png";
import JournalCard from "@/components/shared/JournalCard";
import { IJournal } from "types";
interface Props {}

const Vision = (props: Props) => {
  return (
    <div className="h-96 w-full bg-secondary text-white">
      <div className="container px-5 mx-auto py-10">
        <div className="flex justify-center items-center">
        <TitleSection title="Vision">
            <h2 className="font-bold text-3xl text-stone-700 my-1 mb-4 flex flex-col">
              <span>Living and</span> <span>SharingThe Gospel</span>
            </h2>
          </TitleSection>
        </div>

        <div className="grid md:grid-cols-3 2xl:grid-cols-4 gap-4">
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-secondary py-3 px-10 my-5 text-white rounded-full hover:bg-primary/90 mx-3">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vision;
