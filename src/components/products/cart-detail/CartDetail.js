import Image from "next/image";
import React from "react";

function CartDetail({ status, cartItemList, handleQuantityChange }) {
    return (
        <div className="bg-black text-white p-4">
            <div className="grid grid-cols-5 text-sm border-b border-white">
                <div className="pb-4 col-span-2">Product</div>
                <div className="pb-4 text-center">Quantity</div>
                <div className="pb-4 text-right">Price</div>
                <div className="pb-4 text-right">Subtotal</div>
            </div>
            {cartItemList?.cart_metas?.map((cartItem) => (
                <div key={cartItem.id} className="grid grid-cols-5 my-2 py-4 border-b border-white">
                    <div className="flex items-center gap-x-4 col-span-2">
                        <div className="bg-white flex items-center justify-center">
                            <Image
                                src={cartItem.product.image_path}
                                alt={cartItem.product.code}
                                width={300}
                                height={300}
                                className="min-[1600px]:w-[100px] w-[70px] block"
                            />
                        </div>
                        <div>
                            <p className="text-[14px]">{cartItem.product.title}</p>
                            <p className="text-[12px]">{cartItem.color}</p>
                            <p className="text-[12px]">Payment Method:</p>
                            <p className="text-[12px]">
                                {cartItem.payment_plan === 1 ? "Upfront Payment" : cartItem.payment_plan === 2 ? "Monthly Payment" : "Outright"}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center gap-x-2 justify-center px-4 py-1 border border-white rounded-lg">
                            {status === "pending" && <button onClick={() => handleQuantityChange(cartItem, "remove")}>-</button>}
                            <span className="mx-2">{cartItem.quantity}</span>

                            {status === "pending" && <button onClick={() => handleQuantityChange(cartItem, "add")}>+</button>}
                        </div>
                    </div>
                    <div className="text-right text-[#ECECED] text-[16px] flex items-center justify-end">
                        <div>
                            MYR <br />
                            <span className="text-[18px]">{cartItem.product.discount_price}</span>
                        </div>
                    </div>
                    <div className="text-right text-[#ECECED] text-[16px] font-bold flex items-center justify-end">
                        <div>
                            MYR <br />
                            <span className="text-[18px]">{cartItem.subtotal}</span>
                        </div>
                    </div>
                </div>
            ))}
            {status === "completed" && (
                <>
                    <div className="flex items-center justify-between mb-4 text-[white] text-[16px]">
                        <div>Subtotal</div>
                        <div className="font-bold">RM {cartItemList?.subtotal}</div>
                    </div>
                    <div className="flex items-center justify-between mb-4 text-[white] text-[16px]">
                        <div>Discount</div>
                        <div className="font-bold">RM 0.00</div>
                    </div>
                    <div className="flex items-center justify-between font-bold text-[white] text-[20px]">
                        <div>Grand Total</div>
                        <div>RM {cartItemList?.total_price}</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartDetail;
