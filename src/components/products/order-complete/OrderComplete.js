import React, { useEffect } from "react";
import CartDetail from "../cart-detail/CartDetail";
import Link from "next/link";
import { checkout } from "@/service/order-api/OrderService";
import Cookies from "js-cookie";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

function OrderComplete({
    status,
    cartItemList,
    setCartItemList,
    handleQuantityChange,
    handleAddOnQuantityChange,
    handleCartClose,
    formValue,
    promoCode,
    getPaymentPlan,
}) {
    useEffect(() => {
        const handleCompleteCheckout = async () => {
            const checkoutObj = {
                session_key: Cookies.get("session_key"),
                promo_code: promoCode,
                fullname: formValue.fullname,
                company_name: formValue.companyName,
                email: formValue.email,
                phone_number: formValue.phone,
                address_1: formValue.address1,
                address_2: formValue.address2,
                city: formValue.city,
                state: formValue.state,
                postcode: Number(formValue.postcode),
                country: formValue.country,
                remarks: formValue.notes,
            };

            try {
                const result = await checkout(checkoutObj);
                if (result) {
                    console.log(result);
                    // setCartItemList();
                    Cookies.remove("session_key");
                }
            } catch (error) {
                console.log(error);
            }
        };
        handleCompleteCheckout();
    }, []);

    const completeOrder = () => {
        setCartItemList();
        handleCartClose();
    };

    return (
        <div className="flex flex-col min-h-[2800px] justify-end">
            <div className="w-full flex">
                <div className="w-full flex flex-col justify-center items-center text-[#343637] mb-24">
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        color="#343637"
                        size="4x"
                        className="w-[100px] h-[100px] mb-4"
                    />
                    <span className="text-[54px]">Thanks For Your Order!</span>
                    <p className="text-[24px] text-[#343637]">The order confirmation has been sent to 
                        <Link href="emilia78@gmail.com" className="text-[24px] text-[#343637]"> emilia78@gmail.com</Link>
                    </p>
                    
                </div>
                <div className="cursor-pointer" onClick={() => completeOrder()}>
                    <FontAwesomeIcon
                        icon={faXmark}
                        color="#343637"
                        size="2x"
                    />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <CartDetail
                    status={status}
                    cartItemList={cartItemList}
                    handleQuantityChange={handleQuantityChange}
                    handleAddOnQuantityChange={handleAddOnQuantityChange}
                    getPaymentPlan={getPaymentPlan}
                />
            </div>
            <div className="my-12 lg:my-24">
                <ExploreOurTabs />
            </div>
        </div>
    );
}

export default OrderComplete;
