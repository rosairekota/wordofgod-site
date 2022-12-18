import React from "react";

type Props= {
    title: string,
    subTitle: string
}

const TitleSection:React.FC<Props> = ({ title, subTitle}) => {
  return (
    <>
      <h6 className="text-orange-400/90 uppercase">{ subTitle }</h6>
      <h2 className="font-bold text-3xl text-Stone-400 my-1 mb-4 flex flex-col">
        {title}
        <span>Living and</span> <span>SharingThe Gospel</span>
      </h2>
    </>
  );
};

export default TitleSection;
