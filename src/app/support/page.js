"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import InstallationExperienceCentreForm from "@/components/InstallationExperienceCentreForm";
import SupportCards from "@/components/SupportCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) return;

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      if (currentTab) {
        setTabUnderlineLeft(currentTab.offsetLeft);
        setTabUnderlineWidth(currentTab.clientWidth);
      }
    };

    setTabPosition();
  }, [activeTabIndex]);


  const cardData = [
    {
      title: "ONE",
      imageSrc: "/support/sms.png",
      description: "Contact Us Via Email",
    },
    {
      title: "TWO",
      imageSrc: "/support/video.png",
      description: "Video Call Via Zoom",
    },
    {
      title: "THREE",
      imageSrc: "/support/Vector.png?v=1.1",
      description: "Chat With Us On Whatsapp",
    },
  ];

  const bronchure = [
    {
      title: "PRODUCT BROCHURE",
      imageSrc: "/support/pdf-file.png",
      description: "INTRIX One Tap 5-IN-1",
    },
    {
      title: "PRODUCT BROCHURE",
      imageSrc: "/support/pdf-file.png",
      description: "INTRIX One Tap 5-IN-1",
    },
    {
      title: "PRODUCT BROCHURE",
      imageSrc: "/support/pdf-file.png",
      description: "INTRIX One Tap 5-IN-1",
    },
    {
      title: "PRODUCT BROCHURE",
      imageSrc: "/support/pdf-file.png",
      description: "INTRIX One Tap 5-IN-1",
    },
  ];
  
  const guides = [
    {
      title: "GUIDES",
      imageSrc: "/support/user-guide.png",
      description: "Installation Guide",
    },
    {
      title: "GUIDES",
      imageSrc: "/support/user-guide.png",
      description: "Space Preparation Guide",
    },
    {
      title: "GUIDES",
      imageSrc: "/support/user-guide.png",
      description: "Daily Care Guide",
    },
  ];
  const videos = [
    {
      title: "VIDEO",
      imageSrc: "/support/tutorial.png",
      description: "Video Tutorial 1",
    },
    {
      title: "VIDEO",
      imageSrc: "/support/tutorial.png",
      description: "Video Tutorial 2",
    },
    {
      title: "VIDEO",
      imageSrc: "/support/tutorial.png",
      description: "Video Tutorial 3",
    },
  ];

  let allTabs = [
    {
      id: "product_care",
      name: "Product Care",
      content: (
        <>
        <h2 className="font-bold text-[#343637] text-center mb-4 text-[24px] md:text-[40px] md:mt-0 mt-12">How Can We Help?</h2>
        <p className="font-[Montserrat-Regular] max-w-[750px] mx-auto w-fit text-center md:text-[20px] text-[#292929] px-4">We&apos;re here to assist you with every step, from quick answers to detailed support. Explore our resources or connect with us for tailored assistance.</p>
            
        <div className="sm:container mx-auto mb-6 sm:px-4">
          <h2 className="font-bold text-[#343637] mb-2 mt-12 text-[20px] md:text-[30px] text-center">Easy as One-2-3</h2>
          <p className="font-[Montserrat-Regular] md:text-[16px] text-[#292929] mb-6 text-center px-4">Learn to change the One Tap filter cartridge at home with our step-by-step video.</p>
          
          <div className="relative mb-6">
              {/* <video
              preload="auto"
              ref={headerVideoRef}
              className="w-full"
              onClick={handleVideoClick}
              >
              <source src="/videos/support.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              </video>
              {showPlayIcon && (
              <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="absolute w-[50px] h-[50px] md:w-[120px] md:h-[120px] inset-0 m-auto text-white text-6xl md:text-[12rem] cursor-pointer z-10"
                  onClick={handlePlayPause}
              />
              )} */}
              <video width="100%" height="100" controls preload="none" poster="/support/support_video_thumbnail.png">
                  <source src="/videos/support.mp4" type="video/mp4" />
              </video>
          </div>
        </div>
        <div className="container mx-auto mb-6 px-4">
          
          <FAQAccordion />
        </div>
        <ExperienceCentreForm />
        </>
      ),
    },
    {
      id: "installation",
      name: "Installation",
      content: (
        <>
        <div className="container mx-auto mb-6 px-4">
          <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[30px] text-center md:block hidden">Ready To Install Your INTRIX?</h2>
          <h2 className="font-bold text-[#343637] text-[24px] md:text-[30px] text-center md:block hidden">Here&apos;s What You Need At Home.</h2>
          <h2 className="font-bold text-[#343637] text-[24px] md:hidden text-center block max-w-[280px] leading-[1.2] mx-auto md:mt-0 mt-12">Ready To Install Your INTRIX? Here&apos;s What You Need At Home.</h2>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-6 justify-between mb-12 md:mb-24 px-0 sm:px-4">
          <div className="w-full md:w-1/3">
            <Image alt="delivery" className="block object-cover w-full lg:max-h-[300px]" src={'/support/image.png'} width={500} height={500} />
            <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1] px-4 sm:px-0">
            Ample Space Below Kitchen Sink
            </h4>
            <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2] px-4 sm:px-0">
              <p className="mb-4">The Command Centre fits neatly under the counter, requiring a space* of just W190 x H360 x D340 mm.</p>
              <p className="mb-4">This leaves you with all the space you need to store your other kitchen essentials!</p>
              <p className="">*For INTRIX One Tap 5-in-1 model, an additional space of W180 x H370 x D320 mm is required for the second command centre.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <Image alt="delivery" className="block object-cover w-full lg:max-h-[300px]" src={'/support/plug.png'} width={500} height={500} />
            <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1] px-4 sm:px-0">
            13A Plug Point
            </h4>
            <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2] px-4 sm:px-0">
              <p className="mb-4">All you need is a 13A plug point beneath your counter and space for the unit.</p>
              <p className="mb-4">If a plug point isn&apos;t available under the sink, our installation team can extend a wire from the nearest outlet within 3 metres and install a new plug-point there.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <Image alt="delivery" className="block object-cover w-full lg:max-h-[300px]" src={'/support/kitchen3.png'} width={500} height={500} />
            <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1] px-4 sm:px-0">
            One Tap, Many Tops
            </h4>
            <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2] px-4 sm:px-0">
              <p className="mb-4">We can install the tap on various surfaces, including quartz, marble, granite, tile, cement, stainless steel, and wood.</p>
              <p className="mb-4">The entire process typically takes 1 to 2 hours, including drilling a hole for the One Tap faucet installation and making the necessary connections.</p>
              <p className="">Installation is provided for FREE with every INTRIX One Tap purchase.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-6 justify-between mb-24 px-0 sm:px-4">
          <div className="w-full md:w-1/3">
            <Image alt="delivery" className="block object-cover w-full lg:max-h-[300px]" src={'/support/team.png'} width={500} height={500} />
            <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1] px-4 sm:px-0">
            INTRIX Certified Technician Team
            </h4>
            <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2] px-4 sm:px-0">
              <p className="mb-4">Rest assured, every installation is performed by our certified technicians, who are skilled in both plumbing and electrical work. </p>
              <p className="mb-4">Their expertise ensures a smooth and professional process, and they&apos;ll be on hand to provide technical support throughout the installation.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <Image alt="delivery" className="block object-cover w-full lg:max-h-[300px]" src={'/support/installation.png'} width={500} height={500} />
            <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1] px-4 sm:px-0">
            Dust-Free Installation Process
            </h4>
            <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2] px-4 sm:px-0">
              <p className="mb-4">While the installation involves drilling a hole on your countertop, we take every precaution to ensure your kitchen stays clean and mess-free. </p>
              <p className="mb-4">Once the job is done, we&apos;ll leave your space spotless, so you can enjoy your new INTRIX One Tap without any hassle.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <Image alt="delivery" className="block object-cover w-full lg:max-h-[300px]" src={'/support/manager.png'} width={500} height={500} />
            <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1] px-4 sm:px-0">
            Dedicated Relationship Manager
            </h4>
            <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2] px-4 sm:px-0">
              <p className="mb-4">Have questions or need assistance during installation? Our dedicated Relationship Manager is here to help.</p>
              <p className="mb-4">Professionally trained to address your concerns, they&apos;ll ensure all your queries are answered and any issues resolved. You can reach them at <Link href="tel:+60123671380">+60123671380</Link> or WhatsApp us for support.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
        <FAQAccordion />
        </div>
        <div className="my-6">
          <InstallationExperienceCentreForm />
        </div>
        {/* <div className="flex md:flex-row flex-col items-center justify-between gap-6 md:gap-24 my-12 md:my-24 container mx-auto">
          <div className="relative w-full md:w-1/4">
            <h3 className="w-[120px] font-bold text-[2em] leading-[1.1] text-[#292929] absolute right-4">Our Delivery Policy</h3>
            <Image alt="delivery" className="block max-w-[300px]" src={'/support/delivery-truck.png'} width={500} height={500} />
          </div>
          <div className="w-full text-[14px] md:text-[16px] xl:text-[20px] text-[#292929] font-[Montserrat-Regular]">
            <p className="">Delivery will be made to the address specified by you when you register on the website, provided the address is within Malaysia. You have the ability to change this address through the &quot;edit profile&quot; feature and during the confirmation stage at the checkout. It is your responsibility to ensure you are available to receive the delivery.</p>
            <p className="mt-6">When an order is accepted, we will do our best to ensure that your order will be dispatched and installed (if required) within 7 working days of order placement. This is subject to stock availability and receipt of clear funds, however INTRIX cannot be held liable for:</p>
            <p className="mt-6">(a) any failure or late deliveries for any reason</p>
            <p className="">(b) any damage or loss due to unloading or packaging; or</p>
            <p className="">(c) damage to property caused upon entering premises to deliver the products</p>
            <p className="mt-6">We will, however, work with our appointed third-party courier services and yourself to ensure a smooth delivery. Notwithstanding the foregoing, in the event prior to the cancellation of your order, we agree to redeliver your order on your request, as long as you agree to pay such re-delivery charges.</p>
          </div>
        </div> */}
        <div className="container mx-auto mb-6 px-4">
          <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[30px] text-center md:text-left">Didn&apos;t Find What You Were Looking For? Let&apos;s Chat.</h2>
        </div>
        <div className="my-6 px-4">
        <SupportCards cards={cardData} />
        </div>
        </>
      ),
    },
    {
      id: "returns",
      name: "Returns & Refunds",
      content: (
        <>
          <div className="container mx-auto mb-6 px-4">
            <h2 className="font-bold text-[#343637] text-[24px] md:text-[30px] text-center md:block hidden">Questions about refunds or returns?</h2>
            <h2 className="font-bold text-[#343637] text-[24px] md:text-[30px] text-center md:block hidden">Let us make it right - find all the details here.</h2>
            <h2 className="font-bold text-[#343637] text-[24px] md:hidden text-center block max-w-[380px] leading-[1.2] mx-auto md:mt-0 mt-12">Questions about refunds or returns? Let us make it right - find all the details here.</h2>
          </div>
          <div className="flex md:flex-row flex-col items-start justify-between gap-6 md:gap-8 my-12 md:my-24 container mx-auto px-4">
            <div className="relative w-full md:w-2/5 md:pt-[150px]">
              <h3 className="font-bold text-[20px] md:text-[30px] leading-[1.1] text-[#292929] md:absolute right-4 top-0 text-center md:text-left">Returns &amp; Refunds Policy</h3>
              <Image alt="transaction" className="block max-w-[200px] md:mx-0 mx-auto my-6 md:my-0" src={'/support/return.png'} width={500} height={500} />
            </div>
            <div className="w-full text-[14px] md:text-[16px] xl:text-[18px] text-[#292929] font-[Montserrat-Regular]">
              <p className="">We strive to ensure that you are satisfied with your purchase.</p>
              <p className="mt-6">Please review the following policy or returns and refunds related to products requiring installation:</p>
              <p className="mt-6 font-[Montserrat-Bold]">Inspection and Notification</p>
              <p className="">You are required to inspect the product model and verify your order during the installation arrangement. If you identify any incorrect models, please notify us in writing or contact our customer service team at <Link href="tel:1700816608" className="font-[Montserrat-Bold]">1-700-81-6608</Link> within <b className="font-[Montserrat-Bold]">7 days</b> of the product&apos;s delivery or installation.</p>
              <p className="mt-6 font-[Montserrat-Bold]">Conditions for Returns and Refunds</p>
              <p className="">We will accept returns and provide refunds subject to the following conditions:</p>
              <ul className="list-disc pl-8">
                <li>The product is being returned within Malaysia, and</li>
                <li>The site condition is deemed unsuitable for installation (verified by INTRIX Installation Personnel), or</li>
                <li>You are not satisfied with the product&apos;s performance (refer to the <b className="font-[Montserrat-Bold]">90-Days Tap Back Guaranteed</b> Terms).</li>
              </ul>
              <p className="mt-6 font-[Montserrat-Bold]">Return Process for Installed Products</p>
              <p className="">As the product requires installation:</p>
              <ul className="list-disc pl-8">
                <li>We will arrange for dismantling and retrieval of the unit at our cost.</li>
                <li>Original shipping costs are non-refundable.</li>
              </ul>
              <p className="mt-6 font-[Montserrat-Bold]">Warranty for Defective Products</p>
              <p className="">If the product is defective due to material or workmanship issues caused by us, we may offer one of the following, at our discretion:</p>
              <ul className="list-disc pl-8">
                <li>Repair of the product.</li>
                <li>Exchange for a replacement unit.</li>
                <li>Refund in accordance with these terms.</li>
              </ul>
              <p className="mt-4">All warranty-related returns will be processed within 14 working days from the date the returned goods are received by us.
              </p>
              <p className="mt-6 font-[Montserrat-Bold]">Additional Notes</p>
              <p className="">Returns are not accepted for reasons related to delivery timing.</p>
              <p className="">Please contact our customer service team for any further assistance.</p>
              </div>
          </div>
          <div className="flex md:flex-row flex-col items-start justify-between gap-6 md:gap-8 my-12 md:my-24 container mx-auto px-4 md:py-24 py-12 border-y border-[#421908]">
            <div className="relative w-full md:w-2/5 md:pt-[150px]">
              <h3 className="font-bold text-[20px] md:text-[30px] leading-[1.1] text-[#292929] md:absolute right-4 top-0 text-center md:text-left">90-Day Tap Back Guaranteed</h3>
              <Image alt="transaction" className="block max-w-[200px] md:mx-0 mx-auto my-6 md:my-0" src={'/support/tap_back.png'} width={500} height={500} />
            </div>
            <div className="w-full text-[14px] md:text-[16px] xl:text-[18px] text-[#292929] font-[Montserrat-Regular]">
              <p className="">We&apos;re confident you&apos;ll love your INTRIX product, but if it doesn&apos;t meet your expectations, let us make it right.</p>
              <p className="mt-6">We&apos;ve got you covered with a 90-Day Tap Back Guarantee policy.</p>
              <p className="mt-6">Simply email us at <Link href="mailto:hello@intrixgroup.com" className="font-[Montserrat-Bold]">hello@intrixgroup.com</Link>, and we&apos;ll take care of the rest. Your full purchase amount will be promptly refunded to your bank account within <b className="font-[Montserrat-Bold]">60 days</b>.</p>
              <p className="mt-6">Your satisfaction is our utmost priority!</p>
              </div>
          </div>
          <div className="container mx-auto px-4">
          <FAQAccordion />
          </div>
          <div className="container mx-auto mb-6 px-4">
            <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[30px] text-center md:text-left">Didn&apos;t Find What You Were Looking For? Let&apos;s Chat.</h2>
          </div>
          <div className="my-6 px-4">
          <SupportCards cards={cardData} />
          </div>
        </>
      ),
    },
    {
      id: "warranty",
      name: "Warranty & Resources",
      content: (
        <>
          <div className="flex md:flex-row flex-col items-center justify-between gap-6 md:gap-24 pb-12 md:pb-24 container mx-auto px-4 lg:px-12 md:border-b border-[#421908]">
            <h2 className="font-bold text-[#343637] text-[20px] md:hidden block text-center md:w-full leading-[1.2] w-[220px]">Worry Less With Our 3-Year Warranty</h2>
            <div className="relative w-full md:w-1/4">
              <Image alt="3 years shield" className="block max-w-[200px] md:mx-0 mx-auto md:my-6 md:my-0" src={'/support/shield.png'} width={500} height={500} />
            </div>
            <div className="w-full text-[14px] md:text-[16px] xl:text-[18px] text-[#292929] font-[Montserrat-Regular] border-t md:border-0 border-[#421908]">
              <h2 className="font-bold text-[#343637] mt-12 md:text-[30px] md:block hidden">Worry Less With Our 3-Year Warranty</h2>
              <p className="mt-6">Each INTRIX One Tap unit comes with a generous 3-year warranty covering any product defects—excluding our One Tap filter* which only requires change once a year.</p>
              <p className="mt-6">Enjoy full on-site support with comprehensive coverage for both parts and labour, all at no extra cost!</p>
              <p className="italic mt-6 text-[13px] md:text-[14px] xl:text-[17px]">*The filter lifespan may vary depending on the quality of incoming water. To ensure warranty validity, it is highly recommended to change your INTRIX Filter in a timely manner.</p>
            </div>
          </div>
          
          <div className="container mx-auto pb-12 px-4 border-b border-[#421908]">
            <FAQAccordion />
          </div>
          <div className="container mx-auto mb-6 px-4">
            <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[40px]">Guides &amp; Resources</h2>
            <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[30px]">Product Brochure</h2>
          </div>
          <div className="my-6 px-4 border-b border-[#421908]">
          <SupportCards cards={bronchure} />
          </div>
          <div className="container mx-auto mb-6 px-4">
            <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[30px]">Guides</h2>
          </div>
          <div className="my-6 px-4 border-b border-[#421908]">
          <SupportCards cards={guides} />
          </div>
          <div className="container mx-auto mb-6 px-4">
            <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[30px]">Videos</h2>
          </div>
          <div className="my-6 px-4">
          <SupportCards cards={videos} />
          </div>
        </>
      ),
    },
  ];
    return (
        <>
          <div className="text-center mx-auto md:mb-4 [@media(max-height:800px)]:h-[450px] xl:h-[700px] md:h-[600px] h-[500px] support_bg">
            <div className="absolute top-0 w-[100vw] h-[300px] overlay_bg"></div>
            <div className="absolute [@media(max-height:800px)]:top-[300px] [@media(max-height:700px)]:!top-[300px] xl:top-[510px] md:top-[450px] top-[300px] w-[100vw] h-[300px] blur_skin_bg"></div>
            <h1 className="relative text-[#fff] md:text-[30px] [@media(min-height:800px)]:mb-4 [@media(max-width:767px)]:mb-4 font-300 text-[16px] !font-[Mulish-Light] pt-12">Support</h1>
            <div className="overflow-x-scroll md:overflow-x-hidden w-full relative bg-[#E2DBC6] md:bg-transparent">
              <div className="flex-row relative mx-auto flex h-12 rounded-3xl bg-[#E2DBC6] px-2 backdrop-blur-sm md:mt-6 w-full sm:w-fit gap-4">
                <span
                  className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-1 transition-all duration-300"
                  style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                >
                  <span className="h-full w-full rounded-3xl bg-[#F79932]" />
                </span>
                {allTabs.map((tab, index) => {
                  const isActive = activeTabIndex === index;

                  return (
                    <button
                      key={tab.id}
                      ref={(el) => (tabsRef.current[index] = el)}
                      className={`${
                        isActive ? "text-white" : " bg-[#fff]"
                      } my-auto cursor-pointer select-none rounded-full px-4 text-center py-2 font-light text-[#292929] text-[14px] outline-0 block w-fit whitespace-nowrap`}
                      onClick={() => setActiveTabIndex(index)}
                    >
                      {tab.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
            {/* <div className="mt-4 relative h-full"> */}
              {allTabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`relative inset-0 transition-opacity duration-300 ${
                    activeTabIndex === index ? "opacity-100 z-[3] h-fit" : "absolute opacity-0 pointer-events-none hidden"
                  }`}
                >
                  {tab.content}
                </div>
              ))}
              
          {/* </div> */}
        </>
    );
}

export default Page;
