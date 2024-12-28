"use client"; // Must be a Client Component
import { Suspense } from 'react';
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "@/components/Loader";

export default function Layout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
            <Header isVisible={isVisible} setIsVisible={setIsVisible} />
            <Suspense fallback={<Loader />}>
                <div
                    className={`transition-all duration-500 ${
                        isVisible ? "mt-[90px] md:mt-[155px]" : "mt-[50px] md:mt-[120px]"
                    }`}
                >
                    {children}
                </div>
            </Suspense>
            {["/", "/test", "/", "/discover"].includes(pathname) ? null : <Footer />}
        </>
    );
}
