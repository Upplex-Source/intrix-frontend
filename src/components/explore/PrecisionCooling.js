import Image from "next/image";

const PrecisionCooling = () => {
    return (
        <div className="w-full mx-auto relative">
            <Image
                src="/explore/artic.png" // Replace with the image URL or leave empty for now
                alt="Intrix Experience Centre"
                className="w-full h-full object-cover object-center sm:object-top block min-h-[700px] min-[375px]:min-h-[650px] sm:min-h-[700px]"
                width={2888} // Adjust width and height
                height={1774} // For placeholder purposes
            />
            <div className="w-full absolute inset-y-0 left-0 w-full h-full bg-gradient-to-r from-[#EEF6FB] to-transparent">
                <div className="w-full min-[1600px]:container min-[1600px]:mx-auto flex flex-col py-6 px-4 lg:py-12 lg:px-24 justify-center leading-[1.2] text-white w-2/3 h-full">
                    <p className="text-[#343637] text-[24px] sm:text-[30px] font-bold mb-4 max-w-[550px]">The Future of Precision Cooling: Arctic </p>
                    <p className="text-[#343637] text-[1em] mb-4 lg:mb-6 xl:mb-12 max-w-[600px]">
                    Upgrading to the 5-in-1 Arctic Command Centre means unlocking effortless hydration. With its powerful cooling system and high-capacity design, you get perfectly chilled water without delay—pure refreshment, anytime you need it.
                    </p>
                    <div className="flex flex-col sm:px-6 space-y-6 max-w-[550px]">
                        <div className="flex w-full items-center gap-x-2 min-[425px]:gap-x-6">
                            <Image className="" src={"/explore/ice_cold.png"} alt="" width={60} height={60} />
                            <div className="flex flex-col w-4/5 text-[#343637]">
                                <p className="text-[1em] xl:text-[1.3em] font-bold mb-2">Ice-Cold Hydration, On Demand</p>
                                <p className="text-[0.8em] xl:text-[1em] font-[Montserrat-Regular]">
                                Engineered for instant refreshment, delivering <b>chilled water as low as 3°C</b>—perfect for peak performance and rapid cooling. Activate Eco Mode at 6°C for energy-efficient operation without compromising freshness.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-x-2 min-[425px]:gap-x-6">
                            <Image className="pr-1" src={"/explore/chilling.png"} alt="" width={60} height={60} />
                            <div className="flex flex-col w-4/5 text-[#343637]">
                                <p className="text-[1em] xl:text-[1.3em] font-bold mb-2">High-Capacity Chilling Power</p>
                                <p className="text-[0.8em] xl:text-[1em] font-[Montserrat-Regular]">
                                Built for continuous cooling, <b>the 1.2L chilled water tank ensures a steady supply</b> of crisp, refreshing water—ready whenever you are.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-x-2 min-[425px]:gap-x-6">
                            <Image className="px-1" src={"/explore/maximum.png"} alt="" width={60} height={60} />
                            <div className="flex flex-col w-4/5 text-[#343637]">
                                <p className="text-[1em] xl:text-[1.3em] font-bold mb-2">Maximum Output, Minimal Wait</p>
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
