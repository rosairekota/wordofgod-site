import Image from "next/image";
import React, { useState } from "react";
import TitleSection from "@/components/shared/TitleSection";
import journalCard from "@/assets/images/journalCard.png";
import JournalCard from "@/components/shared/JournalCard";
import { IJournal } from "types";
interface Props {}
const initialJournals: IJournal[] = [
  {
    imageUrl: journalCard,
    journalDate: "15 Jan 1965",
    createdBy: ".by Pastor",
    title: "My journal title",
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia`,
  },
  {
    imageUrl: journalCard,
    journalDate: "15 Jan 1965",
    createdBy: ".by Pastor",
    title: "My journal title",
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia`,
  },
  {
    imageUrl: journalCard,
    journalDate: "15 Jan 1965",
    createdBy: ".by Pastor",
    title: "My journal title",
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia`,
  },
  {
    imageUrl: journalCard,
    journalDate: "15 Jan 1965",
    createdBy: ".by Pastor",
    title: "My journal title",
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia`,
  },
];
const Journal = (props: Props) => {
  const [journals, setJournals] = useState<IJournal[]>(initialJournals);
  return (
    <div className="h-auto w-full bg-orange-500/5">
      <div className="container px-5 mx-auto py-10">
        <div className="flex justify-center items-center flex-col py-4">
          <TitleSection title="Journal">
            <h2 className="font-bold text-3xl text-stone-700 my-1 mb-4 flex flex-col">
           CASTLE STONE - BAPTISM OF THE HOLY SPIRIT
            </h2>
          </TitleSection>
        </div>

        <div className="grid md:grid-cols-3 2xl:grid-cols-4 gap-8">
          {initialJournals.map((item, key) => (
            <JournalCard
              key={key}
              imageUrl={item.imageUrl}
              journalDate={item.journalDate}
              title={item.title}
              createdBy={item.createdBy}
              description={item.description}
            />
          ))}
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

export default Journal;
