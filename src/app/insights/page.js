"use client";
import Image from "next/image";
import Link from "next/link";
import InsightCards from "@/components/insights/InsightCards";
import InsightTrendingCards from "@/components/insights/InsightTrendingCards";
import { useEffect, useRef, useState } from "react";
import FAQAccordionFlexiown from "@/components/FAQAccordionFlexiown";
import FAQAccordionEPP from "@/components/FAQAccordionEPP";
import ParticipatingBanks from "@/components/payment/ParticipatingBanks";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";
import { getAllBlogs } from "@/service/insight-api/InsightServices";

const cardData = [
    {
        title: "Title of Article Goes Here",
        imageSrc: "/insight/Link.png",
        description:
            "<p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...</p>",
        min: "5",
        tag: "Blogs",
        link: "#",
    },
];
const cardData2 = [
    {
        title: "Title of Article Goes Here",
        imageSrc: "/insight/Link.png",
        description:
            "<p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...</p>",
        min: "5",
        tag: "Blogs",
        link: "#",
    },
    {
        title: "Title of Article Goes Here",
        imageSrc: "/insight/Link.png",
        description:
            "<p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...</p>",
        min: "5",
        tag: "Blogs",
        link: "#",
    },
    {
        title: "Title of Article Goes Here",
        imageSrc: "/insight/Link.png",
        description:
            "<p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...</p>",
        min: "5",
        tag: "Blogs",
        link: "#",
    },
];

const cardData3 = [
    {
        title: "Title of Article Goes Here",
        imageSrc: "/insight/Link.png",
        description:
            "<p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...</p>",
        min: "5",
        tag: "Blogs",
        link: "#",
    },
    {
        title: "Title of Article Goes Here",
        imageSrc: "/insight/Link.png",
        description:
            "<p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...</p>",
        min: "5",
        tag: "Blogs",
        link: "#",
    },
    {
        title: "Title of Article Goes Here",
        imageSrc: "/insight/Link.png",
        description:
            "<p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...</p>",
        min: "5",
        tag: "Blogs",
        link: "#",
    },
];

function Insights() {
    const [isLoading, setIsLoading] = useState(false);
    const [blogList, setBlogList] = useState([]);
    const [latestBlog, setLatestBlog] = useState([]);
    const [trendingBlog, setTrendingBlog] = useState([]);
    const [otherBlog, setOtherBlog] = useState([]);

    useEffect(() => {
        const handleGetAllBlogs = async () => {
            setIsLoading(true);

            const obj = {
                length: 10,
                start: 0,
                // type: 1, // change based on type needed
                // created_date:''
            };

            // console.log(obj);

            try {
                const result = await getAllBlogs(obj);
                if (result) {
                    setBlogList(result.blogs);
                    setLatestBlog(result.blogs.filter((item) => item.category === "Latest"));
                    setTrendingBlog(result.blogs.filter((item) => item.category === "Trending"));
                    setOtherBlog(result.blogs.filter((item) => item.category === "Others"));
                }
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        handleGetAllBlogs();
    }, []);

    return (
        <>
            <div className="relative text-center mx-auto mb-4 mt-[55px] sm:mt-0 h-[75vh] sm:h-[850px] lg:h-[700px] min-[1441px]:h-[900px] insight_bg flex items-center">
                <div className="absolute top-0 w-[45vw] h-[700px] min-[1441px]:h-[900px] vertical_overlay_bg md:block hidden"></div>
                <div className="absolute top-0 w-[100vw] h-[40vh] overlay_bg md:hidden block"></div>
                <div className="absolute md:bottom-[unset] bottom-0 lg:top-[550px] min-[1441px]:top-[680px] w-[100vw] h-[12vh] sm:h-[300px] blur_skin_bg"></div>
                <div className="container mx-auto absolute px-4 left-0 right-0 md:mt-[-120px] md:top-[unset] top-[20px]">
                    <p className="text-white text-[16px] sm:text-[30px] text-left leading-[1.2] mb-2 sm:mb-4 font-[Montserrat-Regular]">Insight</p>
                    <h1 className="text-white text-[24px] md:text-[30px] xl:text-[40px] font-[Mulish-Regular] font-bold md:font-[Mulish-Black] text-left leading-[1.2]">
                        Redefining <br /> Water Purification <br /> Through Innovation
                    </h1>
                </div>
            </div>

            <div className="px-4 mb-12 mt-0 md:mt-24 md:mb-24 container mx-auto z-[2] relative">
                <p className="mb-12 text-center font-[Montserrat-Regular] text-[20px] text-[#292929] max-w-[650px] mx-auto leading-[1.2]">
                    Welcome to INTRIX Insights – your one-stop hub for blogs, inspiration, practical how-tos, and expert advice on all things home
                    innovation and sustainable solutions.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="w-full">
                        <h2 className="text-[#292929] text-[24px] md:text-[32px] mb-2 md:mb-6">Latest</h2>
                        <InsightCards cards={latestBlog.slice(0, 1)} />
                    </div>
                    <div>
                        <h2 className="text-[#292929] text-[24px] md:text-[32px] mb-2 md:mb-6 md:block hidden">Trending</h2>
                        <div className="flex flex-col gap-y-6">
                            <InsightTrendingCards cards={trendingBlog} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-2 md:mb-6">
                    <h2 className="text-[#292929] text-[24px] md:text-[32px]">Other Insights</h2>
                    <Link
                        href={"#"}
                        className="hidden md:block rounded-full bg-[#292929] text-[15px] text-center px-6 py-2 hover:text-[#292929] hover:bg-white transition border-[#292929] text-white border mb-6"
                    >
                        Load more
                    </Link>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-between mb-12">
                    <InsightCards cards={otherBlog} />
                </div>
            </div>
        </>
    );
}

export default Insights;
