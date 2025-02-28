"use client";
import Image from "next/image";
import Link from "next/link";
import InsightCards from "@/components/insights/InsightCards";
import InsightTrendingCards from "@/components/insights/InsightTrendingCards";
import { useEffect, useRef, useState } from "react";
import InsightSubscribeForm from "@/components/insights/InsightSubscribeForm";
import { getAllBlogs } from "@/service/insight-api/InsightServices";

function Insights() {
    const [isLoading, setIsLoading] = useState(false);
    const [blogList, setBlogList] = useState([]);
    const [latestBlog, setLatestBlog] = useState([]);
    const [trendingBlog, setTrendingBlog] = useState([]);
    const [otherBlog, setOtherBlog] = useState([]);
    const [nextCount, setNextCount] = useState(3);

    useEffect(() => {
        const handleInsightFirstLoad = async () => {
            setIsLoading(true);

            const latestBlogsObj = {
                length: 1,
                start: 0,
                category: "Latest",
            };

            const trendingBlogsObj = {
                length: 3,
                start: 0,
                category: "Trending",
            };
            const othersBlogsObj = {
                length: 3, // the initial number for others blog count is declared here, need to update the initial nextCount state as well if change
                start: 0,
                category: "Others",
            };

            try {
                const latestBlogs = await getAllBlogs(latestBlogsObj);
                const trendingBlogs = await getAllBlogs(trendingBlogsObj);
                const othersBlogs = await getAllBlogs(othersBlogsObj);

                const result = await Promise.all([latestBlogs, trendingBlogs, othersBlogs]);

                if (result[0] && result[1] && result[2]) {
                    setLatestBlog(result[0].blogs);
                    setTrendingBlog(result[1].blogs);
                    setOtherBlog(result[2].blogs);

                    if (result[2].hasMore) {
                        // in future want to add count for each load, just need to change the nextStart number return from api
                        setNextCount((prev) => (prev += result[2].nextStart));
                    }
                }
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        handleInsightFirstLoad();
    }, []);

    const handleGetOthersBlogs = async () => {
        setIsLoading(true);

        const obj = {
            length: nextCount,
            start: 0,
            category: "Others",
        };

        try {
            const result = await getAllBlogs(obj);
            if (result) {
                setOtherBlog(result.blogs);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="relative text-center mx-auto mb-4 mt-[55px] sm:mt-0 h-[75vh] sm:h-[850px] lg:h-[700px] min-[1441px]:h-[900px] insight_bg flex items-center">
                <div className="absolute top-0 w-[45vw] h-[800px] lg:h-[700px] min-[1441px]:h-[900px] vertical_overlay_bg md:block hidden"></div>
                <div className="absolute top-0 w-[100vw] h-[40vh] overlay_bg md:hidden block"></div>
                <div className="absolute bottom-0 min-[1441px]:top-[680px] w-[100vw] h-[12vh] lg:h-[300px] blur_skin_bg"></div>
                <div className="container mx-auto absolute px-4 left-0 right-0 md:mt-[-120px] top-[40px] sm:top-[100px] md:top-[unset]">
                    <p className="text-white text-[16px] sm:text-[30px] text-left leading-[1.2] mb-2 sm:mb-4 font-[Montserrat-Regular]">Insight</p>
                    <h1 className="text-white text-[24px] md:text-[30px] xl:text-[40px] font-[Mulish-Regular] font-bold md:font-[Mulish-Black] text-left leading-[1.2]">
                        Redefining <br /> Water Purification <br /> Through Innovation
                    </h1>
                </div>
            </div>

            <div className="px-4 mb-12 mt-0 max-[1023px]:mt-0 max-[1440px]:mt-[-100px] md:mb-24 container mx-auto z-[2] relative">
                <p className="mb-24 text-center font-[Montserrat-Regular] text-[20px] text-[#292929] max-w-[650px] mx-auto leading-[1.2]">
                    Welcome to INTRIX Insights – your one-stop hub for blogs, inspiration, practical how-tos, and expert advice on all things home
                    innovation and sustainable solutions.
                </p>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 auto-rows-min">
                    <div className="w-full">
                        <h2 className="text-[#292929] text-[24px] md:text-[32px] mb-2 md:mb-6">Latest</h2>
                        <InsightCards cards={latestBlog.slice(0, 1)} />
                    </div>
                    <div className="max-h-full">
                        <h2 className="text-[#292929] text-[24px] md:text-[32px] mb-2 md:mb-6 md:block hidden">Trending</h2>
                        <div className="flex flex-col gap-y-4 md:gap-y-6 overflow-y-auto min-[769px]:max-h-[468px] min-[1024px]:max-h-[575px] min-[1280px]:max-h-[682px] min-[1536px]:max-h-[790px]">
                            <InsightTrendingCards cards={trendingBlog} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-2 md:mb-6">
                    <h2 className="text-[#292929] text-[24px] md:text-[32px]">Other Insights</h2>
                    <div
                        onClick={() => handleGetOthersBlogs()}
                        className="hidden md:block rounded-full bg-[#292929] text-[15px] text-center px-6 py-2 hover:text-[#292929] hover:bg-white transition border-[#292929] text-white border"
                    >
                        Load more
                    </div>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-between mb-12">
                    <InsightCards cards={otherBlog} />
                </div>
                <div className="container mx-auto md:hidden block">
                    <Link
                        href={"#"}
                        className="block mx-auto rounded-full bg-[#292929] text-[15px] text-center px-6 py-2 hover:text-[#292929] hover:bg-white transition border-[#292929] text-white border"
                    >
                        Load more
                    </Link>
                </div>
            </div>
            <div className="my-6">
                <InsightSubscribeForm />
            </div>
        </>
    );
}

export default Insights;
