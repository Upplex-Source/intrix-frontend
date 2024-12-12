"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import ExperienceCentreForm from "@/components/ExperienceCentreForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function Page() {
    const headerVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayIcon, setShowPlayIcon] = useState(true);

  const handlePlayPause = () => {
    if (headerVideoRef.current) {
      if (isPlaying) {
        headerVideoRef.current.pause();
        setShowPlayIcon(true);
      } else {
        headerVideoRef.current.play();
        setShowPlayIcon(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    if (headerVideoRef.current) {
      if (isPlaying) {
        headerVideoRef.current.pause();
        setShowPlayIcon(true);
      } else {
        headerVideoRef.current.play();
        setShowPlayIcon(false);
      }
      setIsPlaying(!isPlaying);
    }
  };
    return (
        <>
        <div className="container text-center mx-auto md:mt-[250px] mb-12">
            <h1 className="text-[#343637] md:text-[30px] mb-4 font-300 !font-[Mulish-Light]">Support</h1>
            <h2 className="font-bold text-[#343637] mb-4 md:text-[40px]">How Can We Help?</h2>
            <p className="font-[Montserrat-Regular] md:text-[20px] text-[#292929]">We&apos;re here to assist you with every step, from quick answers to detailed support. Explore our resources or connect with us for tailored assistance.</p>
            
            
            
            <h2 className="font-bold text-[#343637] mb-2 mt-12 md:text-[30px]">Easy as One-2-3</h2>
            <p className="font-[Montserrat-Regular] md:text-[16px] text-[#292929] mb-6">Learn to change the One Tap filter cartridge at home with our step-by-step video.</p>
            
            <div className="relative mb-6">
                {/* Video Element */}
                <video
                preload="auto"
                ref={headerVideoRef}
                className="w-full"
                onClick={handleVideoClick}
                >
                <source src="/videos/Intrix-eco smart.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                {/* Play Icon */}
                {showPlayIcon && (
                <FontAwesomeIcon
                    icon={faCirclePlay}
                    className="absolute w-[50px] h-[50px] md:w-[120px] md:h-[120px] inset-0 m-auto text-white text-6xl md:text-[12rem] cursor-pointer z-10"
                    onClick={handlePlayPause}
                />
                )}
            </div>
            
            <FAQAccordion />
        </div>
        
        <ExperienceCentreForm />
        </>
    );
}

export default Page;
