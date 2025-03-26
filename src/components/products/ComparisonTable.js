"use client";

import React from "react";

const ComparisonTable = () => {
  return (
    <>
      <h3 className="px-4 text-[24px] md:text-[30px] min-[1441px]:text-[40px] font-bold text-[#343637] text-center">Which One Is The One Tap For You?</h3>
      <div className="overflow-x-auto ">
        <div className="mt-6 min-w-[1200px] w-full pl-4">
          <div className="grid grid-cols-5">
            <div className=""></div>
            <div className="border-l border-[#421908] text-[18px] min-[1441px]:text-[20px] text-[#343637] text-center font-[Mulish-Black] font-bold pt-2 pb-6">INTRIX One Tap 5-in-1</div>
            <div className="text-[18px] min-[1441px]:text-[20px] text-[#343637] text-center font-[Mulish-Black] font-bold pt-2 pb-6">INTRIX One Tap 4-in-1</div>
            <div className="text-[18px] min-[1441px]:text-[20px] text-[#343637] text-center font-[Mulish-Black] font-bold pt-2 pb-6">INTRIX One Tap 2-in-1</div>
            <div className="text-[18px] min-[1441px]:text-[20px] text-[#343637] text-center font-[Mulish-Black] font-bold pt-2 pb-6">INTRIX One Tap Lite</div>
          </div>
          <div className="grid grid-cols-5">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">DISPLAY</div>
            {/* <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 col-span-3 bg-[#FCDDAC] flex items-center justify-center">LED</div> */}
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-2 bg-[#D9CFB3] flex items-center justify-center">DIGITAL</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">DIGITAL</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#D9CFB3] flex items-center justify-center">DIGITAL</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">BUTTON</div>
          </div>
          <div className="grid grid-cols-5 border-t border-[#421908]">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">POWER RATING</div>
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">0.19kW (Chilled) 2.0kW (Hot)</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">2.0kW</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#D9CFB3] flex items-center justify-center">2.0kW</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">1.3kW</div>
          </div>
          <div className="grid grid-cols-5 border-t border-[#421908]">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">CHILLED WATER TEMPERATURE</div>
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">As low as 3°C (Eco Mode at 6°C)</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">-</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#D9CFB3] flex items-center justify-center">-</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">-</div>
          </div>
          <div className="grid grid-cols-5 border-t border-[#421908]">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">HOT WATER TEMPERATURE</div>
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">60°C to 98°C</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">60°C to 98°C</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#D9CFB3] flex items-center justify-center">60°C to 98°C</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">98°C</div>
          </div>
          <div className="grid grid-cols-5 border-t border-[#421908]">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">CHILLED WATER OUTPUT / HOUR (167ml/cup)</div>
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">38 Cups</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">-</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#D9CFB3] flex items-center justify-center">-</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">-</div>
          </div>
          <div className="grid grid-cols-5 border-t border-[#421908]">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">HOT WATER OUTPUT / HOUR (167ml/cup) </div>
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">130 Cups, up to 98°C</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-4 bg-[#F1EEE3] flex items-center justify-center">130 Cups, up to 98°C</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">130 Cups, up to 98°C</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-4 bg-[#F1EEE3] flex items-center justify-center">130 Cups, up to 98°C</div>
          </div>
          <div className="grid grid-cols-5 border-t border-[#421908]">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">ECO SMART TIMER CONTROL</div>
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">YES</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">NO</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#D9CFB3] flex items-center justify-center">NO</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">NO</div>
          </div>
          <div className="grid grid-cols-5 border-t border-[#421908]">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">COLOUR SELECTION</div>
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">Chrome / Matte Black</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">Chrome / Matte Black / Satin Gold / Gunmetal Grey</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#D9CFB3] flex items-center justify-center">Chrome / Matte Black</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-2 bg-[#F1EEE3] flex items-center justify-center">Chrome</div>
          </div>
          <div className="grid grid-cols-5 border-t border-[#421908]">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">HEATING ELEMENT MATERIAL</div>
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">TITANIUM</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-4 bg-[#F1EEE3] flex items-center justify-center">TITANIUM</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">TITANIUM</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-4 bg-[#F1EEE3] flex items-center justify-center">TITANIUM</div>
          </div>
          <div className="grid grid-cols-5 border-t border-[#421908]">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">FILTER CARTRIDGE</div>
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">INTRIX All-in-One Filter (Made in Korea)</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-4 bg-[#F1EEE3] flex items-center justify-center">INTRIX All-in-One Filter (Made in Korea)</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">INTRIX All-in-One Filter (Made in Korea)</div>
            <div className="font-[Montserrat-Regular] px-2 text-[14px] text-[#343637] text-center font-bold py-4 bg-[#F1EEE3] flex items-center justify-center">INTRIX All-in-One Filter (Made in Korea)</div>
          </div>
          <div className="grid grid-cols-5 border-t border-b border-[#421908]">
            <div className="font-[Montserrat-Bold] text-[14px] text-[#272221] font-bold flex items-center">FILTRATION METHOD</div>
            <div className="font-[Montserrat-Regular] px-2 border-l border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">Sediment + Activated Carbon Block +Nanofiltration Membrane (0.01um)</div>
            <div className="font-[Montserrat-Regular] px-2 border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#F1EEE3] flex items-center justify-center">Sediment + Activated Carbon Block +Nanofiltration Membrane (0.01um)</div>
            <div className="font-[Montserrat-Regular] px-2 border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#D9CFB3] flex items-center justify-center">Sediment + Activated Carbon Block +Nanofiltration Membrane (0.01um)</div>
            <div className="font-[Montserrat-Regular] px-2 border-[#421908] text-[14px] text-[#343637] text-center font-bold py-4 bg-[#F1EEE3] flex items-center justify-center">Sediment + Activated Carbon Block +Nanofiltration Membrane (0.01um)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonTable;
