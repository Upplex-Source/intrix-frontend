import React from "react";
import CartDetail from "../cart-detail/CartDetail";
import Image from "next/image";

function OrderComplete({ status, cartItemList, handleQuantityChange, handleCartClose }) {
    return (
        <div className="w-4/5 flex flex-col ">
            <div className="w-full flex">
                <div className="w-full flex flex-col justify-center items-center text-[white] mb-24">
                    <span>Thanks For Your Order!</span>
                    <span>The order confirmation has been sent to emilia78@gmail.com</span>
                </div>
                <div className="cursor-pointer" onClick={handleCartClose}>
                    <Image src={"/menu/close-circle.png"} alt="close btn" className="w-[50px] min-[1600px]:w-[70px]" width={70} height={70} />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-3/5">
                    <CartDetail status={status} cartItemList={cartItemList} handleQuantityChange={handleQuantityChange} />
                </div>
                {/* <div className="w-2/5">
                    <div></div>
                </div> */}
            </div>
        </div>
    );
}

export default OrderComplete;
