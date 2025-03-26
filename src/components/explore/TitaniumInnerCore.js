import Image from "next/image";

const TitaniumInnerCore = () => {
    return (
        <div className="w-full mx-auto relative">
            <Image
                src="/explore/titanium-bg.webp" // Replace with the image URL or leave empty for now
                alt="Intrix Experience Centre"
                className="w-full h-full object-cover object-top block min-h-[800px] sm:min-h-[700px]"
                width={2888} // Adjust width and height
                height={1774} // For placeholder purposes
            />
            <div className="w-full absolute inset-y-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent">
                <div className="w-full min-[1600px]:container min-[1600px]:mx-auto flex flex-col py-6 px-4 lg:py-12 lg:px-24 justify-center leading-[1.2] text-white w-2/3 h-full">
                    <p className="text-[#F7F7F7] text-[24px] sm:text-[30px] font-bold mb-4 max-w-[450px]">The World&apos;s First and Only Titanium Inner Core</p>
                    <p className="text-[#F7F7F7] text-[1em] mb-4 lg:mb-6 xl:mb-12 max-w-[500px]">
                        Experience the future of innovation with our patented technology: the Titanium Inner Core — where strength and safety meets
                        precision.
                    </p>
                    <div className="flex flex-col px-0 sm:px-6 space-y-6 max-w-[550px]">
                        <div className="flex w-full items-center gap-x-6">
                            <Image className="" src={"/explore/anticorrosion.png"} alt="" width={60} height={60} />
                            <div className="flex flex-col w-4/5">
                                <p className="text-white text-[1em] xl:text-[1.3em] font-bold mb-2">Anti-Corrosion & Anti-Limescale</p>
                                <p className="text-white text-[0.8em] xl:text-[1em] font-[Montserrat-Regular]">
                                    Engineered to resists corrosion and limescale
                                    build-up, enhancing its performance and
                                    reducing the need for constant maintenance.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-x-6">
                            <Image className="px-2" src={"/explore/strength.png"} alt="" width={60} height={60} />
                            <div className="flex flex-col w-4/5">
                                <p className="text-white text-[1em] xl:text-[1.3em] font-bold mb-2">High Strength & Durability</p>
                                <p className="text-white text-[0.8em] xl:text-[1em] font-[Montserrat-Regular]">
                                    Crafted for unmatched strength and durability,
                                    the <b className="font-bold">Titanium Inner Core (Grade 1)*</b> redefines performance
                                    and longevity.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-x-6">
                            <Image className="px-1" src={"/explore/heat_transfer.png"} alt="" width={60} height={60} />
                            <div className="flex flex-col w-4/5">
                                <p className="text-white text-[1em] xl:text-[1.3em] font-bold mb-2">Efficient Heat Transfer</p>
                                <p className="text-white text-[0.8em] xl:text-[1em] font-[Montserrat-Regular]">
                                    Highly effective in heat exchangers, thermal
                                    systems, and energy solutions, the core reduces
                                    operational costs and enhances overall system
                                    performance without compromise.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-x-6">
                            <Image className="" src={"/explore/biopcompatible.png"} alt="" width={60} height={60} />
                            <div className="flex flex-col w-4/5">
                                <p className="text-white text-[1em] xl:text-[1.3em] font-bold mb-2">Biocompatible</p>
                                <p className="text-white text-[0.8em] xl:text-[1em] font-[Montserrat-Regular]">
                                    Non-toxic and safe for use in food-grade
                                    applications, providing peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>
                    <i className="text-[11px] max-w-[400px] italic text-[#F7F7F7] mt-6 lg:mt-12">
                        *Grade 1 Titanium is one of the softest and most ductile grades exhibiting the greatest formability, offering high impact
                        toughness and resistance.
                    </i>
                </div>
            </div>
        </div>
    );
};

export default TitaniumInnerCore;
