import Image from "next/image";
import Link from "next/link";
import ColorDropdown from "./ColorDropdown";
import { Swiper, SwiperSlide } from "swiper/react"; // Import React components
import "swiper/css"; // Core Swiper CSS

const ExploreOurTabs = () => {
    return (
        <div className="container mx-auto lg:px-16">
                        <p className="text-[#343637] text-[24px] sm:text-[30px] min-[1441px]:text-[40px] text-center font-bold mb-6">Explore Our One Tap Series</p>
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
                        <Swiper
                            // loop={true} 
                            slidesPerView={4}
                            spaceBetween={20}
                            className="my-swiper !pb-[60px]"
                            breakpoints={{
                            0: {
                                slidesPerView: 1.2,
                            },
                            425: {
                                slidesPerView: 1.8,
                            },
                            768: {
                                slidesPerView: 2.4,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            }}
                        >
                            <SwiperSlide className="text-[#421908] bg-white rounded-lg px-6 pb-6">
                                <Image src={'/explore/tap-1.png?v=1.1'} alt="" className="product-image" width={300} height={400} />
                                    <p className="text-[14px] md:text-[16px]">INTRIX One Tap 5-in-1</p>
                                    <p className="text-[#421908] text-[18px] md:text-[24px] font-bold">RM 7,500.00</p>
                                    <p className="text-[12px] mb-6 h-[70px] sm:h-[50px]">
                                    The ultimate tap with hot, ambient and chilled purified water. Available in Chrome & Matte Black.
                                    </p>
                                    <ColorDropdown />
                                    <Link
                                        href={'/product'}
                                        className="mx-auto my-2 outline-0 relative w-full sm:w-fit send_now_btn bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center gap-x-4 pl-6 pr-12 min-[520px]:pr-24 lg:pr-20 xl:pr-24"
                                    >
                                        <span>Learn More</span> 
                                        <Image className="absolute right-4 min-[520px]:right-8" src={'/product/arrow-right-white.png'} alt="arrow" width={25} height={25} />
                                    </Link>
                                    <Link href={'#'} className="hover:underline text-center w-fit mx-auto block outline-0 text-[12px]">Buy Now</Link>
                            </SwiperSlide>
                            <SwiperSlide className="text-[#421908] bg-white rounded-lg px-6 pb-6">
                                <Image src={'/explore/tap-3.png?v=1.1'} alt="" className="product-image" width={300} height={400} />
                                    <p className="text-[14px] md:text-[16px]">INTRIX One Tap 4-in-1</p>
                                    <p className="text-[#421908] text-[18px] md:text-[24px] font-bold">RM 5,200.00</p>
                                    <p className="text-[12px] mb-6 h-[70px] sm:h-[50px]">
                                    Perfect for hot to boiling and ambient purified water. Available in Chrome, Matte Black, Satin Gold & Gunmetal Grey.
                                    </p>
                                    <ColorDropdown />
                                    <Link
                                        href={'/product'}
                                        className="mx-auto my-2 outline-0 relative w-full sm:w-fit send_now_btn bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center gap-x-4 pl-6 pr-12 min-[520px]:pr-24 lg:pr-20 xl:pr-24"
                                    >
                                        <span>Learn More</span> 
                                        <Image className="absolute right-4 min-[520px]:right-8" src={'/product/arrow-right-white.png'} alt="arrow" width={25} height={25} />
                                    </Link>
                                    <Link href={'#'} className="hover:underline text-center w-fit mx-auto block outline-0 text-[12px]">Buy Now</Link>
                            </SwiperSlide>
                            <SwiperSlide className="text-[#421908] bg-white rounded-lg px-6 pb-6">
                                <Image src={'/explore/tap-2.png?v=1.2'} alt="" className="product-image" width={300} height={400} />
                                    <p className="text-[14px] md:text-[16px]">INTRIX One Tap 2-in-1</p>
                                    <p className="text-[#421908] text-[18px] md:text-[24px] font-bold">RM 4,500.00</p>
                                    <p className="text-[12px] mb-6 h-[70px] sm:h-[50px]">
                                    Hot water (ranging from 60°C to 98°C) and ambient purified water straight from the tap. Available in Chrome & Matte Black.
                                    </p>
                                    <ColorDropdown />
                                    <Link
                                        href={'/product'}
                                        className="mx-auto my-2 outline-0 relative w-full sm:w-fit send_now_btn bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center gap-x-4 pl-6 pr-12 min-[520px]:pr-24 lg:pr-20 xl:pr-24"
                                    >
                                        <span>Learn More</span> 
                                        <Image className="absolute right-4 min-[520px]:right-8" src={'/product/arrow-right-white.png'} alt="arrow" width={25} height={25} />
                                    </Link>
                                    <Link href={'#'} className="hover:underline text-center w-fit mx-auto block outline-0 text-[12px]">Buy Now</Link>
                            </SwiperSlide>
                            <SwiperSlide className="text-[#421908] bg-white rounded-lg px-6 pb-6">
                                <Image src={'/explore/tap-4.png?v=1.1'} alt="" className="product-image" width={300} height={400} />
                                    <p className="text-[14px] md:text-[16px]">INTRIX One Tap Lite</p>
                                    <p className="text-[#421908] text-[18px] md:text-[24px] font-bold">RM 3,988.00</p>
                                    <p className="text-[12px] mb-6 h-[70px] sm:h-[50px]">
                                    Great for hot (preset to 98​​°C) and ambient purified water straight from the tap. Available in Chrome.
                                    </p>
                                    <ColorDropdown />
                                    <Link
                                        href={'/product'}
                                        className="mx-auto my-2 outline-0 relative w-full sm:w-fit send_now_btn bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center gap-x-4 pl-6 pr-12 min-[520px]:pr-24 lg:pr-20 xl:pr-24"
                                    >
                                        <span>Learn More</span> 
                                        <Image className="absolute right-4 min-[520px]:right-8" src={'/product/arrow-right-white.png'} alt="arrow" width={25} height={25} />
                                    </Link>
                                    <Link href={'#'} className="hover:underline text-center w-fit mx-auto block outline-0 text-[12px]">Buy Now</Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
    );
};

export default ExploreOurTabs;
