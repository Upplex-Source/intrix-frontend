import Image from "next/image";

const ProductFeatures = () => {
    return (
        <div className="overflow-hidden flex items-center flex-col md:flex-row min-[1441px]:max-h-[100%] lg:max-h-[100vh]">
            <Image alt="Tumbler" className="w-full w-1/4 [@media(max-height:800px)]:w-[600px] xl:w-1/2 max-[1000px]:max-h-[700px] object-cover" src={"/product/tumbler.svg"} width={1200} height={860} />
            <div className="p-6 p-4 md:p-12 xl:p-24 w-full w-full md:w-1/2">
                <div className="text-[#343637] text-[12px] md:text-[14px]">Features</div>
                <div className="text-[20px] text-[20px] min-[1441px]:text-[30px] text-[#343637] font-[Mulish-Bold] leading-[1.2] mb-4">
                    Hassle-Free Hydration
                    <br /> With A Design That Delivers.
                </div>
                <div className="font-[Montserrat-Regular] text-black max-w-[700px] mb-3 mb-8 text-[14px] text-[14px] min-[1441px]:text-[16px] leading-[1.2]">
                    Experience the highest quality water straight from your tap with INTRIX. Our INTRIX One Tap is designed to unlock your
                    kitchen&apos;s hidden potential, providing you with pure, convenient water whenever you need it.
                </div>
                <div className="text-[#000] space-y-6 space-y-2 md:space-y-4 w-fit mx-0 mx-auto">
                    <div className="flex items-center gap-x-6 xl:gap-x-8 max-w-[600px] mx-auto">
                        <Image alt="microbes" className="block max-w-[40px] min-[1441px]:max-w-[55px]" src={"/product/icon.png"} width={240} height={240} />
                        <div className="">
                            <div className="font-bold text-[16px] text-[16px] min-[1441px]:text-[20px]">Removes 99.99% Microbes Down to Micron</div>
                            <div className="font-[Montserrat-Regular] text-[14px] min-[1441px]:text-[16px] leading-[1.2]">
                            Removes bacteria, algae and some viruses while preserving natural minerals.
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6 xl:gap-x-8 max-w-[600px] mx-auto">
                        <Image alt="hot and cold water" className="block max-w-[40px] min-[1441px]:max-w-[55px]" src={"/product/heat_cold.png"} width={240} height={240} />
                        <div className="">
                            <div className="font-bold text-[16px] text-[16px] min-[1441px]:text-[20px]">Instant Purified Hot & Ambient Water</div>
                            <div className="font-[Montserrat-Regular] text-[14px] min-[1441px]:text-[16px] leading-[1.2]">
                                Perfect for drinking, cooking, washing, or sterilising, our system effortlessly enhances your kitchen&apos;s
                                functionality.
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6 xl:gap-x-8 max-w-[600px] mx-auto">
                        <Image alt="space" className="block max-w-[40px] min-[1441px]:max-w-[55px]" src={"/product/space.png"} width={240} height={240} />
                        <div className="">
                            <div className="font-bold text-[16px] text-[16px] min-[1441px]:text-[20px]">Space Saving</div>
                            <div className="font-[Montserrat-Regular] text-[14px] min-[1441px]:text-[16px] leading-[1.2]">
                                Seamlessly hides the command centre under the sink, maximising your preparation space.
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6 xl:gap-x-8 max-w-[600px] mx-auto">
                        <Image alt="isolation" className="block max-w-[40px] min-[1441px]:max-w-[55px]" src={"/product/isolation.png"} width={240} height={240} />
                        <div className="">
                            <div className="font-bold text-[16px] text-[16px] min-[1441px]:text-[20px]">Safety Child Lock</div>
                            <div className="font-[Montserrat-Regular] text-[14px] min-[1441px]:text-[16px] leading-[1.2]">
                                The Push-To-Activate mechanism prevents accidents and keeps little hands safe.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatures;
