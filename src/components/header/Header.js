"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram, faFacebookF, faYoutube, faTiktok, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { usePathname, useRouter } from "next/navigation";
import "./header.scss";

import { Search01Icon, MessageQuestionIcon, ShoppingBasket01Icon } from "hugeicons-react";

function Header({ isVisible, setIsVisible }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
    const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
    const [isRightMenuPlansOpen, setIsRightMenuPlansOpen] = useState(false);
    // const [isVisible, setIsVisible] = useState(true);
    // const getScrollValue = () => (window.innerHeight < 900 ? 2500 : 4000);
    
    const [isShown, setIsShown] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    // const getScrollValue = 100;
    // const checkScrollPosition = () => {
    //     if (window.scrollY < getScrollValue && ["/"].includes(pathname)) {
    //         setIsShown(false);
    //     } else if (window.scrollY < 100 ) {
    //         setIsShown(true);
    //     } 
    // };

    // useEffect(() => {
    //     const checkScrollPosition = () => {
    //         if (window.scrollY < getScrollValue && ["/"].includes(pathname)) {
    //             setIsShown(false);
    //             // console.log(window.scrollY);
    //         } else if (window.scrollY < 100) {
    //             setIsShown(true);
    //         } 
    //     };
    //     const handleScroll = () => {
    //         // Show the menu when scrolling
    //         setIsShown(false);

    //         // Clear the previous timeout if there's one
    //         if (timeoutId) {
    //             clearTimeout(timeoutId);
    //         }

    //         // Set a new timeout to hide the menu after 2 seconds of no scrolling
    //         const newTimeoutId = setTimeout(() => {
    //             setIsShown(true);
    //             checkScrollPosition();
    //         }, 1000);

    //         setTimeoutId(newTimeoutId);
    //     };
    //     checkScrollPosition();
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         if (timeoutId) {
    //             clearTimeout(timeoutId);
    //         }
    //     };
    // }, [timeoutId, pathname]);
    

    // const handleMouseEnter = () => {
    //     if (timeoutId) {
    //         clearTimeout(timeoutId);
    //         setTimeoutId(null);
    //     }
    // };

    // const handleMouseLeave = () => {
    //     const newTimeoutId = setTimeout(() => {
    //         setIsShown(false);
    //         checkScrollPosition();
    //     }, 2000);
    //     setTimeoutId(newTimeoutId);
    // };
    const [hideTimer, setHideTimer] = useState(null);
    const [mouseOverNav, setMouseOverNav] = useState(false);
    const [mouseInTopZone, setMouseInTopZone] = useState(false);
    const [scrollIsTop, setScrollIsTop] = useState(true);
    useEffect(() => {
        const handleMouseMove = (e) => {
          const isTopZone = e.clientY <= 100;
          setMouseInTopZone(isTopZone);
          const allowShow = isTopZone || mouseOverNav || (scrollIsTop && pathname !== "/");
          
          if (allowShow) {
            setIsShown(true);
            if (hideTimer) {
              clearTimeout(hideTimer);
              setHideTimer(null);
            }
          } else if (!hideTimer) {
            const timeout = setTimeout(() => {
              setIsShown(false);
            }, 1000);
            setHideTimer(timeout);
          }
        };
    
        const handleScroll = () => {
          const atTop = window.scrollY <= 100;
          setScrollIsTop(atTop);
    
          if (atTop && pathname !== "/") {
            setIsShown(true);
            if (hideTimer) {
              clearTimeout(hideTimer);
              setHideTimer(null);
            }
          }
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initialize on load
    
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("scroll", handleScroll);
          if (hideTimer) clearTimeout(hideTimer);
        };
      }, [mouseOverNav, scrollIsTop, hideTimer]);
    
      const handleMouseEnter = () => {
        setMouseOverNav(true);
        if (hideTimer) {
          clearTimeout(hideTimer);
          setHideTimer(null);
        }
        setIsShown(true);
      };
    
      const handleMouseLeave = () => {
        setMouseOverNav(false);
    
        // Only hide if not in top zone and not scrolled to top
        if (!mouseInTopZone && !scrollIsTop && !hideTimer) {
          const timeout = setTimeout(() => {
            setIsShown(false);
          }, 1000);
          setHideTimer(timeout);
        }
      };

    return (
        <>
            <div
                className={`bg-white z-[100] w-full text-[black] text-[14px] ${
                    ["/discover"].includes(pathname) ? "z-[999] relative" : "fixed"
                } top-0 md:block hidden transition-all duration-500 ${isShown ? "translate-y-0" : "-translate-y-full"}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* {["/"].includes(pathname) &&
                <div
                    className={`bg-[#F79932] px-4 flex items-center justify-between overflow-hidden transition-all duration-500 ${
                        isVisible ? "h-[30px]" : "h-0"
                    }`}
                >
                    <div className="flex justify-evenly items-center text-[#463E3D] text-[14px] font-bold w-full justify-center [@media(max-height:800px)]:py-1 py-2">
                        <span className="block text-center">FREE Delivery & Installation</span>
                        <span className="h-[15px] w-[2px] bg-[#463E3D] block"></span>
                        <span className="block text-center">3 Years Warranty</span>
                    </div>
                    <button onClick={() => setIsVisible(false)} className="rounded-full block pr-4">
                        <Image src={"/menu/black-close-circle.png"} alt="menu" width={22} height={22} />
                    </button>
                </div>
                } */}
                <div className="w-full flex justify-end items-center border-[rgba(0,0,0,0.2)] border-b [@media(max-height:800px)]:py-1 py-3">
                    <div className="w-3/4 flex items-center justify-end gap-x-6 lg:gap-x-8 md:pr-12">
                        <Link href="/find-a-store#exp_form">Make An Appointment</Link>

                        <Link href="/support">Support</Link>
                        <Link href="/find-a-store">Find a Store</Link>
                        {/* <Link href="/events">Events</Link> */}
                        <Link href="/faq">FAQ</Link>
                        {/* <Link href="/for-business">For Business</Link> */}
                        <div className="flex items-center gap-x-6">
                            <span>
                                <Search01Icon />
                            </span>
                            {/* <span>
                                <MessageQuestionIcon />
                            </span> */}
                            <span>
                                <ShoppingBasket01Icon />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center px-6 lg:px-12">
                    <Link className="logo mr-6 lg:mr-12" href={"/"}>
                        <Image alt="logo" className="w-[180px] min-[1600px]:w-[220px]" width={300} height={80} src={"/logo.png"} />
                    </Link>
                    <div className="group">
                        <Link
                            href="/explore"
                            className="group-hover:text-white transition group-hover:bg-[#292929] py-4 [@media(min-height:700px)]:py-6 px-6"
                        >
                            Explore Our Range
                        </Link>
                        <div className="absolute left-0 mt-[14px] [@media(min-height:700px)]:mt-[20px] hidden w-[100vw] bg-[#292929] text-white group-hover:block">
                            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container mx-auto">
                                <div className="p-8">
                                    <h4 className="font-bold mb-2 text-[16px] ">Our Products</h4>
                                    <ul className="space-y-2 text-[12px]">
                                        <li>
                                            <Link href="/explore" className="hover:underline">
                                                Overview
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/product/intrix-one-tap-5-in-1" className="hover:underline">
                                                INTRIX One Tap 5-in-1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/product/intrix-one-tap-4-in-1" className="hover:underline">
                                                INTRIX One Tap 4-in-1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/product/intrix-one-tap-2-in-1" className="hover:underline">
                                                INTRIX One Tap 2-in-1
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/product/intrix-one-tap-lite" className="hover:underline">
                                                INTRIX One Tap Lite
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="p-8">
                                    <h4 className="font-bold mb-2 text-[16px] ">Accessories</h4>
                                    <ul className="space-y-2 text-[12px]">
                                        <li>
                                            <Link href="/product/filter" className="hover:underline">
                                                INTRIX All-in-One Filter
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/product/font" className="hover:underline">
                                                INTRIX Font
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="group">
                        <Link
                            href="#"
                            className="hover:text-white transition hover:bg-[#292929] py-4 [@media(min-height:700px)]:py-6 px-4 lg:px-6"
                        >
                            Payment Plan
                        </Link>
                        <div className="absolute left-0 mt-[20px] hidden w-[100vw] bg-[#292929] text-white group-hover:block">
                            <div className="grid grid-cols-4 container mx-auto p-8">
                                <Link href="/payment-plan?tab=0" className="font-bold text-[16px] hover:underline">FlexiOwn Plan</Link>
                                <Link href="/payment-plan?tab=1" className="font-bold text-[16px] hover:underline">Easy Payment Plan</Link>
                            </div>
                        </div>
                    </div> */}
                    <Link
                        href="/payment-plan?tab=0"
                        className="hover:text-white transition hover:bg-[#292929] py-4 [@media(min-height:700px)]:py-6 px-4 lg:px-6"
                    >
                        FlexiOwn Plan
                    </Link>
                    {/* <Link 
                        href='/insights'
                        className="hover:text-white transition hover:bg-[#292929] py-4 [@media(min-height:700px)]:py-6 px-4 lg:px-6"
                    >
                        Insights
                    </Link> */}
                    <Link
                        href="/sustainability"
                        className="py-4 [@media(min-height:700px)]:py-6 px-4 lg:px-6 transition hover:bg-[#292929] hover:text-white"
                    >
                        Sustainability
                    </Link>
                    <Link
                        href="/discover"
                        className="py-4 [@media(min-height:700px)]:py-6 px-4 lg:px-6 transition hover:bg-[#292929] hover:text-white"
                    >
                        Discover INTRIX
                    </Link>
                </div>
            </div>
            <div className="bg-white z-[100] w-[100vw] text-[black] text-[14px] fixed top-0 md:hidden block">
            {/* {["/"].includes(pathname) &&
                <div
                    className={`bg-[#F79932] px-4 flex items-center justify-between overflow-hidden transition-all duration-500 ${
                        isVisible ? "h-auto" : "h-0"
                    }`}
                >
                    <div className="flex justify-evenly items-center text-[#463E3D] [@media(max-height:800px)]:text-[12px] text-[14px] font-bold w-full justify-center py-2">
                        <span className="block text-center">FREE Delivery & Installation</span>
                        <span className="h-[20px] w-[2px] bg-[#463E3D] block"></span>
                        <span className="block text-center">3 Years Warranty</span>
                    </div>
                    <button onClick={() => setIsVisible(false)} className="rounded-full block">
                        <Image src={"/menu/black-close-circle.png"} alt="menu" width={30} height={30} />
                    </button>
                </div>
            } */}
                <div className="flex items-center gap-x-4 px-4 py-2">
                    <button onClick={() => setIsLeftMenuOpen(true)} className="text-black rounded-full">
                        <Image src={"/menu/menu.png"} alt="menu" width={30} height={30} />
                    </button>
                    <Link className="logo" href={"/"}>
                        <Image alt="logo" className="w-[150px] min-[1600px]:w-[200px]" width={300} height={80} src={"/logo.png"} />
                    </Link>
                </div>
                {/* Left Menu */}
                <div
                    className={`fixed inset-0 bg-[#F79932] text-white z-40 transform flex flex-col justify-between ${
                        isLeftMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 [@media(max-height:760px)]:overflow-y-auto`}
                >
                    <div>
                        {/* Close Button */}
                        <div className="flex justify-end items-center p-4 gap-4 mb-6">
                            <Link href={"#"} className="text-[16px] text-[#FFF8ED] px-6 py-2 rounded-md bg-black">
                                Let&apos;s Talk
                            </Link>
                            <button onClick={() => setIsLeftMenuOpen(false)} className="text-white ">
                                <Image src={"/menu/close-circle.png"} alt="close" width={40} height={40} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <ul className="p-4 space-y-4 text-lg font-medium">
                            <li>
                                <Link
                                    href={"/"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        setIsRightMenuOpen(true);
                                    }}
                                    className="flex justify-between w-full"
                                >
                                    <span className="text-[20px]">Explore Our Range</span>
                                    <Image src={"/product/arrow-right-white.png"} alt="arrow" width={30} height={30} />
                                </button>
                            </li>
                            <li>
                                <Link
                                    href={"/payment-plan"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    FlexiOwn Plan
                                </Link>
                            </li>
                            {/* <li>
                                <button
                                    onClick={() => {
                                        setIsRightMenuPlansOpen(true);
                                    }}
                                    className="flex justify-between w-full"
                                >
                                    <span className="text-[20px]">Payment Plans</span>
                                    <Image src={"/product/arrow-right-white.png"} alt="arrow" width={30} height={30} />
                                </button>
                            </li> */}
                            {/* <li>
                                <Link
                                    href={"/insights"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    Insights
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    href={"/sustainability"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    Sustainability
                                </Link>
                            </li>
                            <li className="border-b border-white pb-4">
                                <Link
                                    href={"/discover"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    Discover INTRIX
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/support"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/find-a-store"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    Find A Store
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href={"/payment-plan"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    FlexiOwn Plan
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link
                                    href={"events"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    Events
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    href={"/faq"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    FAQ
                                </Link>
                            </li>
                            {/* <li className="border-b border-white pb-4">
                                <Link
                                    href={"/for-business"}
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                    }}
                                    className="text-[20px]"
                                >
                                    For Business
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    {/* Social Icons */}
                    <div className="px-4 py-6">
                        <p className="text-[#FFF8ED] text-[16px] mb-2">Follow Us On</p>
                        <div className="flex space-x-6">
                            <Link href={"https://www.instagram.com/intrixgroup/"} target="_blank" className="text-[23px]">
                                <FontAwesomeIcon icon={faSquareInstagram} />
                            </Link>
                            <Link href={"https://www.linkedin.com/company/intrixgroup/"} target="_blank" className="text-[23px]">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                            <Link href={"https://www.facebook.com/IntrixMalaysia"} target="_blank" className="text-[23px]">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                            <Link href={"https://www.youtube.com/@intrixgroup"} target="_blank" className="text-[23px]">
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                            <Link href={"https://www.tiktok.com/@intrixonetap"} target="_blank" className="text-[23px]">
                                <FontAwesomeIcon icon={faTiktok} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Menu (Products Submenu) */}
                <div
                    className={`fixed inset-0 bg-[#F79932] text-white z-50 transform ${
                        isRightMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 [@media(max-height:760px)]:overflow-y-auto`}
                >
                    {/* Back Button */}
                    <div className="flex items-center p-4">
                        <button
                            onClick={() => {
                                setIsRightMenuOpen(false);
                            }}
                            className="text-white mr-4"
                        >
                            <Image src={"/menu/arrow_back.png"} alt="arrow" width={30} height={30} />
                        </button>
                        <h2 className="text-[20px] font-bold">Explore Our Range</h2>
                    </div>

                    {/* Submenu Items */}
                    <div className="p-4 space-y-4 mt-6">
                        <h3 className="text-[20px] font-bold border-b border-[#fff] pb-3">INTRIX One Tap</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/explore"
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                        setIsRightMenuOpen(false);
                                    }}
                                    className="text-[16px]"
                                >
                                    Overview
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/product/intrix-one-tap-5-in-1"
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                        setIsRightMenuOpen(false);
                                    }}
                                    className="text-[16px]"
                                >
                                    INTRIX One Tap 5-in-1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/product/intrix-one-tap-4-in-1"
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                        setIsRightMenuOpen(false);
                                    }}
                                    className="text-[16px]"
                                >
                                    INTRIX One Tap 4-in-1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/product/intrix-one-tap-2-in-1"
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                        setIsRightMenuOpen(false);
                                    }}
                                    className="text-[16px]"
                                >
                                    INTRIX One Tap 2-in-1
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href="/product/intrix-one-tap-lite"
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                        setIsRightMenuOpen(false);
                                    }}
                                    className="text-[16px]"
                                >
                                    INTRIX One Tap Lite
                                </Link>
                            </li> */}
                        </ul>

                        <h3 className="text-[20px] font-bold border-b border-[#fff] pb-3">Accessories</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/product/filter"
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                        setIsRightMenuOpen(false);
                                    }}
                                    className="text-[16px]"
                                >
                                    INTRIX All-in-One Filter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/product/font"
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                        setIsRightMenuOpen(false);
                                    }}
                                    className="text-[16px]"
                                >
                                    INTRIX Font
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Right Menu (Payment Plans Submenu) */}
                <div
                    className={`fixed inset-0 bg-[#F79932] text-white z-50 transform ${
                        isRightMenuPlansOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 [@media(max-height:760px)]:overflow-y-auto`}
                >
                    {/* Back Button */}
                    <div className="flex items-center p-4">
                        <button
                            onClick={() => {
                                setIsRightMenuPlansOpen(false);
                            }}
                            className="text-white mr-4"
                        >
                            <Image src={"/menu/arrow_back.png"} alt="arrow" width={30} height={30} />
                        </button>
                        <h2 className="text-[20px] font-bold">Payment Plans</h2>
                    </div>

                    {/* Submenu Items */}
                    <div className="p-4 space-y-4 mt-6">
                        <h3 className="text-[20px] font-bold border-b border-[#fff] pb-3">Payment Plans</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/payment-plan?tab=0"
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                        setIsRightMenuPlansOpen(false);
                                    }}
                                    className="text-[16px]"
                                >
                                    FlexiOwn Plan
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href="/payment-plan?tab=1"
                                    onClick={() => {
                                        setIsLeftMenuOpen(false);
                                        setIsRightMenuPlansOpen(false);
                                    }}
                                    className="text-[16px]"
                                >
                                    Easy Payment Plan
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
