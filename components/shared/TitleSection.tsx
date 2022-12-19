import Image from "next/image";
import React, { PropsWithChildren } from "react";
import plusIcon from "@/assets/icons/plus.svg"

type Props= PropsWithChildren<{
    title: string,
}>

const TitleSection:React.FC<Props> = ({ title, children }) => {
  return (
    <>
     <div className="relative flex flex-row my-4">
      <h6 className="text-orange-400/90 uppercase">{ title }</h6>
      <Image src={plusIcon} alt="plus-icon" className="absolute -top-8 bottom-10 left-12"/>
     </div>
      { children}
    </>
  );
};

export default TitleSection;
