import Image from "next/image";

const PrecisionCooling = () => {
    return (
        <div className="w-full mx-auto relative bg-[#edf5f9] md:bg-transparent md:block flex flex-col-reverse">
            <Image
                src="/explore/Artic3_desktop.webp" // Replace with the image URL or leave empty for now
                alt="Intrix Experience Centre"
                className="w-full h-full object-cover object-center sm:object-top hidden md:block min-h-[700px] min-[375px]:min-h-[650px] sm:min-h-[700px]"
                width={1444} // Adjust width and height
                height={887} // For placeholder purposes
            />
            <Image
                src="/explore/Artic3_mobile.webp" // Replace with the image URL or leave empty for now
                alt="Intrix Experience Centre"
                className="w-full h-full block md:hidden max-h-[1000px] min-[550px]:max-h-[1200px] md:max-h-[1400px] object-cover object-bottom"
                width={1444} // Adjust width and height
                height={887} // For placeholder purposes
            />
            <div className="w-full absolute inset-y-0 left-0">
                <div className="min-[1600px]:container min-[1600px]:mx-auto flex flex-col py-6 px-4 lg:py-12 min-[1280px]:px-24 md:justify-center leading-[1.2] text-white w-full md:h-full md:w-1/2 lg:w-2/3">
                    <p className="text-[#343637] text-[20px] min-[340px]:text-[24px] sm:text-[30px] sm:text-left text-center font-bold mb-4 max-w-[300px] sm:max-w-[550px] mx-auto sm:mx-0">The Future of Precision Cooling: Arctic </p>
                    <p className="text-[#343637] text-[0.8em] min-[340px]:text-[1em] mb-4 lg:mb-6 xl:mb-12 md:max-w-[600px] sm:text-left text-center">
                    Upgrading to the 5-in-1 Arctic Command Centre means unlocking effortless hydration. With its powerful cooling system and high-capacity design, you get perfectly chilled water without delay—pure refreshment, anytime you need it.
                    </p>
                    <div className="flex flex-col sm:px-6 space-y-6 md:max-w-[550px]">
                        <div className="flex w-full items-center gap-x-2 min-[425px]:gap-x-6">
                            <Image className="px-2 min-[340px]:px-0" src={"/explore/ice_cold.png"} alt="" width={60} height={60} />
                            <div className="flex flex-col w-4/5 text-[#343637]">
                                <p className="text-[0.8em] min-[340px]:text-[1em] xl:text-[1.3em] font-bold mb-2">Ice-Cold Hydration, On Demand</p>
                                <p className="text-[0.8em] xl:text-[1em] font-[Montserrat-Regular]">
                                Engineered for instant refreshment, delivering <b>chilled water as low as 3°C</b>—perfect for peak performance and rapid cooling. Activate Eco Mode at 6°C for energy-efficient operation without compromising freshness.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-x-2 min-[425px]:gap-x-6">
                            <Image className="px-2 min-[340px]:pr-1" src={"/explore/chilling.png"} alt="" width={60} height={60} />
                            <div className="flex flex-col w-4/5 text-[#343637]">
                                <p className="text-[0.8em] min-[340px]:text-[1em] xl:text-[1.3em] font-bold mb-2">High-Capacity Chilling Power</p>
                                <p className="text-[0.8em] xl:text-[1em] font-[Montserrat-Regular]">
                                Built for continuous cooling, <b>the 1.2L chilled water tank ensures a steady supply</b> of crisp, refreshing water—ready whenever you are.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-x-2 min-[425px]:gap-x-6">
                            <Image className="px-3 min-[340px]:px-1" src={"/explore/maximum.png"} alt="" width={60} height={60} />
                            <div className="flex flex-col w-4/5 text-[#343637]">
                                <p className="text-[0.8em] min-[340px]:text-[1em] xl:text-[1.3em] font-bold mb-2">Maximum Output, Minimal Wait</p>
                                <p className="text-[0.8em] xl:text-[1em] font-[Montserrat-Regular]">
                                Designed for high-demand environments, the Arctic Command Centre delivers <b>38 cups per hour (167ml per cup)</b>—powering hydration at scale without pause.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrecisionCooling;
