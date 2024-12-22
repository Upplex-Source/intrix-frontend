"use client"; // Must be a Client Component

import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathname = usePathname();

    // Extract page name from the path
    const pageName = pathname === "/" ? "home" : pathname.replace("/", "");

    return (
        <>
            <Header />
            {children}
            {["/", "/test", "/"].includes(pathname) ? null : <Footer />}

        </>
    );
}
