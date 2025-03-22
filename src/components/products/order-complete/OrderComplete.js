import React, { useEffect } from "react";
import CartDetail from "../cart-detail/CartDetail";
import Image from "next/image";
import { checkout } from "@/service/order-api/OrderService";
import Cookies from "js-cookie";

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

    const completeOrder =() => {
        setCartItemList();
        handleCartClose()
    }

    return (
        <div className="w-4/5 flex flex-col mt-[500px]">
            <div className="w-full flex">
                <div className="w-full flex flex-col justify-center items-center text-[white] mb-24">
                    <span>Thanks For Your Order!</span>
                    <span>The order confirmation has been sent to emilia78@gmail.com</span>
                </div>
                <div className="cursor-pointer" onClick={()=>completeOrder()}>
                    <Image src={"/menu/close-circle.png"} alt="close btn" className="w-[50px] min-[1600px]:w-[70px]" width={70} height={70} />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-3/5">
                    <CartDetail
                        status={status}
                        cartItemList={cartItemList}
                        handleQuantityChange={handleQuantityChange}
                        handleAddOnQuantityChange={handleAddOnQuantityChange}
                        getPaymentPlan={getPaymentPlan}
                    />
                </div>
                {/* <div className="w-2/5">
                    <div></div>
                </div> */}
            </div>
        </div>
    );
}

export default OrderComplete;
