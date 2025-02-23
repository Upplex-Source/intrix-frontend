import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const SliderSection = ({ activeSlide, setActiveSlide }) => {
    const [slideItem, setSlideItem] = useState([
        {
            id: 1,
            image: "/explore/bullet1.png?v=1.1",
            opacity: 1,
            zIndex: 1,
            x: 0,
        },
        {
            id: 2,
            image: "/explore/bullet2.png?v=1.1",
            opacity: 0.8,
            zIndex: 0,
            x: -20,
        },
        {
            id: 3,
            image: "/explore/bullet3.png?v=1.1",
            opacity: 0.6,
            zIndex: 0,
            x: -40,
        },
        {
            id: 4,
            image: "/explore/bullet4.png?v=1.1",
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
                const xPos = [0, -20, -40, -60];
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
        <div className="explore-slider w-1/2 relative">
            <div className="relative h-[300px] md:h-[600px] flex items-center justify-center">
                {slideItem.map((item, index) => (
                    <Image
                        key={index}
                        src={item.image}
                        alt="4 in 1 tap"
                        width={500}
                        height={500}
                        className={`absolute rounded-full transition-all duration-300 ease-in-out`}
                        style={{
                            transform: `translateX(${item.x}px)`,
                            opacity: `${item.opacity}`,
                            zIndex: `${item.zIndex}`,
                        }}
                    />
                ))}
                <div className="absolute bottom-0 -translate-x-1/2 flex flex-row mt-auto items-center justify-center gap-2">
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
