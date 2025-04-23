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
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { validatePromoCode } from "@/service/promo-code-api/PromoCodeService";
import BillingForm from "../billing-form/BillingForm";

function CheckoutReview({ initialValue, ready, setReady }) {
    const [formValue, setFormValue] = useState(initialValue);
    const [openIndex, setOpenIndex] = useState(null);
    const [validated, setValidated] = useState(false);
    const [valid, setValid] = useState(false);
    const [promoValidation, setPromoValidation] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const formRef = useRef();

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
        {
            name: "FILTER",
            price: 580,
            colour: [{ key: 1, text: "chrome" }],
        },
        {
            name: "FONT",
            price: 580,
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
        if (e.target.name === "model") {
            let srcUrl = "";
            let newPrice = 0;
            let modelName = "";

            switch (e.target.value) {
                case "5-IN-1":
                    srcUrl = "/explore/tap-1.png";
                    newPrice = 7500;
                    modelName = "5-IN-1";
                    break;
                case "4-IN-1":
                    srcUrl = "/explore/tap-3.png";
                    newPrice = 5200;
                    modelName = "4-IN-1";
                    break;
                case "2-IN-1":
                    srcUrl = "/explore/tap-2.png";
                    newPrice = 4500;
                    modelName = "2-IN-1";
                    break;
                case "LITE":
                    srcUrl = "/explore/tap-4.png";
                    newPrice = 3988;
                    modelName = "LITE";
                    break;
                case "FILTER":
                    srcUrl = "/product/INTRIX All-in-One Filter.png";
                    newPrice = 580;
                    modelName = "FILTER";
                    break;
                case "FONT":
                    srcUrl = "/product/font-3D.png";
                    newPrice = 580;
                    modelName = "FONT";
                    break;
                default:
                    break;
            }

            setFormValue({ ...formValue, src: srcUrl, price: newPrice, model: modelName });
        } else {
            setFormValue({ ...formValue, [e.target.name]: e.target.value });
        }
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const obj = {
            product_code: formValue.model,
            color: formValue.colour,
            quantity: formValue.quantity,
            promo_code: valid && formValue.promoCode,
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
            if (result) {
                window.location.replace(result.payment_url);
                // console.log(result);

                // Swal.fire({
                //     title: "Order Submitted",
                //     icon: "success",
                //     confirmButtonText: "OK",
                //     confirmButtonColor: "#f79932",
                //     allowOutsideClick: false,
                // }).then((result) => {
                //     if (result.isConfirmed) {
                //         formRef.current.reset();
                //         setReady(false);
                //     }
                // });
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleAccordion = (method) => {
        setOpenIndex(method);
    };

    const handleValidatePromoCode = async () => {
        if (formValue.promoCode) {
            setIsLoading(true);
            setValidated(false);
            setValid(false);

            const obj = {
                product_code: formValue.model,
                color: formValue.colour,
                quantity: formValue.quantity,
                promo_code: formValue.promoCode,
                payment_plan: formValue.paymentPlan,
            };

            // console.log(obj);

            try {
                const result = await validatePromoCode(obj);
                if (result) {
                    setValid(true);
                    setPromoValidation(result);
                    // console.log(result);
                }
                setValidated(true);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        } else {
            setValidated(false);
        }
    };

    return (
        <div id="checkout-wrapper">
            <div className="left">
                <div className="label">Order Details</div>
                <div className="order-img relative overflow-hidden pb-4">
                    <Image src={formValue.src} alt={formValue.model} width={400} height={400} className="block w-fit max-h-[320px]" />
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
                        <FontAwesomeIcon icon={faChevronDown} className="absolute caret_checkout text-[20px] text-[#343637]" />
                        {/* <Image src={"/menu/arrow-down.svg"} alt="arrow" className="absolute caret_checkout" width={20} height={20} /> */}
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
                            <option value={1}>UPFRONT PAYMENT - RM {currencyFormat(formValue.price, 2, true)}</option>
                            <option value={2}>MONTHLY PAYMENT - RM {currencyFormat(formValue.price, 2, true)}</option>
                            <option value={3}>OUTRIGHT - RM {currencyFormat(formValue.price, 2, true)}</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className="absolute caret_checkout text-[20px] text-[#343637]" />
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
                        <FontAwesomeIcon icon={faChevronDown} className="absolute caret_checkout text-[20px] text-[#343637]" />
                    </div>

                    <div className="quantity-wrapper">
                        <label>QUANTITY</label>
                        <input required type="number" name="quantity" defaultValue={formValue.quantity} onChange={handleChange} />
                    </div>
                </form>
            </div>
            <div className="right">
                <BillingForm isLoading={isLoading} formRef={formRef} handleChange={handleChange} handleUpdateBillingDetails={handleCheckout} />
            </div>
            <div
                className="absolute right-[3vw] min-[1600px]:right-[5vw] top-[75px] min-[769px]:top-[18vh] min-[1600px]:top-[15vh] cursor-pointer"
                onClick={handleClose}
            >
                <Image
                    src={"/menu/black-close-circle.png"}
                    alt="close btn"
                    className="w-[40px] min-[769px]:w-[50px] min-[1600px]:w-[70px]"
                    width={70}
                    height={70}
                />
            </div>
        </div>
    );
}

export default CheckoutReview;
