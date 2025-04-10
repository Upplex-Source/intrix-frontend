"use client"; // Must be a Client Component
import { Suspense, useEffect } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "@/components/Loader";
import SplashScreen from "./splash-screen/SplashScreen";
import Loading from "./splash-screen/Loading";

const MAINTENANCE_MODE = false;

export default function Layout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (MAINTENANCE_MODE && pathname !== '/maintenance') {
            router.push('/maintenance');
            return;
        }
        
        if (!MAINTENANCE_MODE || pathname === '/maintenance') {
            // Timer for loading state
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
            
            // Check for mobile
            if (typeof window !== "undefined") {
                setIsMobile(window.innerHeight > window.innerWidth);
            }
            
            return () => clearTimeout(timer);
        }
    }, [pathname, router]);

    // Don't run any other code if we're redirecting to maintenance
    if (MAINTENANCE_MODE && pathname !== '/maintenance') {
        return null; 
    }

    if ((pathname === "/") && isLoading) {
        return <SplashScreen />;
    }

    if ((pathname === "/discover") && isLoading) {
        return <Loading />;
    }

    return (
        <>
        <div className="whole-page-wrapper relative">
            {/* {["/discover"].includes(pathname) ? null : <Header isVisible={isVisible} setIsVisible={setIsVisible} />} */}
            {/* <Header isVisible={isVisible} setIsVisible={setIsVisible} /> */}
            {["/maintenance"].includes(pathname) ? null : <Header isVisible={isVisible} setIsVisible={setIsVisible} />}
            <Suspense fallback={<Loader />}>
                {isMobile ? (
                    children
                ) : (
                    <div
                        className={`transition-all duration-500 ${
                            isVisible && ["/"].includes(pathname)
                                ? "[@media(max-height:800px) and (min-width: 800px)]:mt-[100px] mt-[90px] md:mt-[155px]"
                                : "[@media(max-height:800px) and (min-width: 800px)]:mt-[70px] mt-[50px] md:mt-[100px]"
                        } ${["/discover", "/maintenance"].includes(pathname) ? "!mt-[0]" : ""}`}
                    >
                        {children}
                    </div>
                )}
            </Suspense>
            {["/", "/test", "/maintenance", "/discover"].includes(pathname) ? null : <Footer />}
            </div>
        </>
    );
}
