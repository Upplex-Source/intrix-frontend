"use client";

import React from "react";
import Image from "next/image";

const SupportCard = ({ title, imageSrc, description }) => {
  return (
    <div className="p-4 rounded-[20px] border border-black w-full">
      <h4 className="text-[16px] text-[#292929] leading-[1.1] font-[Mulish-Light]">
        {title}
      </h4>
      <Image alt={title} className="block object-cover my-1.5" src={imageSrc} width={55} height={55} />
      <div className="text-[14px] md:text-[16px] xl:text-[18px] text-black font-[Montserrat-Regular] leading-[1.2]">
        <p>{description}</p>
      </div>
    </div>
  );
};

const SupportCards = ({ cards }) => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-6 justify-between mb-12 px-4">
      {cards.map((card, index) => (
        <SupportCard
          key={index}
          title={card.title}
          imageSrc={card.imageSrc}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default SupportCards;
