"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartDetail from "../cart-detail/CartDetail";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";
import { retrieveUserOrder, retryPayment } from "@/service/order-api/OrderService";
import { useParams } from "next/navigation";
import Cookies from "js-cookie";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function OrderComplete() {
    const [itemList, setItemList] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const handleFirstLoad = async () => {
            const cartListObj = {
                reference: params?.orderRef,
                per_page: 10,
            };

            try {
                const result = await retrieveUserOrder(cartListObj);

                if (result) {
                    setItemList(result.orders.data[0]);
                    if (params?.orderStatus === "success") {
                        Cookies.remove("session_key");
                    }
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        handleFirstLoad();
    }, []);

    const handleRetryPayment = async () => {
        setIsLoading(true);
        const retryPaymentObj = {
            reference: params?.orderRef,
        };

        try {
            const result = await retryPayment(retryPaymentObj);

            if (result) {
                window.location.replace(result?.payment_url);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const FailedOrder = () => (
        <div className="flex items-center flex-col min-h-[1500px] justify-end">
            <div className="container w-full flex">
                <div className="w-full flex flex-col justify-center items-center text-[#343637] mb-24">
                    <FontAwesomeIcon icon={faCircleXmark} color="#343637" size="4x" className="w-[100px] h-[100px] mb-4" />
                    <span className="text-[54px]">Order Failed!</span>
                    <p className="text-[24px] text-[#343637]">Your payment has failed!</p>
                </div>
                <Link href={"/"}>
                    <FontAwesomeIcon icon={faXmark} color="#343637" size="2x" />
                </Link>
            </div>

            <div className="container w-full flex justify-center">
                <CartDetail itemList={itemList} />
            </div>
            <div className="container w-full flex justify-center">
                <div
                    onClick={() => !isLoading && handleRetryPayment()}
                    className="cursor-pointer relative w-1/5 buy_now_btn text-center bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                >
                    <span>Retry Payment</span>
                </div>
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

export default OrderComplete;
