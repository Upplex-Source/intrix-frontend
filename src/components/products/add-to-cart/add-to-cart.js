"use client";

import React, { useEffect, useState } from "react";
import "./add-to-cart.scss";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { currencyFormat } from "@/functions/helper";
import LastChanceCards from "@/components/products/add-to-cart/LastChanceCards";
import { retrieveCart } from "@/service/cart-api/CartService";
import Cookies from "js-cookie";

function AddToCart({ initialValue, addCartReady, setAddCartReady }) {
    const [initialFormValue, setInitialFormValue] = useState(initialValue);

    const [selectedItem, setSelectedItem] = useState(null);

    const freeItems = [
        {
            id: "purifier",
            name: "SteriPure Air Purifier",
            price: "RM 999 FREE*",
            image: "/cart/purifier.png",
        },
        {
            id: "coffee_machine",
            name: "Lottezio Coffee Machine",
            price: "RM 699 FREE*",
            image: "/cart/coffee_machine.png",
        },
    ];

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
        { id: 1, name: "INTRIX One Tap 5-in-1", color: "Chrome", paymentMethod: "FlexiOwn Plan", price: 7500, quantity: 2 },
        { id: 2, name: "INTRIX One Tap 4-in-1", color: "Satin Gold", paymentMethod: "Outright", price: 5200, quantity: 1 },
        { id: 3, name: "All-in-One Filter", color: "N/A", paymentMethod: "Outright", price: 580, quantity: 1 },
    ]);

    const handleQuantityChange = (id, quantity) => {
        setItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)));
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

    const [cartItemList, setCartItemList] = useState();

    useEffect(() => {
        const sessionID = Cookies.get("sessionID");
        const obj1 = { session_key: sessionID, per_page: 10 };

        const handleRetrieveCartItems = async () => {
            try {
                const result = await retrieveCart(obj1);
                console.log(result.carts.data);
                setCartItemList(result);
            } catch (error) {
                console.log(error);
            }
        };

        handleRetrieveCartItems();
    }, []);

    const handleCartClose = () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#cart-wrapper", {
            xPercent: -100,
            duration: 0.5,
        });

        setAddCartReady(false);
    };

    const [checked, setChecked] = useState(false);

    return (
        <div id="cart-wrapper">
            <div className="cart_title container mx-auto flex items-center justify-between">
                <span></span>
                <h1 className="text-[3.375rem] text-[#ECECED] mb-4 text-center">Cart</h1>
                <div className=" cursor-pointer" onClick={handleCartClose}>
                    <Image src={"/menu/close-circle.png"} alt="close btn" className="w-[50px] min-[1600px]:w-[70px]" width={70} height={70} />
                </div>
            </div>
            <div className="container mx-auto my-6 flex items-center justify-center gap-x-24">
                <div class="flex items-center gap-x-4">
                    <div class="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#F79932] text-white font-bold">1</div>
                    <span class="text-white font-medium">Shopping cart</span>
                </div>

                <div class="flex items-center gap-x-4 opacity-50">
                    <div class="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#343637] text-[#646669] font-bold">2</div>
                    <span class="text-[#646669]">Checkout details</span>
                </div>

                <div class="flex items-center gap-x-4 opacity-50">
                    <div class="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#343637] text-[#646669] font-bold">3</div>
                    <span class="text-[#646669]">Order complete</span>
                </div>
            </div>
            <div className="cart_container mx-auto grid grid-cols-3 gap-4 xl:gap-8 p-8">
                <div className="col-span-2">
                    <div className="bg-black text-white p-4">
                        <div className="grid grid-cols-5 text-sm border-b border-white">
                            <div className="pb-4 col-span-2">Product</div>
                            <div className="pb-4 text-center">Quantity</div>
                            <div className="pb-4 text-right">Price</div>
                            <div className="pb-4 text-right">Subtotal</div>
                        </div>
                        {items.map((item) => (
                            <div key={item.id} className="grid grid-cols-5 my-2 py-4 border-b border-white">
                                <div className="flex items-center gap-x-4 col-span-2">
                                    <div className="bg-white flex items-center justify-center">
                                        <Image
                                            src={initialFormValue.src}
                                            alt={initialFormValue.model}
                                            width={300}
                                            height={300}
                                            className="min-[1600px]:w-[100px] w-[70px] block"
                                        />
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
                                    <div>
                                        MYR <br />
                                        <span className="text-[18px]">{item.price}</span>
                                    </div>
                                </div>
                                <div className="text-right text-[#ECECED] text-[16px] font-bold flex items-center justify-end">
                                    <div>
                                        MYR <br />
                                        <span className="text-[18px]">{item.price * item.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-4 mt-8 text-[#421908]">
                        <h2 className="text-[30px] text-white mb-4">Last Chance To Add On...</h2>

                        <LastChanceCards />
                    </div>
                </div>
                <div className="bg-white text-[#141718] px-4 py-6 rounded-lg">
                    <h2 className="text-[24px] xl:text-[28px] mb-8">Cart Summary</h2>
                    <div>
                        <h3 className="xl:text-[18px] mb-2 text-[#343637]">Complimentary Add-On</h3>
                        <div className="mb-4 text-[14px]">
                            <p className="mb-6">
                                With every purchase of 1 x INTRIX One Tap model.
                                <br />
                                Choose ONE only:
                            </p>
                            {freeItems.map((item) => (
                                <div key={item.id} className="flex items-center border rounded-lg overflow-hidden mb-4">
                                    <Image src={item.image} alt={item.name} className="min-w-[140px] w-[30%]" width={200} height={300} />
                                    <div className="flex flex-col justify-center p-4 w-full">
                                        <p className="text-[#421908]">{item.name}</p>
                                        <h4 className="text-[#421908] text-[20px] xl:text-[24px] font-bold leading-[1.2]">{item.price}</h4>
                                        <div
                                            className={`free_cart_btn rounded-md flex items-center justify-between p-2 mt-1 w-fit gap-x-4 cursor-pointer ${
                                                selectedItem === item.id ? "selected" : ""
                                            }`}
                                            onClick={() => setSelectedItem(item.id)}
                                        >
                                            <span className="text-[16px]">{selectedItem === item.id ? "Added To Cart" : "Add To Cart"}</span>
                                            <Image
                                                src={selectedItem === item.id ? "/cart/arrow-right-selected.png" : "/cart/arrow-right.png"}
                                                alt="arrow"
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 mb-8 text-[#141718] rounded-md flex p-3 items-center justify-between bg-[#F3F5F7] border border-[#141718]">
                        <div className="flex items-center gap-x-4">
                            <div className="border-[#121212] border w-[20px] h-[20px] rounded-full relative flex items-center justify-center">
                                <div className="bg-[#121212] rounded-lg absolute w-[12px] h-[12px]"></div>
                            </div>
                            <span className="">Shipping Fees</span>
                        </div>
                        <span className="">RM 0.00</span>
                    </div>
                    <p className="text-[18px] text-[#343637] font-semibold mb-1">Have a coupon?</p>
                    <p className="text-[16px] text-[#343637] mb-3">Add your code for an instant cart discount</p>
                    <div className="mb-12 relative flex items-center">
                        <Image src={"/cart/coupon.png"} alt="coupon icon" className="absolute left-4" width={20} height={20} />
                        <input type="text" placeholder="Coupon Code" className="py-2 pl-12 pr-20 border border-[#6C7275] w-full" />
                        <button type="button" className="border-[0] outline-none text-center text-[#141718] absolute font-bold right-4">
                            Apply
                        </button>
                    </div>
                    <div className="flex items-center justify-between mb-4 text-[#141718] text-[16px]">
                        <div>Subtotal</div>
                        <div className="font-bold">RM 1,234.00</div>
                    </div>
                    <div className="flex items-center justify-between font-bold text-[#141718] text-[20px]">
                        <div>Total</div>
                        <div>RM 1,345.00</div>
                    </div>
                    <button className="bg-[#F79932] text-white w-full py-3 mt-4 rounded-lg">Checkout</button>
                    <label className="flex items-center cursor-pointer gap-x-2 pt-4 pb-12">
                        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="hidden" />
                        <div
                            className={`w-5 h-5 flex items-center justify-center border border-gray-400 rounded-sm transition ${
                                checked ? "bg-[#F79932] border-[#F79932]" : "bg-white"
                            }`}
                        >
                            {checked && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={4}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                        <span className="text-[12px] text-[#343637]">
                            Agree to
                            <Link href="#" className="font-bold px-1 underline">
                                Refund & Return Policy
                            </Link>
                            and
                            <Link href="#" className="font-bold pl-1 underline">
                                Terms & Conditions
                            </Link>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default AddToCart;
