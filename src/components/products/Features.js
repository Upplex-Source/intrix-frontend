import Image from "next/image";

const Features = () => {
    return (
        <div className="flex items-center flex-col md:flex-row">
            <Image alt="Tumbler" className="w-full md:w-1/2" src={'/product/tumbler.svg'} width={1200} height={860} />
            <div className="p-6 md:p-12 w-full md:w-1/2">
                <p className="text-[#343637] text-[12px] md:text-[14px]">Features</p>
                <p className="text-[20px] md:text-[30px] text-[#343637] font-[Mulish-Bold] leading-[1.2] mb-4">
                    Hassle-Free Hydration
                    <br /> With A Design That Delivers.
                </p>
                <p className="font-[Montserrat-Regular] text-black mb-8 text-[14px] md:text-[16px]">
                    Experience the highest quality water straight from your tap with INTRIX.
                    Our INTRIX One Tap is designed to unlock your kitchen&apos;s hidden potential, providing
                    you with pure, convenient water whenever you need it.
                </p>
                <div className="text-[#000] space-y-6 md:space-y-4 w-fit mx-auto">
                    <div className="flex items-center gap-x-4 max-w-[500px] mx-auto">
                        <Image alt="microbes" className="block max-w-[55px]" src={'/product/icon.png'} width={240} height={240} />
                        <div className="">
                            <p className="font-bold text-[16px] md:text-[20px]">Removes 99.99% microbes</p>
                            <p className="font-[Montserrat-Regular] text-[14px] md:text-[16px]">
                                Removes bacteria, algae and some
                                 viruses while preserving natural minerals.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4 max-w-[500px] mx-auto">
                        <Image alt="hot and cold water" className="block max-w-[55px]" src={'/product/heat_cold.png'} width={240} height={240} />
                        <div className="">
                            <p className="font-bold text-[16px] md:text-[20px]">Instant Purified Hot & Cold Water</p>
                            <p className="font-[Montserrat-Regular] text-[14px] md:text-[16px]">
                                Perfect for drinking, cooking, washing, or
                                sterilising, our system effortlessly enhances
                                your kitchen&apos;s functionality.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4 max-w-[500px] mx-auto">
                        <Image alt="space" className="block max-w-[55px]" src={'/product/space.png'} width={240} height={240} />
                        <div className="">
                            <p className="font-bold text-[16px] md:text-[20px]">Space Saving</p>
                            <p className="font-[Montserrat-Regular] text-[14px] md:text-[16px]">
                                Seamlessly hides the command centre under
                                 the sink, maximising your preparation space.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4 max-w-[500px] mx-auto">
                        <Image alt="isolation" className="block max-w-[55px]" src={'/product/isolation.png'} width={240} height={240} />
                        <div className="">
                            <p className="font-bold text-[16px] md:text-[20px]">Safety Child Lock</p>
                            <p className="font-[Montserrat-Regular] text-[14px] md:text-[16px]">
                                The Push-To-Activate mechanism prevents
                                accidents and keeps little hands safe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
