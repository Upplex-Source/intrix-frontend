"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const InsightTrendingCard = ({ title, imageSrc, description, url, min, tag, slug }) => {
    return (
        <Link href={`/insights/${slug}`} className="grid grid-cols-3 gap-4 w-full bg-white xl:min-h-[calc(34%-1.35em)]">
            <Image alt={title} className="w-full h-full block col-span-1 object-cover" src={imageSrc} width={400} height={200} />
            <div className="flex flex-col justify-between py-2 sm:py-4 md:py-6 pr-4 col-span-2">
                <div className="">
                    <div className="w-full flex gap-1">
                        {tag.map((item, index) => (
                            <div
                                key={index}
                                className={`w-fit px-2 py-[2px] md:py-1 rounded-lg ${
                                    index === 1 ? "bg-[#374697]" : "bg-[#3E7835]"
                                } text-white uppercase text-[9px] mb-1 md:mb-2`}
                            >
                                {item.tag}
                            </div>
                        ))}
                    </div>
                    <p className="text-[#292929] font-[Mulish-Light] text-[10px]">{min} MINUTES READ</p>
                    <h4 className="text-[14px] md:text-[16px] text-[#5E5C5C] leading-[1.1] md:mb-2 mt-2">{title}</h4>
                    <div className="text-[12px] text-[#5E5C5C] font-[Montserrat-Regular] leading-[1.2]">
                        <p className="line-clamp-2 md:line-clamp-3" dangerouslySetInnerHTML={{ __html: description }}></p>
                    </div>
                    
                </div>
                <div className="flex items-center justify-between pt-2 md:pt-4">
                    <div className="text-[10px] md:text-[15px] text-[#292929] leading-[1.2]">Read more</div>
                    <div className="w-[18px] h-[18px] text-[10px] md:text-[12px] md:w-[24px] md:h-[24px] flex items-center justify-center rounded-full bg-[#292929]">
                        <FontAwesomeIcon icon={faChevronRight} color="#fff" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

const InsightTrendingCards = ({ cards }) => {
    return (
        <>
            {cards.map((card, index) => (
                <InsightTrendingCard
                    key={index}
                    title={card.main_title}
                    imageSrc={card.image}
                    description={card.meta_desc}
                    url={card.image}
                    min={card.min_of_read}
                    tag={card.tag}
                    slug={card.slug}
                />
            ))}
        </>
    );
};

export default InsightTrendingCards;
