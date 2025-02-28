"use client";
import Image from "next/image";
import Link from "next/link";
import InsightCards from "@/components/insights/InsightCards";
import InsightTrendingCards from "@/components/insights/InsightTrendingCards";
import { useEffect, useRef, useState } from "react";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import { getAllBlogs } from "@/service/insight-api/InsightServices";

function Business() {
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
            <div className="relative text-center mx-auto mb-4 mt-[55px] sm:mt-0 h-[75vh] sm:h-[850px] lg:h-[700px] min-[1441px]:h-[900px] business_bg flex items-center">
                <div className="absolute top-0 w-[45vw] h-[800px] lg:h-[700px] min-[1441px]:h-[900px] vertical_overlay_bg md:block hidden"></div>
                <div className="absolute top-0 w-[100vw] h-[40vh] overlay_bg md:hidden block"></div>
                <div className="absolute bottom-0 min-[1441px]:top-[680px] w-[100vw] h-[12vh] lg:h-[300px] blur_skin_bg"></div>
                <div className="container mx-auto absolute px-4 left-0 right-0 md:mt-[-120px] md:top-[unset] top-[20px]">
                    <p className="text-white text-[16px] sm:text-[30px] text-left leading-[1.2] mb-2 sm:mb-4 font-[Montserrat-Regular]">
                        Our Partners
                    </p>
                    <h1 className="text-white text-[24px] md:text-[30px] xl:text-[40px] font-[Mulish-Regular] font-bold md:font-[Mulish-Black] text-left leading-[1.2]">
                        Designing Kitchens <br /> Made Simple: Insights <br /> for Interior Designers
                    </h1>
                </div>
            </div>

            <div className="px-4 mb-12 mt-0 max-[1023px]:mt-0 max-[1440px]:mt-[-100px] md:mb-24 container mx-auto z-[2] relative">
                <p className="mb-12 md:mb-24 text-center font-[Montserrat-Regular] text-[20px] text-[#292929] max-w-[820px] mx-auto leading-[1.2]">
                    Explore inspiration, tips, and tricks for crafting stunning kitchen interiors.
                    <br />
                    <br />
                    Learn how to seamlessly integrate INTRIX taps into your designs, stay updated on trends, and create the ultimate kitchen that
                    combines style and functionality.
                </p>

                <div className="flex items-center mb-2 md:mb-6">
                    <h2 className="text-[#292929] text-[24px] md:text-[32px]">Featured Kitchen</h2>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-between mb-12">
                    <InsightCards cards={otherBlog} />
                </div>
                <div className="container mx-auto">
                    <div
                        onClick={() => handleGetOthersBlogs()}
                        className="block mx-auto rounded-full bg-[#292929] text-[15px] text-center px-6 py-2 hover:text-[#292929] hover:bg-white transition border-[#292929] text-white border w-full md:w-[200px]"
                    >
                        Load more
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 auto-rows-min mt-12 md:mt-24">
                    <div className="w-full">
                        <h2 className="text-[#292929] text-[24px] md:text-[32px] mb-2 md:mb-6">Designer of The Month</h2>
                        <InsightCards cards={latestBlog.slice(0, 1)} />
                    </div>
                    <div className="max-h-full">
                        <h2 className="text-[#292929] text-[24px] md:text-[32px] mb-2 md:mb-6 md:block hidden">Trending</h2>
                        <div className="flex flex-col gap-y-4 md:gap-y-6 overflow-y-auto min-[769px]:max-h-[468px] min-[1024px]:max-h-[575px] min-[1280px]:max-h-[682px] min-[1536px]:max-h-[790px]">
                            <InsightTrendingCards cards={trendingBlog} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-6">
                <ExperienceCentreForm />
            </div>
        </>
    );
}

export default Business;
