"use client"; // Must be a Client Component
import { Suspense, useEffect } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "@/components/Loader";
import SplashScreen from "./splash-screen/SplashScreen";

export default function Layout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <>
            <Header isVisible={isVisible} setIsVisible={setIsVisible} />
            <Suspense fallback={<Loader />}>
                <div className={`transition-all duration-500 ${isVisible ? "[@media(max-height:800px)]:mt-[100px] mt-[90px] md:mt-[155px]" : "[@media(max-height:800px)]:mt-[85px] mt-[50px] md:mt-[120px]"}`}>{children}</div>
            </Suspense>
            {["/", "/test", "/", "/discover"].includes(pathname) ? null : <Footer />}
        </>
    );
}
