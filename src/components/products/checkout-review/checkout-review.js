"use client";

import React, { useEffect, useState } from "react";
import "./checkout-review.scss";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { currencyFormat } from "@/functions/helper";

function CheckoutReview({ initialValue, ready, setReady }) {
    const [initialFormValue, setInitialFormValue] = useState(initialValue);

    const products = [
        {
            name: "5-IN-1",
            price: 7500,
            colour: ["chrome", "matte-black"],
        },
        {
            name: "4-IN-1",
            price: 5200,
            colour: ["chrome", "satin-gold", "gunmetal-grey", "matte-black"],
        },
        {
            name: "2-IN-1",
            price: 4500,
            colour: ["chrome", "matte-black"],
        },
        {
            name: "LITE",
            price: 3988,
            colour: ["chrome"],
        },
    ];

    const handleChangeModel = (item) => {
        const temp = products.find((element) => element.name === item.target.value);

        setInitialFormValue({ ...initialFormValue, model: item.target.value, price: temp.price });
    };

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.to("#checkout-wrapper", {
    //         xPercent: -100,
    //     });
    // }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!ready) {
        gsap.to("#checkout-wrapper", {
            xPercent: 0,
            duration: 0.5,
        });
        document.body.classList.remove("no-scroll");
        } else {
            gsap.to("#checkout-wrapper", {
                xPercent: -100,
                duration: 0.5,
            });
            document.body.classList.add("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
          };
    }, [ready]);

    const handleClose = () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#checkout-wrapper", {
            xPercent: -100,
            duration: 0.5,
        });
        
        setReady(false);
    };
    

    return (
        <div id="checkout-wrapper">
            <div className="left">
                <div className="label">Order Details</div>
                <div className="order-img relative overflow-hidden pb-4">
                    <Image src={initialFormValue.src} alt={initialFormValue.model} width={400} height={400} className="" />
                </div>

                <form className="order-form">
                    <div className="series-wrapper">
                        <label>SERIES</label>
                        <input type="text" name="series" disabled defaultValue={initialFormValue.series} />
                    </div>

                    <div className="model-wrapper relative">
                        <label>MODEL</label>
                        <select name="model" className="model-select" defaultValue={initialFormValue.model} onChange={handleChangeModel}>
                            {products.map((item, index) => (
                                <option key={index} value={item.name}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <Image src={'/menu/arrow-down.svg'} alt="arrow" className="absolute caret_checkout" width={20} height={20} />
                    </div>

                    <div className="payment-wrapper relative">
                        <label>PAYMENT PLAN</label>
                        <select name="paymentPlan" className="payment-plan-select" defaultValue={initialFormValue.paymentPlan}>
                            <option value="upfront-payment">UPFRONT PAYMENT - RM {currencyFormat(initialFormValue.price, 2, true)}</option>
                            <option value="monthly-payment">MONTHLY PAYMENT - RM {currencyFormat(initialFormValue.price, 2, true)}</option>
                            <option value="outright">OUTRIGHT - RM {currencyFormat(initialFormValue.price, 2, true)}</option>
                        </select>
                        <Image src={'/menu/arrow-down.svg'} alt="arrow" className="absolute caret_checkout" width={20} height={20} />
                    </div>

                    <div className="color-wrapper relative">
                        <label>COLOUR</label>
                        <select name="colour" className="colour-select" defaultValue={initialFormValue.color}>
                            {products
                                .find((element) => element.name === initialFormValue.model)
                                .colour.map((item, id) => (
                                    <option value={item} key={id}>{item.replace("-", " ").toUpperCase()}</option>
                                ))}
                        </select>
                        <Image src={'/menu/arrow-down.svg'} alt="arrow" className="absolute caret_checkout" width={20} height={20} />
                    </div>

                    <div className="quantity-wrapper">
                        <label>QUANTITY</label>
                        <input type="number" name="quantity" defaultValue={initialFormValue.quantity} />
                    </div>
                </form>
            </div>
            <div className="right">
                <div className="form-wrapper">
                    <div className="label">Billing Details</div>
                    <form className="billing-form">
                        <input type="text" name="fullName" placeholder="Full Name*" />
                        <input type="text" name="companyName" placeholder="Company Name (Optional)" />
                        <input type="text" name="country" placeholder="Country / Region" />
                        <input type="text" name="address-1" placeholder="Address*" />
                        <input type="text" name="address-2" />
                        <input type="text" name="city" placeholder="Town / City*" />
                        <input type="text" name="state" placeholder="State*" />
                        <input type="text" name="postcode" placeholder="Postcode / Zip*" />
                        <div className="form-row">
                            <input type="text" name="phone" placeholder="Phone*" />
                            <input type="email" name="email" placeholder="Email*" />
                        </div>
                        <textarea rows="4" name="notes" placeholder="Order Notes" />
                        <div className="discount-row">
                            <input type="text" name="discountCode" placeholder="Enter discount code" />
                            <button>Apply</button>
                        </div>
                    </form>
                </div>
                <button className="my-12 min-[1600px]:my-24">Next</button>
            </div>
            <div className="absolute right-[3vw] min-[1600px]:right-[5vw] top-[18vh] min-[1600px]:top-[15vh] cursor-pointer" onClick={handleClose}>
                <Image src={'/menu/close-circle.png'} alt="close btn" className="w-[50px] min-[1600px]:w-[70px]" width={70} height={70} />
            </div>
        </div>
    );
}

export default CheckoutReview;
