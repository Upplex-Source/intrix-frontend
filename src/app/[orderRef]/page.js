"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Cookies from "js-cookie";
import { retrieveUserOrder } from "@/service/order-api/OrderService";
import CartDetail from "./cart-detail/CartDetail";
import { useParams } from "next/navigation";
import OrderStatus from "./[orderStatus]/page";

function OrderComplete() {
    const [itemList, setItemList] = useState({});
    const params = useParams();

    useEffect(() => {
        console.log(params);
        const handleFirstLoad = async () => {
            const cartListObj = {
                reference: params?.orderRef,
                per_page: 10,
            };

            try {
                const result = await retrieveUserOrder(cartListObj);

                if (result) {
                    setItemList(result.orders.data[0]);
                    Cookies.remove("session_key");
                }
            } catch (error) {
                console.log(error);
            }
        };
        handleFirstLoad();
    }, []);

    return <OrderStatus itemList={itemList} />;
}

export default OrderComplete;
