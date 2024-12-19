"use client";

import React from "react";

const ComparisonTable = () => {
  return (
    <div className="px-4 py-8">
      <h3 className="text-[40px] font-bold text-[#343637] text-center">Which One Is The One Tap For You?</h3>
      <div className="overflow-x-auto mt-6">
        <div className="grid grid-cols-5">
          <div className=""></div>
          <div className="border-l border-[#421908] text-[20px] text-[#343637] text-center font-bold py-2">INTRIX One Tap 5-in-1</div>
          <div className="text-[20px] text-[#343637] text-center font-bold py-2">INTRIX One Tap 4-in-1</div>
          <div className="text-[20px] text-[#343637] text-center font-bold py-2">INTRIX One Tap 2-in-1</div>
          <div className="text-[20px] text-[#343637] text-center font-bold py-2">INTRIX One Tap Lite</div>
        </div>
        <div className="grid grid-cols-5">
          <div className="font-[Montserrat-Regular] text-[14px] text-[#272221] font-bold">DISPLAY</div>
          <div className="border-l border-[#421908] text-[20px] text-[#343637] text-center font-bold py-2 col-span-3 bg-[#D9CFB3]">LED</div>
          <div className="text-[20px] text-[#343637] text-center font-bold py-2 bg-[#BCA77B]">BUTTON</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
