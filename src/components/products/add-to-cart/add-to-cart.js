"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./add-to-cart.scss";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { currencyFormat } from "@/functions/helper";
import LastChanceCards from "@/components/products/add-to-cart/LastChanceCards";
import { addToCart, deleteCartItem, retrieveCart, updateAddOnCart, updateBillingDetails, updateCart } from "@/service/cart-api/CartService";
import Cookies from "js-cookie";
import { getFreeGifts } from "@/service/product-api/ProductService";
import { validatePromoCode } from "@/service/promo-code-api/PromoCodeService";
import { checkout } from "@/service/order-api/OrderService";
import BillingForm from "../billing-form/BillingForm";
import CartDetail from "../cart-detail/CartDetail";
import OrderComplete from "../order-complete/OrderComplete";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function AddToCart({ addCartReady, setAddCartReady }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [freeGifts, setFreeGifts] = useState();
    const [cartItemList, setCartItemList] = useState();
    const [promoCode, setPromoCode] = useState();
    const [validated, setValidated] = useState(false);
    const [valid, setValid] = useState(false);
    const [promoValidation, setPromoValidation] = useState();
    const [step, setStep] = useState(1);
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [formValue, setFormValue] = useState({});
    const [isFreeGiftDisabled, setIsFreeGiftDisabled] = useState(false);

    const models = ["5-IN-1", "4-IN-1", "2-IN-1", "LITE"];

    const addItemToCart = async (cartItem, type) => {
        try {
            const cur_session_key = Cookies.get("session_key") ? Cookies.get("session_key") : undefined;

            if (type === "addon") {
                const addOnObj = {
                    add_on: cartItem.code,
                    session_key: cur_session_key,
                    quantity: 1,
                    type: 1,
                };
                const result = await updateAddOnCart(addOnObj);
                if (result) {
                    setCartItemList(result);
                }
            } else if (type === "freeGift") {
                const freeGiftObj = {
                    free_gift: cartItem.code,
                    session_key: cur_session_key,
                    quantity: 1,
                    type: 2,
                };
                const result = await updateAddOnCart(freeGiftObj);
                if (result) {
                    setCartItemList(result);
                }
            } else {
                const addObj = {
                    product_code: cartItem.product.code,
                    color: cartItem.color_code,
                    quantity: 1,
                    session_key: cur_session_key,
                    payment_plan: cartItem.payment_plan,
                };

                const result = await addToCart(addObj);
                if (result) {
                    setCartItemList(result);
                    setValidated(false);
                    document.getElementById("promoCode").value = "";
                }
            }
        } catch (error) {}
    };

    const handleQuantityChange = (cartItem, action) => {
        if (action === "add") {
            addItemToCart(cartItem, "product");
        } else {
            if (cartItem.quantity > 1) {
                handleReduceQuantity(cartItem);
            } else {
                handleRemoveItem(cartItem);
            }
        }
    };

    const handleAddOnQuantityChange = async (addOnItem, action) => {
        if (action === "add") {
            addItemToCart(addOnItem.add_on, "addon");
        } else if (action === "remove") {
            const cur_session_key = Cookies.get("session_key") ? Cookies.get("session_key") : undefined;

            if (addOnItem.quantity > 1) {
                const addOnObj = {
                    add_on: addOnItem.add_on.code,
                    quantity: -1,
                    session_key: cur_session_key,
                    type: 1,
                };
                const result = await updateAddOnCart(addOnObj);
                if (result) {
                    setCartItemList(result);
                }
            } else {
                const addOnObj = {
                    add_on: addOnItem.add_on.code,
                    session_key: cur_session_key,
                    type: 1,
                    action: "remove",
                };
                const result = await updateAddOnCart(addOnObj);
                if (result) {
                    setCartItemList(result);
                }
            }
        }
    };

    const handleReduceQuantity = async (cartItem) => {
        try {
            const cur_session_key = Cookies.get("session_key") ? Cookies.get("session_key") : undefined;

            const addObj = {
                product_code: cartItem.product.code,
                color: cartItem.color_code,
                quantity: 1,
                session_key: cur_session_key,
            };

            const result = await updateCart(addObj);
            if (result) {
                setCartItemList(result);
                setValidated(false);
                document.getElementById("promoCode").value = "";
            }
        } catch (error) {}
    };

    const handleRemoveItem = async (cartItem) => {
        try {
            const cur_session_key = Cookies.get("session_key") ? Cookies.get("session_key") : undefined;

            const addObj = {
                session_key: cur_session_key,
                cart_item: cartItem.id,
            };

            const result = await deleteCartItem(addObj);
            if (result) {
                setCartItemList(result);
                setSelectedItem();
            }
        } catch (error) {}
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

    useEffect(() => {
        const handleCartFirstLoad = async () => {
            const session_key = Cookies.get("session_key");

            const cartListObj = {
                session_key: session_key,
                per_page: 10,
            };

            const freeGiftsObj = {
                session_key: session_key,
                length: 10,
                start: 0,
            };

            try {
                const cartList = await retrieveCart(cartListObj);
                const freeGiftList = await getFreeGifts(freeGiftsObj);

                const result = await Promise.all([cartList, freeGiftList]);

                if (result[0] && result[1]) {
                    setCartItemList(result[0].carts.data[0]);
                    let index = result[0].carts.data[0].cart_metas.findIndex((item) => models.includes(item.product.code));
                    if (index < 0) {
                        setIsFreeGiftDisabled(true);
                    }

                    setFreeGifts(result[1].free_gifts);
                    setSelectedItem(result[0].carts.data[0]?.free_gift?.id);
                }
            } catch (error) {
                console.log(error);
            }
        };
        handleCartFirstLoad();
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
    const [showCheckMsg, setShowCheckMsg] = useState(false);

    const handleNext = () => {
        if (checked) {
            setStep(2);
        } else {
            setShowCheckMsg(true);
        }
    };

    const hanldeAgree = () => {
        setChecked((prev) => !prev);
        setShowCheckMsg(false);
    };

    const handleUpdateBillingDetails = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const session_key = Cookies.get("session_key");

        const obj = {
            session_key: session_key,
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
            const result = await updateBillingDetails(obj);
            if (result) {
                // setStep(3);
                const checkoutObj = {
                    session_key: session_key,
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
                        // console.log(result);
                        window.location.replace(result.payment_url);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePromoChange = async (e) => {
        setPromoCode(e.target.value);
    };

    const handleChange = async (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleValidatePromoCode = async () => {
        if (promoCode) {
            setIsLoading(true);
            setValidated(false);
            setValid(false);
            const session_key = Cookies.get("session_key");

            const obj = {
                session_key: session_key,
                promo_code: promoCode,
                type: 2,
            };

            // console.log(obj);

            try {
                const result = await validatePromoCode(obj);
                if (result) {
                    setValid(true);
                    setPromoValidation(result);
                }
                setValidated(true);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        } else {
            setValidated(false);
            document.getElementById("promoCode").value = "";
        }
    };

    const getPaymentPlan = (paymentPlan) => {
        switch (paymentPlan) {
            case 1:
                return "Upfront Payment";
            case 2:
                return "Monthly Payment";
            case 3:
                return "Outright";
            default:
                break;
        }
    };

    return (
        <div id="cart-wrapper">
            <div className="cart_title container mx-auto flex items-center justify-between px-4 min-[1025px]:px-0">
                <span></span>
                <h1 className="text-[2.375rem] min-[1025px]:text-[3.375rem] text-[#343637] mb-4 text-center">Cart</h1>
                <div className=" cursor-pointer" onClick={handleCartClose}>
                    <FontAwesomeIcon icon={faXmark} color="#343637" size="2x" />
                </div>
            </div>
            <div className="w-full max-w-[90vw] min-[1025px]:max-w-[70vw] mx-auto my-6 flex items-center justify-center gap-x-12">
                <div
                    className={`leading-[1.2] pr-0 min-[1025px]:pr-16 flex flex-col min-[992px]:flex-row items-center gap-4 border-b-2 pb-4 ${
                        step === 1 ? " border-[#141718]" : " border-[transparent] opacity-50 cursor-pointer"
                    } `}
                    onClick={step === 2 ? () => setStep(1) : undefined}
                >
                    <div
                        className={`w-[42px] h-[42px] flex items-center justify-center rounded-full ${
                            step === 1 ? "bg-[#F79932] text-white" : "bg-[#343637] text-[#646669]"
                        }`}
                    >
                        1
                    </div>
                    <span className={`${step === 1 ? "text-[#343637] font-medium" : "text-[#BCA77B]"} text-center min-[992px]:text-left`}>
                        Shopping cart
                    </span>
                </div>

                <div
                    className={`leading-[1.2] pr-0 min-[1025px]:pr-16 flex flex-col min-[992px]:flex-row items-center gap-4 border-b-2 pb-4 ${
                        step === 2 ? " border-[#141718]" : " border-[transparent] opacity-50"
                    } `}
                >
                    <div
                        className={`w-[42px] h-[42px] flex items-center justify-center rounded-full ${
                            step === 2 ? "bg-[#F79932] text-white" : "bg-[#BCA77B] text-[#fff]"
                        }`}
                    >
                        2
                    </div>
                    <span className={`${step === 2 ? "text-[#343637] font-medium" : "text-[#646669]"} text-center min-[992px]:text-left`}>
                        Checkout details
                    </span>
                </div>

                <div className="leading-[1.2] pr-0 min-[1025px]:pr-16 flex flex-col min-[992px]:flex-row items-center gap-4 border-b-2 pb-4 border-[transparent] opacity-50">
                    <div className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#BCA77B] text-[#fff]">3</div>
                    <span className="text-[#646669] text-center min-[992px]:text-left">Order complete</span>
                </div>
            </div>
            {step === 1 ? (
                <div className="cart_container mx-auto grid grid-cols-1 min-[992px]:grid-cols-3 gap-4 xl:gap-8 p-2 sm:p-8">
                    <div className="min-[992px]:col-span-2">
                        <CartDetail
                            status="pending"
                            cartItemList={cartItemList}
                            handleQuantityChange={handleQuantityChange}
                            handleAddOnQuantityChange={handleAddOnQuantityChange}
                            getPaymentPlan={getPaymentPlan}
                        />
                        <div className="pt-4 my-8 text-[#421908] min-[992px]:block hidden">
                            <h2 className="text-[30px] text-[#343637] mb-4">Last Chance To Add On...</h2>

                            <LastChanceCards addItemToCart={addItemToCart} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-fit bg-white text-[#141718] px-4 pt-6 pb-4 sm:pb-12 rounded-lg">
                        <h2 className="text-[24px] xl:text-[28px] mb-8">Cart Summary</h2>
                        <div>
                            <h3 className="xl:text-[18px] mb-2 text-[#343637]">Complimentary Add-On</h3>
                            {freeGifts?.length > 0 && (
                                <div className="mb-4 text-[14px]">
                                    <p className="mb-6">
                                        With every purchase of 1 x INTRIX One Tap model.
                                        <br />
                                        Choose ONE only:
                                    </p>
                                    {freeGifts?.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center border rounded-lg overflow-hidden mb-4 bg-[#F3F5F7]"
                                            onClick={() =>
                                                cartItemList?.free_gift?.id !== item.id && !isFreeGiftDisabled && addItemToCart(item, "freeGift")
                                            }
                                        >
                                            <Image
                                                src={item.image_path}
                                                alt={item.title}
                                                className="min-w-[100px] min-[1025px]:min-w-[140px] w-[30%] max-w-[100px] min-[1025px]:max-w-[150px]"
                                                width={200}
                                                height={300}
                                            />
                                            <div className="flex flex-col justify-center py-4 pl-0 pr-4 w-full">
                                                <p className="text-[#421908]">{item.title}</p>
                                                <h4 className="text-[#421908] text-[18px] min-[1025px]:text-[20px] xl:text-[24px] font-bold leading-[1.2]">
                                                    <span className="line-through">RM {item.price}</span> FREE*
                                                </h4>
                                                <div
                                                    className={`free_cart_btn rounded-md flex items-center justify-between p-2 mt-1 w-fit gap-x-4 cursor-pointer ${
                                                        selectedItem === item.id ? "selected" : ""
                                                    }`}
                                                    onClick={() => !isFreeGiftDisabled && setSelectedItem(item.id)}
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
                            )}
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
                        <div>
                            <p className="text-[18px] text-[#343637] font-semibold mb-1">Have a coupon?</p>
                            <p className="text-[16px] text-[#343637] mb-3">Add your code for an instant cart discount</p>
                            <div className="mb-4 relative flex items-center">
                                <Image src={"/cart/coupon.png"} alt="coupon icon" className="absolute left-4" width={20} height={20} />
                                <input
                                    id="promoCode"
                                    name="promoCode"
                                    onChange={handlePromoChange}
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="py-2 pl-12 pr-20 border border-[#6C7275] w-full"
                                />
                                <button
                                    onClick={() => handleValidatePromoCode()}
                                    type="button"
                                    className="border-[0] outline-none text-center text-[#141718] absolute font-bold right-4"
                                >
                                    Apply
                                </button>
                            </div>
                            {validated && (
                                <div className="mb-12">
                                    <span className={valid ? "text-[green]" : "text-[red]"}>
                                        {valid ? promoValidation.message : "Discount code not found."}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-4 text-[#141718] text-[16px]">
                                <div>Subtotal</div>
                                <div className="font-bold">
                                    RM {validated ? promoValidation?.subtotal : currencyFormat(cartItemList?.subtotal, 2, true)}
                                </div>
                            </div>

                            {validated && (
                                <div className="flex items-center justify-between mb-4 text-[#141718] text-[16px]">
                                    <div>Discount</div>
                                    <div className="font-bold">- RM {promoValidation?.discount}</div>
                                </div>
                            )}

                            <div className="flex items-center justify-between font-bold text-[#141718] text-[20px]">
                                <div>Total</div>
                                <div>RM {validated ? promoValidation?.final_price : currencyFormat(cartItemList?.total_price, 2, true)}</div>
                            </div>
                            <button className="bg-[#F79932] text-white w-full py-3 mt-4 rounded-lg" onClick={() => handleNext()}>
                                Next
                            </button>
                            <label className="flex items-center cursor-pointer gap-x-2 py-4">
                                <input type="checkbox" checked={checked} onChange={() => hanldeAgree()} className="hidden" />
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
                                    <Link href={"/support?tab=2"} target="_blank" className="font-bold px-1 underline">
                                        Refund & Return Policy
                                    </Link>
                                    and
                                    <Link href={"/terms-and-conditions"} target="_blank" className="font-bold pl-1 underline">
                                        Terms & Conditions
                                    </Link>
                                </span>
                            </label>
                            {showCheckMsg && (
                                <span className="text-[12px] text-[red] leading-[1.2] block">
                                    Please agree to Refund & Return Policy and Terms & Conditions before continue to next step.
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="pb-4 my-8 text-[#421908] min-[992px]:hidden block">
                        <h2 className="text-[18px] sm:text-[30px] text-[#343637] mb-4">Last Chance To Add On...</h2>

                        <LastChanceCards addItemToCart={addItemToCart} />
                    </div>
                </div>
            ) : (
                <div className="billing-container min-h-[700px]">
                    <BillingForm
                        isLoading={isLoading}
                        formRef={formRef}
                        handleChange={handleChange}
                        handleUpdateBillingDetails={handleUpdateBillingDetails}
                    />
                </div>
            )}
        </div>
    );
}

export default AddToCart;
