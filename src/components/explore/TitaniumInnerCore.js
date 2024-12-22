import Image from "next/image";

import icon from "../../../public/home/icon/bacteria.png";

const TitaniumInnerCore = () => {
    return (
        <div className="mx-auto relative">
            <Image
                src="/explore/titanium-bg.png" // Replace with the image URL or leave empty for now
                alt="Intrix Experience Centre"
                className="w-full h-full object-cover object-top block"
                width={1920} // Adjust width and height
                height={650} // For placeholder purposes
            />
            <div className="absolute inset-y-0 left-0  w-full h-full bg-gradient-to-r from-black to-transparent">
                <div className="flex flex-col p-12 justify-center  text-white w-1/2 h-full">
                    <p className="text-white text-[2em] font-bold">
                        The World&apos;s First and Only
                        <br /> Titanium Inner Core
                    </p>
                    <p className="text-white text-[1em]">
                        Experience the future of innovation with our patented technology:
                        <br /> the Titanium Inner Core — where strength and safety meets precision.
                    </p>
                    <div className="flex flex-col p-6">
                        <div className="flex w-full">
                            <Image className="w-1/5" src={icon} alt="" />
                            <div className="flex flex-col w-4/5">
                                <p className="text-white text-[1em] font-bold">Anti-Corrosion & Anti-Limescale</p>
                                <p className="text-white text-[0.8em]">
                                    Engineered to resists corrosion and limescale
                                    <br /> build-up, enhancing its performance and
                                    <br /> reducing the need for constant maintenance.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <Image className="w-1/5" src={icon} alt="" />
                            <div className="flex flex-col w-4/5">
                                <p className="text-white text-[1em] font-bold">High Strength & Durability</p>
                                <p className="text-white text-[0.8em]">
                                    Crafted for unmatched strength and durability,
                                    <br /> the Titanium Inner Core redefines performance
                                    <br /> and longevity.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <Image className="w-1/5" src={icon} alt="" />
                            <div className="flex flex-col w-4/5">
                                <p className="text-white text-[1em] font-bold">Efficient Heat Transfer</p>
                                <p className="text-white text-[0.8em]">
                                    Highly effective in heat exchangers, thermal
                                    <br /> systems, and energy solutions, the core reduces
                                    <br /> operational costs and enhances overall system
                                    <br /> performance without compromise.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <Image className="w-1/5" src={icon} alt="" />
                            <div className="flex flex-col w-4/5">
                                <p className="text-white text-[1em] font-bold">Biocompatible</p>
                                <p className="text-white text-[0.8em]">
                                    Non-toxic and safe for use in food-grade
                                    <br /> applications, providing peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitaniumInnerCore;
