import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const SliderSection = ({ activeSlide, setActiveSlide }) => {
    const [slideItem, setSlideItem] = useState([
        {
            id: 1,
            image: "/explore/bullet1.jpg?v=1.2",
            opacity: 1,
            zIndex: 1,
            x: 0,
        },
        {
            id: 2,
            image: "/explore/bullet2.webp?v=1.2",
            opacity: 0.8,
            zIndex: 0,
            x: -20,
        },
        {
            id: 3,
            image: "/explore/bullet3.webp?v=1.2",
            opacity: 0.6,
            zIndex: 0,
            x: -40,
        },
        {
            id: 4,
            image: "/explore/bullet4.webp?v=1.2",
            opacity: 0.4,
            zIndex: 0,
            x: -60,
        },
    ]);

    const intervalRef = useRef(null);

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            const index = (activeSlide + 1) % slideItem.length;
            setActiveSlide(index);
        }, 3000);
    };

    const resetInterval = () => {
        clearInterval(intervalRef.current);
        startInterval();
    };

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current);
    }, [slideItem.length]);

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current);
    }, [activeSlide]);

    useEffect(() => {
        setSlideItem((prev) => {
            return prev.map((item, index) => {
                // const xPos = [0, -20, -40, -60];
                const xPos = [0, 0, 0, 0];
                const opacity = [1, 0.8, 0.6, 0.4];
                const totalSlides = slideItem.length;
                const relativeIndex = (index - activeSlide + totalSlides) % totalSlides;

                return {
                    ...item,
                    x: xPos[relativeIndex],
                    opacity: opacity[relativeIndex],
                    zIndex: activeSlide === index ? 1 : 0,
                };
            });
        });
    }, [activeSlide, slideItem.length]);

    return (
        <div className="explore-slider w-full lg:w-1/2 relative ml-auto mr-auto lg:mr-0">
            <div className="relative h-[calc(100vw-2em)] w-[calc(100vw-2em)] py-12 min-[480px]:h-[450px] lg:h-[500px] min-[480px]:w-[450px] lg:w-[500px] flex items-center justify-center mx-auto">
                {slideItem.map((item, index) => (
                    <Image
                        key={index}
                        src={item.image}
                        alt="4 in 1 tap"
                        width={1500}
                        height={1500}
                        className={`absolute rounded-full transition-all duration-300 ease-in-out object-cover h-full`}
                        style={{
                            transform: `translateX(${item.x}px)`,
                            opacity: `${item.opacity}`,
                            zIndex: `${item.zIndex}`,
                        }}
                    />
                ))}
                <div className="absolute bottom-[-20px] flex flex-row mt-auto items-center justify-center gap-2">
                    {slideItem.map((item, index) => (
                        <div
                            onClick={() => {
                                setActiveSlide(index);
                                resetInterval();
                            }}
                            key={index}
                            className={`w-2 h-2 rounded-full hover:cursor-pointer bg-[#4d2616] ${activeSlide === index ? "" : "opacity-50"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
