import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react"; // Import React components
import "swiper/css"; // Core Swiper CSS

const LastChanceCards = () => {
    return (
            <Swiper
                // loop={true} 
                slidesPerView={2}
                spaceBetween={20}
                className="my-swiper"
                breakpoints={{
                0: {
                    slidesPerView: 2,
                },
                425: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 2,
                },
                }}
            >
                <SwiperSlide className="text-[#421908] bg-white rounded-[18px] pb-6 overflow-hidden">
                    <Image src={'/cart/warranty.png?v=1.1'} alt="warranty" className="product-image" width={800} height={800} />
                    <div className="pt-4 px-6">  
                        <p className="text-[14px] md:text-[16px]">2-Year Extended Warranty</p>
                        <p className="text-[#421908] text-[18px] md:text-[24px] font-bold mb-1">RM 1,040.00</p>
                        <p className="text-[12px] mb-6 h-[120px] sm:h-[100px]">
                        Additional 2-year manufacturing defect warranty for the 4th and 5th years, excluding the filter.
                        <br/><br/>The purchase of the extended warranty is only valid from One Tap&apos;s purchase date until the 7th day after installation*.
                        </p>
                        <Link
                            href={'#'}
                            className="mx-auto my-2 outline-0 relative w-full sm:w-fit send_now_btn bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center gap-x-4 pl-6 pr-12 min-[520px]:pr-24 lg:pr-20 xl:pr-24"
                        >
                            <span>Add To Cart</span> 
                            <Image className="absolute right-4 min-[520px]:right-8" src={'/product/arrow-right-white.png'} alt="arrow" width={25} height={25} />
                        </Link>
                        <Link href={'#'} className="hover:underline text-center w-fit mx-auto block outline-0 text-[12px]">Buy Now</Link>
                    </div>  
                </SwiperSlide>
                <SwiperSlide className="text-[#421908] bg-white rounded-[18px] pb-6 overflow-hidden">
                    <Image src={'/cart/filter.png?v=1.1'} alt="filter" className="product-image" width={800} height={800} />
                    <div className="pt-4 px-6">
                        <p className="text-[14px] md:text-[16px]">All-In-One Filter - Buy 2 Free 1</p>
                        <p className="text-[#421908] text-[18px] md:text-[24px] font-bold mb-1">RM 1,160.00</p>
                        <p className="text-[12px] mb-6 h-[120px] sm:h-[100px]">
                        Enjoy three All-In-One Filter Replacements for the price of two with our Buy 2 Free 1 Deal.<br/><br/>(RRP: RM580 x 3 = RM1,740)
                        </p>
                        <Link
                            href={'#'}
                            className="mx-auto my-2 outline-0 relative w-full sm:w-fit send_now_btn bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center gap-x-4 pl-6 pr-12 min-[520px]:pr-24 lg:pr-20 xl:pr-24"
                        >
                            <span>Add To Cart</span> 
                            <Image className="absolute right-4 min-[520px]:right-8" src={'/product/arrow-right-white.png'} alt="arrow" width={25} height={25} />
                        </Link>
                        <Link href={'#'} className="hover:underline text-center w-fit mx-auto block outline-0 text-[12px]">Buy Now</Link>
                    </div> 
                </SwiperSlide>
            </Swiper>
    );
};

export default LastChanceCards;
