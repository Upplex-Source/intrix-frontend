"use client";

import React, { useEffect } from "react";
import "./checkout-review.scss";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function CheckoutReview({ initialValue }) {
    const products = ["5-IN-1", "4-IN-1", "2-IN-1", "LITE"];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#checkout-wrapper", {
            xPercent: -100,
        });
    }, []);

    return (
        <div id="checkout-wrapper">
            <div className="left">
                <div className="label">Order Details</div>
                <div className="order-img">
                    <Image src="" alt="" width={200} height={200} />
                </div>

                <form className="order-form">
                    <div className="series-wrapper">
                        <label>SERIES</label>
                        <input type="text" name="series" disabled defaultValue={initialValue.series} />
                    </div>

                    <div className="model-wrapper">
                        <label>MODEL</label>
                        <select name="model" className="model-select" defaultValue={initialValue.model}>
                            {products.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="payment-wrapper">
                        <label>PAYMENT PLAN</label>
                        <select name="paymentPlan" className="payment-plan-select" defaultValue={initialValue.paymentPlan}>
                            <option value="upfront-payment">UPFRONT PAYMENT-RM {initialValue.price}</option>
                            <option value="monthly-payment">MONTHLY PAYMENT-RM {initialValue.price}</option>
                            <option value="outright">OUTRIGHT-RM {initialValue.price}</option>
                        </select>
                    </div>

                    <div className="color-wrapper">
                        <label>COLOUR</label>
                        <select name="colour" className="colour-select" defaultValue={initialValue.color}>
                            <option value="chrome">CHROME</option>
                            <option value="black">BLACK</option>
                            <option value="gunmetal">GUN METAL</option>
                            <option value="satin-gold">SATIN GOLD</option>
                        </select>
                    </div>

                    <div className="quantity-wrapper">
                        <label>QUANTITY</label>
                        <input type="number" name="quantity" defaultValue={initialValue.quantity} />
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
                        <input type="textarea" name="notes" placeholder="Order Notes" />
                        <div className="discount-row">
                            <input type="text" name="discountCode" placeholder="Enter discount code" />
                            <button>Apply</button>
                        </div>
                    </form>
                </div>
                <button>Next</button>
            </div>
        </div>
    );
}

export default CheckoutReview;
