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
        <div className="flex justify-center items-center">
          <TitleSection subTitle="Journal" title={""} />
        </div>

        <div className="grid md:grid-cols-3 2xl:grid-cols-4 gap-4">
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
