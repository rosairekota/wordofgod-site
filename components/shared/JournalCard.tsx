import Image from "next/image";
import React from "react";
import { IJournal } from "types";

type Props = IJournal;

const JournalCard:React.FC<Props> = ({imageUrl,journalDate,createdBy,title,description}) => {
  return (
    <div className="bg-white drop-shadow-xl rounded-md cursor-pointer transition-transform hover:scale-105">
      <Image src={imageUrl} alt="test" className="cover rounded-t-md" />
      <div>
        <div className="flex justify-between py-3 mx-3 text-stone-400">
          <span>{journalDate}</span>
          <span>.by Pastor</span>
        </div>
        <p className="pb-10 mx-3 text-stone-900 font-medium">
         {description}
         </p>
        <button className="bg-primary py-3 px-10 my-5 text-white rounded-full hover:bg-primary/90 mx-3">
          Read more
        </button>
      </div>
    </div>
  );
};

export default JournalCard;
