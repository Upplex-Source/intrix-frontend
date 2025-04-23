"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const SupportCard = ({ title, imageSrc, description, link }) => {
  const Wrapper = link ? Link : "div";
  return (
    <Wrapper
      {...(link && { href: link })}
      className="p-4 rounded-[20px] border border-black w-full block"
    >
      <h4 className="text-[16px] text-[#292929] leading-[1.1] font-[Mulish-Light]">
        {title}
      </h4>
      <Image alt={title} className="block object-cover my-2" src={imageSrc} width={45} height={45} />
      <div className="text-[14px] md:text-[16px] min-[1441px]:text-[18px] text-black font-[Montserrat-Regular] leading-[1.2]">
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </Wrapper>
  );
};

const SupportCardClickable = ({ cards }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 justify-between mb-12">
      {cards.map((card, index) => (
        <SupportCard
          key={index}
          title={card.title}
          imageSrc={card.imageSrc}
          description={card.description}
          link={card.filePath}
        />
      ))}
    </div>
  );
};

export default SupportCardClickable;
