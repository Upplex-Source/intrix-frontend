import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import Image from "next/image";

const TapCanDoCarousel = () => {

  return (
    <>
      <Swiper
        // loop={true} 
        slidesPerView={3.8}
        spaceBetween={20}
        className="my-swiper pl-12"
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.8,
          },
          1280: {
            slidesPerView: 3.2,
          },
          1680: {
            slidesPerView: 3.8,
          },
        }}
      >
        <SwiperSlide>
          <Image src="/product/blanching.png" className="" alt="blanching" width={800} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/product/boiling.png" className="" alt="boiling" width={800} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/product/poaching.png" className="" alt="poaching" width={800} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/product/tea_coffee.png" className="" alt="tea_coffee" width={800} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/product/sterilising.png" className="" alt="sterilising" width={800} height={500} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TapCanDoCarousel;
