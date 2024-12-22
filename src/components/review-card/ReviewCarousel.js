import { Swiper, SwiperSlide } from "swiper/react"; // Import React components
import "swiper/css"; // Core Swiper CSS
import "swiper/css/navigation"; // Navigation module CSS
import "swiper/css/pagination"; // Pagination module CSS
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ReviewCarousel = () => {
  const reviews = [
    {
      text: `Finally, we are delighted to have completed the installation of the Intrix tap. My mom is extremely satisfied, as the tabletop is now immaculate and we can use it effortlessly. Mr. Taufiq meticulously planned and executed the installation with exceptional precision. Even the hole near the sink is perfectly accurate. His work is incredibly professional and clean. We couldn't be happier with the outstanding service he provided.`,
      name: "Darshini Vasuthevan",
    },
    {
      text: `Finally done with the installation of the Intrix tap today. My mum is satisfy with it as the table top look neat now and we can get drinking/hot water instantly. I have to give the compliment to the technician, M. Arib Aiman who was patiently help to drill the hole on my concrete countertop. Although it was a hot day but he complete the installation patiently without any complain. He also further... [More on Google Review]`,
      name: "Bkyen Lim",
    },
    {
      text: `I'm an interior designer, and I can't praise Intrix Group's instant hot water tap enough. It's a game-changer for any home. This tap doesn't just dispense water—it delivers purified hot water at a staggering 98°C instantly. It's perfect for everything from making tea to sterilizing baby bottles. The tap's design is sleek and stylish, complementing ... [More on Google Review]`,
      name: "Ashikin Azidee",
    },
    {
      text: `I installed Intrix a year ago, and I've been very pleased with their prompt responses to any issues that arise. The technician, Taufiq, did an excellent job resolving my problem and explained everything clearly and courteously.`,
      name: "Kim Yee Teh",
    },
    {
      text: `Simply hassleless, been using for about a year now. Good sales team, good installation team. No complaint.`,
      name: "Kris Lee",
    },
  ];

  return (
    <>
      <Swiper
        // loop={true} 
        slidesPerView={1.8}
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
            slidesPerView: 1.8,
          },
          1600: {
            slidesPerView: 2.8,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="h-full relative bg-[#F79932] p-12 text-white font-bold">
              <Image src="/home/quote.png" className="absolute right-8 top-8 opacity-20 " alt="quote" width={50} height={50} />
              <div className="card-1">
                <div className="flex items-center gap-x-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-white" />
                  ))}
                </div>
                  <p className="text-[20px] my-6 pr-12">{review.text}</p>
                  <p>{review.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-12 top-12 flex items-center gap-x-4">
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

export default ReviewCarousel;
