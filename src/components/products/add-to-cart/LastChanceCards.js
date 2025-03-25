import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react"; // Import React components
import "swiper/css"; // Core Swiper CSS
import { getAddOn } from "@/service/product-api/ProductService";
import { useEffect, useState } from "react";
import { currencyFormat } from "@/functions/helper";

const LastChanceCards = ({ addItemToCart }) => {
    const [addOns, setAddOns] = useState();

    useEffect(() => {
        const handleCartFirstLoad = async () => {
            const addOnsObj = {
                length: 10,
                start: 0,
            };

            try {
                const result = await getAddOn(addOnsObj);

                if (result) {
                    setAddOns(result.add_ons);
                }
            } catch (error) {
                console.log(error);
            }
        };
        handleCartFirstLoad();
    }, []);

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
            {addOns?.map((item, index) => (
                <SwiperSlide key={index} className="text-[#421908] bg-white rounded-[18px] pb-6 overflow-hidden">
                    <Image src={item.image_path} alt="warranty" className="product-image" width={800} height={800} />
                    <div className="pt-4 px-6">
                        <p className="text-[14px] md:text-[16px]">{item.title}</p>
                        <p className="text-[#421908] text-[18px] md:text-[24px] font-bold mb-1">RM {currencyFormat(item.price, 2, true)}</p>
                        <p className="text-[12px] mb-6 h-[120px] sm:h-[100px]">
                            {item.description.split(". ")[0]}
                            <br />
                            <br />
                            {item.description.split(". ")[1]}
                        </p>
                        <div
                            onClick={() => addItemToCart(item, "addon")}
                            className="mx-auto my-2 outline-0 relative w-full sm:w-fit send_now_btn bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center gap-x-4 pl-6 pr-12 min-[520px]:pr-24 lg:pr-20 xl:pr-24"
                        >
                            <span>Add To Cart</span>
                            <Image
                                className="absolute right-4 min-[520px]:right-8"
                                src={"/product/arrow-right-white.png"}
                                alt="arrow"
                                width={25}
                                height={25}
                            />
                        </div>
                        {/* <Link href={"#"} className="hover:underline text-center w-fit mx-auto block outline-0 text-[12px]">
                            Buy Now
                        </Link> */}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default LastChanceCards;
