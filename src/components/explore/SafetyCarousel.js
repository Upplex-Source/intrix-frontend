import { Swiper, SwiperSlide } from "swiper/react"; // Import React components
import "swiper/css"; // Core Swiper CSS
import "swiper/css/navigation"; // Navigation module CSS
import "swiper/css/pagination"; // Pagination module CSS
import { Navigation } from 'swiper/modules';
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
      text: `The knobs of our INTRIX One Tap have gone through multiple vigorous quality testing to ensure optimal function and product safety.`,
      name: "200,000 Quality Test",
      image: "safety_4.png",
    },
    {
      text: `The INTRIX One Tap command centre utilises the Schneider 13A Wall Socket. Pleasing to the eyes without compromising safety – built to perfectly complement the modern lifestyle, all while ensuring the utmost protection for your home.`,
      name: "Schneider 13A Wall Socket",
      image: "safety_5.png",
    },
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
          768: {
            slidesPerView: 1.2,
          },
          1000: {
            slidesPerView: 1.5,
          },
          1280: {
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
            <div className="h-full relative bg-[#fff] flex items-center">
              <Image src={`/explore/${item.image}`} className="h-full object-cover max-w-[300px] md:max-w-[400px] min-[1441px]:max-w-[500px]" alt="quote" width={500} height={500} />
              <div className="p-6 min-[1441px]:p-12">
                  <p className="text-[20px] font-bold text-black mb-4 text-[26px] leading-[1.2]">{item.name}</p>
                  <p className="text-[16px] text-[#5E5C5C]">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-12 top-4 flex items-center gap-x-4">
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
