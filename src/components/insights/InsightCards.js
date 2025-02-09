"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const InsightCard = ({ title, imageSrc, description, url, min, tag }) => {
  return (
    <div className="flex flex-col w-full bg-white">
      <Image alt={title} className="w-full mb-4" src={imageSrc} width={400} height={400} />
      <div className="px-6">
        <div className="w-fit px-2 py-1 rounded-lg bg-[#3E7835] text-white uppercase text-[9px] mb-2">Blogs</div>
        <p className="text-[#292929] text-[10px]">{min} MINUTES READ</p>
        <h4 className="text-[16px] text-[#5E5C5C] leading-[1.1] font-[Mulish-Light] mb-2 mt-2">
          {title}
        </h4>
        <div className="text-[12px] text-[#5E5C5C] font-[Montserrat-Regular] leading-[1.2]">
          <p className="line-clamp-3" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="flex items-center justify-between py-4">
          <Link href={"#"} className="text-[15px] text-[#292929]">Read more</Link>
          <Link href={"#"} className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#292929]"><FontAwesomeIcon icon={faChevronRight} color="#fff" /></Link>
        </div>
      </div>
    </div>
  );
};

const InsightCards = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <InsightCard
          key={index}
          title={card.title}
          imageSrc={card.imageSrc}
          description={card.description}
          url={card.url}
          min={card.min}
          tag={card.tag}
        />
      ))}
    </>
  );
};

export default InsightCards;
