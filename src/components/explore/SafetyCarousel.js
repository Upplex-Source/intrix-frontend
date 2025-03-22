import { Swiper, SwiperSlide } from "swiper/react"; // Import React components
import "swiper/css"; // Core Swiper CSS
import "swiper/css/navigation"; // Navigation module CSS
import "swiper/css/pagination"; // Pagination module CSS
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const SafetyCarousel = () => {
    const safety = [
        {
            text: `Ensure your family's well-being with purified water that promotes overall health and wellness.`,
            name: "Safety Child Lock",
            image: "safety_1.png",
        },
        {
            text: `The heatproof tap ensures safety when using the hot water feature - keeping unwanted accidents at bay.`,
            name: "Heatproof Tap",
            image: "safety_2.png",
        },
        {
            text: `Our INTRIX One Tap is equipped with UK WRAS-certified Food Grade silicon tube. The material is anti-bacteria and capable of withstanding high heat.`,
            name: "Food Grade Silicone",
            image: "safety_3.png",
        },
        {
            text: `INTRIX One Tap knobs undergo 200,000 cycles of rigorous testing, meeting Kiwa Regulation 4 Certification for safety and quality.`,
            name: "200,000 Quality Test",
            image: "safety_4.png",
        },
        // {
        //     text: `The INTRIX One Tap command centre utilises the Schneider 13A Wall Socket. Pleasing to the eyes without compromising safety – built to perfectly complement the modern lifestyle, all while ensuring the utmost protection for your home.`,
        //     name: "Schneider 13A Wall Socket",
        //     image: "safety_5.png",
        // },
    ];

    return (
        <>
            <Swiper
                // loop={true}
                slidesPerView={1.2}
                spaceBetween={20}
                className="my-swiper"
                modules={[Navigation]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    575: {
                        slidesPerView: 1.5,
                    },
                    601: {
                        slidesPerView: 1.2,
                    },
                    768: {
                        slidesPerView: 1.3,
                    },
                    890: {
                        slidesPerView: 1.4,
                    },
                    1000: {
                        slidesPerView: 1.5,
                    },
                    1281: {
                        slidesPerView: 1.8,
                    },
                    1441: {
                        slidesPerView: 1.6,
                    },
                    1600: {
                        slidesPerView: 1.8,
                    },
                    1800: {
                        slidesPerView: 2.2,
                    },
                    2000: {
                        slidesPerView: 2.4,
                    },
                    2250: {
                        slidesPerView: 2.8,
                    },
                }}
            >
                {safety.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="overflow-hidden h-full relative bg-[#fff] flex min-[600px]:flex-row flex-col items-center">
                            <Image
                                src={`/explore/${item.image}`}
                                // className="h-full object-cover max-w-[200px] md:max-w-[400px] min-[1441px]:max-w-[500px]"
                                className="block w-full h-full min-[600px]:object-cover max-w-[unset] min-[600px]:max-w-[300px] sm:max-w-[350px] md:max-w-[350px] min-[890px]:max-w-[400px] min-[1280px]:max-w-[unset]"
                                alt="quote"
                                width={500}
                                height={500}
                                priority
                            />
                            <div className="p-6 min-[1441px]:p-12">
                                <p className="text-[18px] md:text-[20px] font-bold text-black mb-4 lg:text-[26px] leading-[1.2]">{item.name}</p>
                                <p className="text-[13px] md:text-[16px] text-[#5E5C5C] sm:min-h-[unset] min-[475px]:min-h-[60px] min-h-[80px]">{item.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute left-0 right-0 md:left-[unset] md:right-12 top-12 md:top-4 flex items-center justify-center md:justify-start gap-x-4">
                <div className="custom-prev cursor-pointer text-[#343637] hover:text-gray-900">
                    <FontAwesomeIcon icon={faCircleChevronLeft} size="2x" />
                </div>
                <div className="custom-next cursor-pointer text-[#343637] hover:text-gray-900">
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2x" />
                </div>
            </div>
        </>
    );
};

export default SafetyCarousel;
