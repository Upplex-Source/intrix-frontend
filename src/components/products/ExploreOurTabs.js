import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ColorDropdown from "./ColorDropdown";
import { Swiper, SwiperSlide } from "swiper/react"; // Import React components
import "swiper/css"; // Core Swiper CSS
import Cookies from "js-cookie";
import { getProducts } from "@/service/product-api/ProductService";

const ExploreOurTabs = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [productList, setProductList] = useState(null);

    useEffect(() => {
        const handleFirstLoad = async () => {
            const session_key = Cookies.get("session_key");

            const obj = {
                session_key: session_key,
                length: 10,
                start: 0,
            };

            try {
                const result = await getProducts(obj);

                if (result) {
                    setProductList(result.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        handleFirstLoad();
    }, []);

    return (
        <div className="container mx-auto">
            <p className="text-[#343637] text-[24px] sm:text-[30px] min-[1441px]:text-[40px] text-center font-bold mb-6">
                Explore Our One Tap Series
            </p>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                className="my-swiper !pb-[60px]"
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    370: {
                        slidesPerView: 1.4,
                    },
                    425: {
                        slidesPerView: 1.8,
                    },
                    768: {
                        slidesPerView: 2.4,
                    },
                    1024: {
                        slidesPerView: 3.5,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
            >
                {productList?.map((product, index) => {
                    function titleCase(str) {
                        var splitStr = str.toLowerCase().split(" ");
                        for (var i = 0; i < splitStr.length; i++) {
                            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
                        }
                        return splitStr.join(" ");
                    }

                    let filteredValues = product.colors.reduce((results, el) => {
                        results.push(titleCase(el.title));
                        return results;
                    }, []);

                    function handleSelect(color, productId) {
                        let newImg = product.active_product_variants.find((item) => item.title === color.toUpperCase());

                        document.getElementById(`tap-${productId}`).srcset = newImg.image_path;
                    }

                    return (
                        <SwiperSlide key={index} className="text-[#421908] bg-white rounded-lg px-4 min-[375px]:px-6 pb-6">
                            <Image
                                id={`tap-${product.id}`}
                                src={product.active_product_variants[0].image_path}
                                alt=""
                                className="product-image"
                                width={300}
                                height={400}
                            />
                            <p className="text-[14px] md:text-[16px]">{product.title}</p>
                            <p className="text-[#421908] text-[18px] md:text-[24px] font-bold">RM {product.price}</p>
                            <p className="text-[12px] mb-6 h-[70px] lg:h-[65px]">{product.description}</p>
                            <ColorDropdown
                                allowedOptions={filteredValues}
                                isOpen={openDropdown === product.id}
                                setOpenDropdown={() => setOpenDropdown(openDropdown === product.id ? null : product.id)}
                                handleSelect={handleSelect}
                                productId={product.id}
                            />
                            <Link
                                href={"/product/intrix-one-tap-5-in-1"}
                                className="mx-auto my-2 outline-0 relative w-full sm:w-fit send_now_btn bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center gap-x-4 pl-4 min-[375px]:pl-6 pr-10 min-[520px]:pr-24 lg:pr-20 xl:pr-24"
                            >
                                <span>Learn More</span>
                                <Image
                                    className="absolute right-4 min-[520px]:right-8"
                                    src={"/product/arrow-right-white.png"}
                                    alt="arrow"
                                    width={25}
                                    height={25}
                                />
                            </Link>
                            <Link href={"#"} className="hover:underline text-center w-fit mx-auto block outline-0 text-[12px]">
                                Buy Now
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ExploreOurTabs;
