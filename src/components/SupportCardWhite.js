"use client";

import React from "react";
import Image from "next/image";

const SupportCardWhite = ({ title, imageSrc, description }) => {
  return (
    <div className="p-4 rounded-[20px] border border-[#fff] w-full">
      <h4 className="text-[16px] text-[#fff] leading-[1.1] font-[Mulish-Light]">
        {title}
      </h4>
      <Image alt={title} className="block object-cover my-1.5" src={imageSrc} width={45} height={45} />
      <div className="text-[14px] md:text-[16px] xl:text-[18px] text-[#fff] font-[Montserrat-Regular] leading-[1.2]">
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
};

const SupportCardsWhite = ({ cards }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-between mb-12">
      {cards.map((card, index) => (
        <SupportCardWhite
          key={index}
          title={card.title}
          imageSrc={card.imageSrc}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default SupportCardsWhite;
