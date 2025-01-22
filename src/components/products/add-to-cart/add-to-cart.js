"use client";

import React, { useEffect, useState } from "react";
import "./add-to-cart.scss";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { currencyFormat } from "@/functions/helper";

function AddToCart({ initialValue, addCartReady, setAddCartReady }) {
    const [initialFormValue, setInitialFormValue] = useState(initialValue);

    const products = [
        {
            name: "5-IN-1",
            price: 7500,
        },
        {
            name: "4-IN-1",
            price: 5200,
        },
        {
            name: "2-IN-1",
            price: 4500,
        },
        {
            name: "LITE",
            price: 3988,
        },
    ];

    const [items, setItems] = useState([
        { id: 1, name: 'INTRIX One Tap 5-in-1', color: 'Chrome', paymentMethod: 'FlexiOwn Plan', price: 7500, quantity: 2 },
        { id: 2, name: 'INTRIX One Tap 4-in-1', color: 'Satin Gold', paymentMethod: 'Outright', price: 5200, quantity: 1 },
        { id: 3, name: 'All-in-One Filter', color: 'N/A', paymentMethod: 'Outright', price: 580, quantity: 1 },
      ]);
    
      const handleQuantityChange = (id, quantity) => {
        setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
      };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!addCartReady) {
        gsap.to("#cart-wrapper", {
            xPercent: 0,
            duration: 0.5,
        });
        document.body.classList.remove("no-scroll");
        } else {
            gsap.to("#cart-wrapper", {
                xPercent: -100,
                duration: 0.5,
            });
            document.body.classList.add("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
          };
    }, [addCartReady]);

    const handleCartClose = () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#cart-wrapper", {
            xPercent: -100,
            duration: 0.5,
        });
        
        setAddCartReady(false);
    };
    

    return (
        <div id="cart-wrapper">
            <div className="cart_title container mx-auto flex items-center justify-between">
                <span></span>
                <h1 className="text-[3.375rem] text-[#ECECED] mb-4 text-center">Cart</h1>
                <div className=" cursor-pointer" onClick={handleCartClose}>
                    <Image src={'/menu/close-circle.png'} alt="close btn" className="w-[50px] min-[1600px]:w-[70px]" width={70} height={70} />
                </div>
            </div>
            
            <div className="cart_container container mx-auto grid grid-cols-3 gap-4 p-8">
                <div className="col-span-2">
                    <div className="bg-black text-white p-4">
                        
                        <div className="grid grid-cols-5 text-sm border-b border-white">
                            <div className="pb-4 col-span-2">Product</div>
                            <div className="pb-4 text-center">Quantity</div>
                            <div className="pb-4 text-right">Price</div>
                            <div className="pb-4 text-right">Subtotal</div>
                        </div>
                        {items.map(item => (
                            <div key={item.id} className="grid grid-cols-5 my-2 py-4 border-b border-white">
                                <div className="flex items-center gap-x-4 col-span-2">
                                    <div className="bg-white flex items-center justify-center">
                                        <Image src={initialFormValue.src} alt={initialFormValue.model} width={300} height={300} className="min-[1600px]:w-[100px] w-[70px] block" />
                                    </div>
                                    <div>
                                        <p className="text-[14px]">{item.name}</p>
                                        <p className="text-[12px]">{item.color}</p>
                                        <p className="text-[12px]">Payment Method:</p>
                                        <p className="text-[12px]">{item.paymentMethod}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center gap-x-2 justify-center px-4 py-1 border border-white rounded-lg">
                                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <div className="text-right text-[#ECECED] text-[16px] flex items-center justify-end">
                                    <div>MYR <br/><span className="text-[18px]">{item.price}</span></div>
                                </div>
                                <div className="text-right text-[#ECECED] text-[16px] font-bold flex items-center justify-end">
                                    <div>MYR <br/><span className="text-[18px]">{item.price * item.quantity}</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white text-[#421908] p-4 rounded-lg">
                    <h2 className="text-xl mb-4">Cart Summary</h2>
                    <div>
                        <h3 className="text-lg mb-2">Complimentary Add-On</h3>
                        <div className="mb-4">
                        <div className="flex items-center justify-between p-2 border">
                            <div>SteriPure Air Purifier</div>
                            <div>RM 999 FREE*</div>
                        </div>
                        <div className="flex items-center justify-between p-2 border">
                            <div>Lottezio Coffee Machine</div>
                            <div>RM 699 FREE*</div>
                        </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Shipping Fees</label>
                        <div className="p-2 border">RM 0.00</div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Have a coupon?</label>
                        <input type="text" placeholder="Coupon Code" className="p-2 border w-full" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div>Subtotal</div>
                        <div>RM 1,234.00</div>
                    </div>
                    <div className="flex items-center justify-between font-bold">
                        <div>Total</div>
                        <div>RM 1,345.00</div>
                    </div>
                    <button className="bg-orange-500 text-white w-full py-2 mt-4 rounded-lg">Checkout</button>
                    
                </div>
                <div className="col-span-3 mt-8 text-[#421908]">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl mb-4">Last Chance To Add On...</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="border p-4">
                            <h3 className="text-lg mb-2">2-Year Extended Warranty</h3>
                            <div>RM 1,040.00</div>
                            <button className="bg-orange-500 text-white w-full py-2 mt-4 rounded-lg">Add To Cart</button>
                            </div>
                            <div className="border p-4">
                            <h3 className="text-lg mb-2">All-in-One Filter - Buy 2 Free 1</h3>
                            <div>RM 1,160.00</div>
                            <button className="bg-orange-500 text-white w-full py-2 mt-4 rounded-lg">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default AddToCart;
