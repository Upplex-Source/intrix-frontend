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
        <SwiperSlide className="relative rounded-[25px] overflow-hidden">
          <Image src="/product/Blanching.webp" className="list-img" alt="blanching" width={800} height={500} />
          <p className="absolute left-0 top-0 p-6 bg-[linear-gradient(90deg,rgba(0,0,0,0.75)3%,rgba(255,255,255,0)50%)] w-full h-full">Blanching</p>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-[25px] overflow-hidden">
          <Image src="/product/Boiling.webp" className="list-img" alt="boiling" width={800} height={500} />
          <p className="absolute left-0 top-0 p-6 bg-[linear-gradient(90deg,rgba(0,0,0,0.75)3%,rgba(255,255,255,0)50%)] w-full h-full">Boiling</p>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-[25px] overflow-hidden">
          <Image src="/product/Poaching.webp" className="list-img" alt="poaching" width={800} height={500} />
          <p className="absolute left-0 top-0 p-6 bg-[linear-gradient(90deg,rgba(0,0,0,0.75)3%,rgba(255,255,255,0)50%)] w-full h-full">Poaching</p>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-[25px] overflow-hidden">
          <Image src="/product/Make-Tea-n-Coffee.webp" className="list-img" alt="tea_coffee" width={800} height={500} />
          <p className="absolute left-0 top-0 p-6 bg-[linear-gradient(90deg,rgba(0,0,0,0.75)3%,rgba(255,255,255,0)50%)] w-full h-full">Make Tea <br/>&amp; Coffee</p>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-[25px] overflow-hidden">
          <Image src="/product/Sterilising_02.webp" className="list-img" alt="sterilising" width={800} height={500} />
          <p className="absolute left-0 top-0 p-6 bg-[linear-gradient(90deg,rgba(0,0,0,0.75)3%,rgba(255,255,255,0)50%)] w-full h-full">Sterilising</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TapCanDoCarousel;
