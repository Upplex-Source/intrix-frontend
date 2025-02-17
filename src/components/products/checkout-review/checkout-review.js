"use client";

import React, { useEffect, useRef, useState } from "react";
import "./checkout-review.scss";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { currencyFormat } from "@/functions/helper";
import { directCheckout } from "@/service/order-api/OrderService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function CheckoutReview({ initialValue, ready, setReady }) {
    const [formValue, setFormValue] = useState(initialValue);
    const [newOrder, setNewOrder] = useState({});
    const [openIndex, setOpenIndex] = useState(null);
    const formRef = useRef();
    const router = useRouter();

    const products = [
        {
            name: "5-IN-1",
            price: 7500,
            colour: [
                { key: 1, text: "chrome" },
                { key: 2, text: "matte-black" },
            ],
        },
        {
            name: "4-IN-1",
            price: 5200,
            colour: [
                { key: 1, text: "chrome" },
                { key: 2, text: "matte-black" },
                { key: 3, text: "satin-gold" },
                { key: 4, text: "gunmetal-grey" },
            ],
        },
        {
            name: "2-IN-1",
            price: 4500,
            colour: [
                { key: 1, text: "chrome" },
                { key: 2, text: "matte-black" },
            ],
        },
        {
            name: "LITE",
            price: 3988,
            colour: [{ key: 1, text: "chrome" }],
        },
    ];

    const handleChangeModel = (item) => {
        const temp = products.find((element) => element.name === item.target.value);

        setInitialFormValue({ ...formValue, model: item.target.value, price: temp.price });
    };

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.to("#checkout-wrapper", {
    //         xPercent: -100,
    //     });
    // }, []);

    useEffect(() => {
        console.log(formValue.src);
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

    const handleChange = async (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
        if (e.target.name === "model") {
            let srcUrl = "";

            switch (e.target.value) {
                case "5-IN-1":
                    srcUrl = "/explore/tap-1.png";
                    break;
                case "4-IN-1":
                    srcUrl = "/explore/tap-3.png";
                    break;
                case "2-IN-1":
                    srcUrl = "/explore/tap-2.png";
                    break;
                case "LITE":
                    srcUrl = "/explore/tap-4.png";
                    break;
                default:
                    break;
            }

            setFormValue({ ...formValue, src: srcUrl });
        }
    };

    const handleCheckout = async (e) => {
        e.preventDefault();

        const obj = {
            product_code: formValue.model,
            color: formValue.colour,
            quantity: formValue.quantity,
            promo_code: formValue.promoCode ? Number(formValue.promoCode) : undefined,
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
            payment_plan: Number(formValue.paymentPlan),
        };

        try {
            const result = await directCheckout(obj);
            setNewOrder(result);

            Swal.fire({
                title: "Order Submitted",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "#f79932",
            }).then((result) => {
                if (result.isConfirmed) {
                    formRef.current.reset();
                    router.refresh();
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const toggleAccordion = (method) => {
        setOpenIndex(method);
    };

    return (
        <div id="checkout-wrapper">
            <div className="left">
                <div className="label">Order Details</div>
                <div className="order-img relative overflow-hidden pb-4">
                    <Image src={formValue.src} alt={formValue.model} width={400} height={400} className="" />
                </div>

                <form id="order-form" className="order-form">
                    <div className="series-wrapper">
                        <label>SERIES</label>
                        <input required type="text" name="series" disabled defaultValue={formValue.series} />
                    </div>

                    <div className="model-wrapper relative">
                        <label>MODEL</label>
                        <select required name="model" className="model-select" defaultValue={formValue.model} onChange={handleChange}>
                            {products.map((item, index) => (
                                <option key={index} value={item.name}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <Image src={"/menu/arrow-down.svg"} alt="arrow" className="absolute caret_checkout" width={20} height={20} />
                    </div>

                    <div className="payment-wrapper relative">
                        <label>PAYMENT PLAN</label>
                        <select
                            required
                            name="paymentPlan"
                            className="payment-plan-select"
                            defaultValue={formValue.paymentPlan}
                            onChange={handleChange}
                        >
                            <option value={0}>UPFRONT PAYMENT - RM {currencyFormat(formValue.price, 2, true)}</option>
                            <option value={1}>MONTHLY PAYMENT - RM {currencyFormat(formValue.price, 2, true)}</option>
                            <option value={2}>OUTRIGHT - RM {currencyFormat(formValue.price, 2, true)}</option>
                        </select>
                        <Image src={"/menu/arrow-down.svg"} alt="arrow" className="absolute caret_checkout" width={20} height={20} />
                    </div>

                    <div className="color-wrapper relative">
                        <label>COLOUR</label>
                        <select required name="colour" className="colour-select" defaultValue={formValue.colour} onChange={handleChange}>
                            {products
                                .find((element) => element.name === formValue.model)
                                .colour.map((item, id) => (
                                    <option value={item.key} key={id}>
                                        {item.text.replace("-", " ").toUpperCase()}
                                    </option>
                                ))}
                        </select>
                        <Image src={"/menu/arrow-down.svg"} alt="arrow" className="absolute caret_checkout" width={20} height={20} />
                    </div>

                    <div className="quantity-wrapper">
                        <label>QUANTITY</label>
                        <input required type="number" name="quantity" defaultValue={formValue.quantity} onChange={handleChange} />
                    </div>
                </form>
            </div>
            <div className="right">
                {/* {Object.keys(newOrder).length === 0 ? ( */}
                <div className="form-wrapper">
                    <div className="label">Billing Details</div>
                    <form ref={formRef} className="billing-form" onSubmit={handleCheckout}>
                        <input required type="text" name="fullname" placeholder="Full Name*" onChange={handleChange} />
                        <input type="text" name="companyName" placeholder="Company Name (Optional)" onChange={handleChange} />
                        <input required type="text" name="country" placeholder="Country / Region*" onChange={handleChange} />
                        <input required type="text" name="address1" placeholder="Address*" onChange={handleChange} />
                        <input type="text" name="address2" onChange={handleChange} />
                        <input required type="text" name="city" placeholder="Town / City*" onChange={handleChange} />
                        <input required type="text" name="state" placeholder="State*" onChange={handleChange} />
                        <input required type="text" name="postcode" placeholder="Postcode / Zip*" onChange={handleChange} />
                        <div className="form-row">
                            <input required type="number" name="phone" placeholder="Phone*" onChange={handleChange} />
                            <input required type="email" name="email" placeholder="Email*" onChange={handleChange} />
                        </div>
                        <textarea rows="4" name="notes" placeholder="Order Notes" onChange={handleChange} />
                        <div className="discount-row">
                            <input type="number" name="promoCode" placeholder="Enter discount code" onChange={handleChange} />
                            <button>Apply</button>
                        </div>
                        <button type="submit" className="my-12 min-[1600px]:my-24">
                            Next
                        </button>
                    </form>
                </div>
                {/* ) : (
                    <div className="form-wrapper">
                        <div className="label">Payment Method</div>
                        <form className="payment-form" onSubmit={handleCheckout}>
                            <div className="accordian-wrapper">
                                <div className="accordian-item p-4">
                                    <div className="accordian-title" onClick={() => toggleAccordion("cash")}>
                                        <span className="text-[18px] font-bold text-[#DDDFE0]">Cash Payment</span>
                                        <span
                                            className={`transform transition-transform duration-300 text-[18px] sm:text-[1.5em] text-[#1A0F91] ${
                                                openIndex === "cash" ? "rotate-45" : "rotate-0"
                                            }`}
                                        ></span>
                                    </div>
                                    <div className={`accordian-content pt-4 ${openIndex === "cash"}`}>
                                        <div className="input-wrapper w-full">
                                            <label className="label">CARD NUMBER</label>
                                            <input
                                                className="w-full p-2 rounded-md"
                                                type="text"
                                                name="fullname"
                                                placeholder="1234 1234 1234"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex w-full gap-x-8 ">
                                            <div className="input-wrapper w-1/2">
                                                <label className="label">EXPIRATION DATE</label>
                                                <input
                                                    className="w-full p-2 rounded-md"
                                                    type="text"
                                                    name="fullname"
                                                    placeholder="MM/YY"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="input-wrapper w-1/2">
                                                <label className="label">CVC</label>
                                                <input
                                                    className="w-full p-2 rounded-md"
                                                    type="text"
                                                    name="fullname"
                                                    placeholder="CVC code"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordian-item p-4">
                                    <div className="accordian-title" onClick={() => toggleAccordion("card")}>
                                        <span className="text-[18px] font-bold text-[#DDDFE0]">Credit Card</span>
                                        <span
                                            className={`transform transition-transform duration-300 text-[18px] sm:text-[1.5em] text-[#1A0F91] ${
                                                openIndex === "card" ? "rotate-45" : "rotate-0"
                                            }`}
                                        >
                                            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                                        </span>
                                    </div>
                                    <div className={`accordian-content pt-4 ${openIndex === "card"}`}>
                                        <div className="card"></div>
                                        <div className="card"></div>
                                        <div className="horizontal-line" />
                                        <div className="input-wrapper w-full">
                                            <label className="label">CARD NUMBER</label>
                                            <input
                                                className="w-full p-2 rounded-md"
                                                type="text"
                                                name="fullname"
                                                placeholder="1234 1234 1234"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex w-full gap-x-8 ">
                                            <div className="input-wrapper w-1/2">
                                                <label className="label">EXPIRATION DATE</label>
                                                <input
                                                    className="w-full p-2 rounded-md"
                                                    type="text"
                                                    name="fullname"
                                                    placeholder="MM/YY"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="input-wrapper w-1/2">
                                                <label className="label">CVC</label>
                                                <input
                                                    className="w-full p-2 rounded-md"
                                                    type="text"
                                                    name="fullname"
                                                    placeholder="CVC code"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordian-item p-4">
                                    <div className="accordian-title" onClick={() => toggleAccordion("flexiown")}>
                                        <span className="text-[18px] font-bold text-[#DDDFE0]">FlexiOwn Payment</span>
                                        <span
                                            className={`transform transition-transform duration-300 text-[18px] sm:text-[1.5em] text-[#1A0F91] ${
                                                openIndex === "flexiown" ? "rotate-45" : "rotate-0"
                                            }`}
                                        >
                                            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                                        </span>
                                    </div>
                                    <div className={`accordian-content pt-4 ${openIndex === "flexiown"}`}>
                                        <div className="input-wrapper w-full">
                                            <label className="label">CARD NUMBER</label>
                                            <input
                                                className="w-full p-2 rounded-md"
                                                type="text"
                                                name="fullname"
                                                placeholder="1234 1234 1234"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex w-full gap-x-8 ">
                                            <div className="input-wrapper w-1/2">
                                                <label className="label">EXPIRATION DATE</label>
                                                <input
                                                    className="w-full p-2 rounded-md"
                                                    type="text"
                                                    name="fullname"
                                                    placeholder="MM/YY"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="input-wrapper w-1/2">
                                                <label className="label">CVC</label>
                                                <input
                                                    className="w-full p-2 rounded-md"
                                                    type="text"
                                                    name="fullname"
                                                    placeholder="CVC code"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordian-item p-4">
                                    <div className="accordian-title" onClick={() => toggleAccordion("easypayment")}>
                                        <span className="text-[18px] font-bold text-[#DDDFE0]">Easy Payemnt Plan (EPP)</span>
                                        <span
                                            className={`transform transition-transform duration-300 text-[18px] sm:text-[1.5em] text-[#1A0F91] ${
                                                openIndex === "easypayment" ? "rotate-45" : "rotate-0"
                                            }`}
                                        >
                                            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                                        </span>
                                    </div>
                                    <div className={`accordian-content pt-4 ${openIndex === "easypayment"}`}>
                                        <div className="input-wrapper w-full">
                                            <label className="label">CARD NUMBER</label>
                                            <input
                                                className="w-full p-2 rounded-md"
                                                type="text"
                                                name="fullname"
                                                placeholder="1234 1234 1234"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex w-full gap-x-8 ">
                                            <div className="input-wrapper w-1/2">
                                                <label className="label">EXPIRATION DATE</label>
                                                <input
                                                    className="w-full p-2 rounded-md"
                                                    type="text"
                                                    name="fullname"
                                                    placeholder="MM/YY"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="input-wrapper w-1/2">
                                                <label className="label">CVC</label>
                                                <input
                                                    className="w-full p-2 rounded-md"
                                                    type="text"
                                                    name="fullname"
                                                    placeholder="CVC code"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )} */}
            </div>
            <div className="absolute right-[3vw] min-[1600px]:right-[5vw] top-[18vh] min-[1600px]:top-[15vh] cursor-pointer" onClick={handleClose}>
                <Image src={"/menu/close-circle.png"} alt="close btn" className="w-[50px] min-[1600px]:w-[70px]" width={70} height={70} />
            </div>
        </div>
    );
}

export default CheckoutReview;
