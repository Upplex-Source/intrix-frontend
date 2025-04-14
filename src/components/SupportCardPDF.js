"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SupportCard = ({ title, description, link, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = (
    <>
      <h4 className="text-[16px] text-[#292929] leading-[1.1] font-[Mulish-Light]">
        {title}
      </h4>
      <Image
        alt={title}
        className="block object-cover my-2"
        src={type === "PDF" ? "/support/pdf-file.png" : "/support/tutorial.png"}
        width={45}
        height={45}
      />
      <div className="text-[14px] md:text-[16px] min-[1441px]:text-[18px] text-black font-[Montserrat-Regular] leading-[1.2]">
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </>
  );

  return (
    <>
      {type === "Video" ? (
        <div
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-[20px] border border-black w-full block cursor-pointer"
        >
          {content}
        </div>
      ) : (
        <a
          href={link}
          target="_blank"
          className="p-4 rounded-[20px] border border-black w-full block"
        >
          {content}
        </a>
      )}

      {/* Modal */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-[90%] max-w-[700px] rounded-lg overflow-hidden relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-black text-xl font-bold z-10"
            >
              &times;
            </button>
            <video controls className="w-full h-fit max-h-[90vh] object-cover">
              <source src={link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};


const SupportCardClickable = ({ cards }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-between mb-12">
      {cards.map((card, index) => (
        <SupportCard
          key={index}
          title={card.title}
          description={card.description}
          link={card.filePath}
          type={card.fileTypeLabel}
        />
      ))}
    </div>
  );
};

export default SupportCardClickable;
