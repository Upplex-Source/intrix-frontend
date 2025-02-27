import Image from "next/image";

export default function InsightSubscribeForm() {
  return (
    <div className="flex flex-col md:flex-row lg:justify-between w-full relative" id="exp_form">
      {/* Left Image Section */}
      <div className="flex items-center justify-center w-full md:w-[60vw] bg-[#4F4644] text-white px-6 lg:px-12 py-16 md:py-8 lg:py-16">
        <div>
            <h3 className="text-2xl lg:text-[40px] xl:text-[2.2vw] leading-[1.1] font-[Mulish-Light] mb-6 text-[#FFF8ED] max-w-full lg:max-w-[40vw] xl:max-w-[45vw]">
            Unlock More Insights Into The Future Of Water Purification And Innovation.
            </h3>
            <form className="">
            {/* Name Input */}
            <input
                type="text"
                placeholder="Type full name here"
                className="w-full mb-4 px-4 py-3 border border-[#646669] rounded-md bg-[#646669] text-white placeholder-[#FFF8ED] font-[Mulish-Bold] outline-0"
            />

            {/* Email Input */}
            <input
                type="email"
                placeholder="Email Address" 
                className="w-full mb-4 px-4 py-3 border border-[#646669] rounded-md bg-[#646669] text-white placeholder-[#FFF8ED] font-[Mulish-Bold] outline-0"
            />

            
                <div className="flex justify-end mt-8 md:mt-0">
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="relative w-fit hover:bg-[#F79932] bg-[#fff] hover:text-[#fff] text-[#272221] font-[Mulish-Light] transition py-3 font-bold rounded-full flex items-center gap-x-4 px-12"
                    >
                        <span>Subscribe</span> 
                        {/* <Image className="absolute right-8" src={'/product/arrow-right-white.png'} alt="arrow" width={25} height={25} /> */}
                    </button>
                </div>
            </form>
        </div>
      </div>
    
      {/* Right Form Section */}
      <Image
        src="/insight/insight_form.png?v=1.1" // Replace with the image URL or leave empty for now
        alt="Intrix Experience Centre"
        className="w-full md:w-[40vw] h-[260px] md:h-full object-cover object-center block bg-[#4F4644] relative md:absolute right-0"
        width={500} // Adjust width and height
        height={650} // For placeholder purposes
    />

    </div>
  );
}
