"use client";

import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import CartDetail from "../cart-detail/CartDetail";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";
import { useParams } from "next/navigation";

function OrderStatus({ itemList }) {
    const params = useParams();

    console.log(itemList);

    const FailedOrder = () => (
        <div className="flex items-center flex-col min-h-[1500px] justify-end">
            <div className="container w-full flex">
                <div className="w-full flex flex-col justify-center items-center text-[#343637] mb-24">
                    <FontAwesomeIcon icon={faCircleCheck} color="#343637" size="4x" className="w-[100px] h-[100px] mb-4" />
                    <span className="text-[54px]">Order Failed!</span>
                    <p className="text-[24px] text-[#343637]">The order confirmation has been sent to {itemList?.email}</p>
                </div>
                <Link href={"/"}>
                    <FontAwesomeIcon icon={faXmark} color="#343637" size="2x" />
                </Link>
            </div>

            <div className="container w-full flex justify-center">
                <CartDetail itemList={itemList} />
            </div>
            <div className="my-12 lg:my-24">
                <ExploreOurTabs />
            </div>
        </div>
    );

    const SuccessOrder = () => (
        <div className="flex items-center flex-col min-h-[1500px] justify-end">
            <div className="container w-full flex">
                <div className="w-full flex flex-col justify-center items-center text-[#343637] mb-24">
                    <FontAwesomeIcon icon={faCircleCheck} color="#343637" size="4x" className="w-[100px] h-[100px] mb-4" />
                    <span className="text-[54px]">Thanks For Your Order!</span>
                    <p className="text-[24px] text-[#343637]">The order confirmation has been sent to {itemList?.email}</p>
                </div>
                <Link href={"/"}>
                    <FontAwesomeIcon icon={faXmark} color="#343637" size="2x" />
                </Link>
            </div>

            <div className="container w-full flex justify-center">
                <CartDetail itemList={itemList} />
            </div>
            <div className="my-12 lg:my-24">
                <ExploreOurTabs />
            </div>
        </div>
    );
    return params?.orderStatus === "success" ? <SuccessOrder /> : <FailedOrder />;
}

export default OrderStatus;
