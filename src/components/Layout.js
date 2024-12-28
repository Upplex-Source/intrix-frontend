"use client"; // Must be a Client Component
import { Suspense } from 'react';
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import Loader from "@/components/Loader";

export default function Layout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
            {["/", "/test", "/", "/discover"].includes(pathname) ? null : <Footer />}
        </>
    );
}
