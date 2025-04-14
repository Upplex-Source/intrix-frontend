import Image from "next/image";
import React from "react";
import { currencyFormat } from "@/functions/helper";

function CartDetail({ status, cartItemList, handleQuantityChange, handleAddOnQuantityChange, getPaymentPlan }) {
    return (
        <div className="w-full text-[#343637] sm:p-4">
            <div className="grid grid-cols-5 text-sm border-b border-[#D0D2D3]">
                <div className="pb-4 col-span-2">Product</div>
                <div className="pb-4 text-center">Quantity</div>
                <div className="pb-4 text-right">Price</div>
                <div className="pb-4 text-right">Subtotal</div>
            </div>
            {cartItemList?.cart_metas?.map((cartItem) => (
                <div key={cartItem.id} className="grid grid-cols-5 my-2 py-4 border-b border-[#D0D2D3]">
                    <div className="flex sm:flex-row flex-col sm:items-center gap-2 sm:gap-4 col-span-2 pr-2">
                        <div className="bg-white flex items-center justify-center w-fit sm:w-auto">
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
                            <p className="text-[12px]">{getPaymentPlan(cartItem.payment_plan)}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center gap-x-2 justify-center px-2 sm:px-4 py-1 border border-[#343637] rounded-lg">
                            {status === "pending" && <button onClick={() => handleQuantityChange(cartItem, "remove")}>-</button>}
                            <span className="mx-1 sm:mx-2">{cartItem.quantity}</span>

                            {status === "pending" && <button onClick={() => handleQuantityChange(cartItem, "add")}>+</button>}
                        </div>
                    </div>
                    <div className="text-right text-[#343637] text-[12px] sm:text-[16px] flex items-center justify-end">
                        <div>
                            MYR <br />
                            <span className="text-[12px] sm:text-[18px]">{currencyFormat(cartItem?.product.price, 2, true)}</span>
                        </div>
                    </div>
                    <div className="text-right text-[#343637] text-[12px] sm:text-[16px] font-bold flex items-center justify-end">
                        <div>
                            MYR <br />
                            <span className="text-[12px] sm:text-[18px]">{currencyFormat(cartItem?.subtotal, 2, true)}</span>
                        </div>
                    </div>
                </div>
            ))}
            {cartItemList?.add_on_metas?.map((addOnItem) => (
                <div key={addOnItem.id} className="grid grid-cols-5 my-2 py-4 border-b border-[#D0D2D3]">
                    <div className="flex sm:flex-row flex-col sm:items-center gap-2 sm:gap-4 col-span-2 pr-2">
                        <div className="bg-white flex items-center justify-center w-fit sm:w-auto">
                            <Image
                                src={addOnItem.add_on.image_path}
                                alt={addOnItem.add_on.code}
                                width={300}
                                height={300}
                                className="min-[1600px]:w-[100px] w-[70px] block"
                            />
                        </div>
                        <div>
                            <p className="text-[14px]">{addOnItem.add_on.title}</p>
                            <p className="text-[12px]">Payment Method:</p>
                            <p className="text-[12px]">{getPaymentPlan(addOnItem.payment_plan)}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center gap-x-2 justify-center px-2 sm:px-4 py-1 border border-[#343637] rounded-lg">
                            {status === "pending" && <button onClick={() => handleAddOnQuantityChange(addOnItem, "remove")}>-</button>}
                            <span className="mx-1 sm:mx-2">{addOnItem.quantity}</span>

                            {status === "pending" && <button onClick={() => handleAddOnQuantityChange(addOnItem, "add")}>+</button>}
                        </div>
                    </div>
                    <div className="text-right text-[#343637] text-[12px] sm:text-[16px] flex items-center justify-end">
                        <div>
                            MYR <br />
                            <span className="text-[12px] sm:text-[18px]">{currencyFormat(addOnItem?.add_on.price, 2, true)}</span>
                        </div>
                    </div>
                    <div className="text-right text-[#343637] text-[12px] sm:text-[16px] font-bold flex items-center justify-end">
                        <div>
                            MYR <br />
                            <span className="text-[12px] sm:text-[18px]">{currencyFormat(addOnItem?.subtotal, 2, true)}</span>
                        </div>
                    </div>
                </div>
            ))}
            {cartItemList?.free_gift && (
                <div key={cartItemList?.free_gift.id} className="grid grid-cols-5 my-2 py-4 border-b border-[#D0D2D3]">
                    <div className="flex items-center gap-2 sm:gap-4 col-span-2 pr-2">
                        <div className="bg-white flex items-center justify-center w-fit sm:w-auto">
                            <Image
                                src={cartItemList?.free_gift.image_path}
                                alt={cartItemList?.free_gift.code}
                                width={300}
                                height={300}
                                className="min-[1600px]:w-[100px] w-[70px] block"
                            />
                        </div>
                        <div>
                            <p className="text-[14px]">{cartItemList?.free_gift.title}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center gap-x-2 justify-center px-4 py-1 border border-[#343637] rounded-lg">
                            <span className="mx-1 sm:mx-2">1</span>
                        </div>
                    </div>
                    <div className="text-right text-[#343637] text-[16px] flex items-center justify-end">
                        <div>
                            MYR <br />
                            <span className="text-[18px]">{cartItemList?.free_gift.price}</span>
                        </div>
                    </div>
                    <div className="text-right text-[#343637] text-[16px] font-bold flex items-center justify-end">
                        <div>
                            <span className="text-[18px]">FREE</span>
                        </div>
                    </div>
                </div>
            )}
            {status === "completed" && (
                <>
                    <div className="flex items-center justify-between mb-4 text-[#343637] text-[16px]">
                        <div>Subtotal</div>
                        <div className="font-bold">RM {currencyFormat(cartItemList?.subtotal, 2, true)}</div>
                    </div>
                    <div className="flex items-center justify-between mb-4 text-[#343637] text-[16px]">
                        <div>Discount</div>
                        <div className="font-bold">RM 0.00</div>
                    </div>
                    <div className="flex items-center justify-between font-bold text-[#343637] text-[20px]">
                        <div>Grand Total</div>
                        <div>RM {currencyFormat(cartItemList?.total_price, 2, true)}</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartDetail;
