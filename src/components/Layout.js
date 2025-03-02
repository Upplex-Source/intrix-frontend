"use client"; // Must be a Client Component
import { Suspense, useEffect } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "@/components/Loader";
import SplashScreen from "./splash-screen/SplashScreen";
import Loading from "./splash-screen/Loading";

export default function Layout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    // let isMobile = window.innerHeight > window.innerWidth;

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 10000);
        // console.log(isVisible)
    }, []);

    useEffect(() => {
        // Only execute this in the browser
        if (typeof window !== "undefined") {
            setIsMobile(window.innerHeight > window.innerWidth);
        }
    }, []);

    if ((pathname == "/") & isLoading) {
        return <SplashScreen />;
    }

    if ((pathname == "/discover") & isLoading) {
        return <Loading />;
    }

    return (
        <>
        <div className="whole-page-wrapper relative">
            {/* {["/discover"].includes(pathname) ? null : <Header isVisible={isVisible} setIsVisible={setIsVisible} />} */}
            <Header isVisible={isVisible} setIsVisible={setIsVisible} />
            <Suspense fallback={<Loader />}>
                {isMobile ? (
                    children
                ) : (
                    <div
                        className={`transition-all duration-500 ${
                            isVisible && ["/"].includes(pathname)
                                ? "[@media(max-height:800px) and (min-width: 800px)]:mt-[100px] mt-[90px] md:mt-[155px]"
                                : "[@media(max-height:800px) and (min-width: 800px)]:mt-[70px] mt-[50px] md:mt-[120px]"
                        } ${["/discover"].includes(pathname) ? "!mt-[0]" : ""}`}
                    >
                        {children}
                    </div>
                )}
            </Suspense>
            {["/", "/test", "/test2", "/discover"].includes(pathname) ? null : <Footer />}
            </div>
        </>
    );
}
