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
          <Image src="/product/Blanching.webp" className="list-img" alt="blanching" width={800} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/product/boiling.webp" className="list-img" alt="boiling" width={800} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/product/Poaching.webp" className="list-img" alt="poaching" width={800} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/product/Make-Tea-n-Coffee.webp" className="list-img" alt="tea_coffee" width={800} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/product/Sterilising_02.webp" className="list-img" alt="sterilising" width={800} height={500} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TapCanDoCarousel;
