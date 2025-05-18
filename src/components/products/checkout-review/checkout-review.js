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
import { getFreeGifts, getProducts } from "@/service/product-api/ProductService";
import Cookies from "js-cookie";

function CheckoutReview({ initialValue, ready, setReady }) {
    const [formValue, setFormValue] = useState(initialValue);
    const [openIndex, setOpenIndex] = useState(null);
    const [validated, setValidated] = useState(false);
    const [valid, setValid] = useState(false);
    const [promoValidation, setPromoValidation] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [productList, setProductList] = useState();
    const [freeGifts, setFreeGifts] = useState();
    const [selectedProduct, setSelectedProduct] = useState();

    const formRef = useRef();

    const products = [
        {
            name: "5-IN-1",
            price: 7500,
            color: [
                { key: 1, text: "chrome" },
                { key: 2, text: "matte-black" },
            ],
        },
        {
            name: "4-IN-1",
            price: 5200,
            color: [
                { key: 1, text: "chrome" },
                { key: 2, text: "matte-black" },
                { key: 3, text: "satin-gold" },
                { key: 4, text: "gunmetal-grey" },
            ],
        },
        {
            name: "2-IN-1",
            price: 4500,
            color: [
                { key: 1, text: "chrome" },
                { key: 2, text: "matte-black" },
            ],
        },
        {
            name: "LITE",
            price: 3988,
            color: [{ key: 1, text: "chrome" }],
        },
        {
            name: "FILTER",
            price: 580,
            color: [{ key: 1, text: "chrome" }],
        },
        {
            name: "FONT",
            price: 499,
            color: [{ key: 1, text: "chrome" }],
        },
    ];

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

    useEffect(() => {
        const handleFirstLoad = async () => {
            const session_key = Cookies.get("session_key");

            const productsObj = {
                session_key: session_key,
                length: 10,
                start: 0,
            };

            const freeGiftsObj = {
                product_code: formValue.model,
                session_key: session_key,
                length: 10,
                start: 0,
            };

            try {
                const productResult = await getProducts(productsObj);
                const freeGiftResult = await getFreeGifts(freeGiftsObj);

                const result = await Promise.all([productResult, freeGiftResult]);

                if (result[0] && result[1]) {
                    setProductList(result[0].data);
                    setFreeGifts(result[1].free_gifts);
                    setSelectedProduct(result[0].data.find((element) => element.code === formValue.model));
                    console.log(result[0].data.find((element) => element.code === formValue.model));
                    handleImageRefresh(formValue.model, formValue.color);
                }
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        handleFirstLoad();
    }, []);

    const handleClose = () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#checkout-wrapper", {
            xPercent: -100,
            duration: 0.5,
        });

        setReady(false);
    };

    const handleImageRefresh = async (model, color) => {
        const session_key = Cookies.get("session_key");

        const productsObj = {
            session_key: session_key,
            product_code: model,
            color: Number(color),
            length: 10,
            start: 0,
        };
        setIsLoading(true);
        try {
            const result = await getProducts(productsObj);

            if (result) {
                setSelectedProduct(result.data[0]);
                setFormValue({ ...formValue, src: result?.data[0]?.image_path, model: result?.data[0]?.code, color: Number(color) });
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    const handleChange = async (e) => {
        if (e.target.name === "model") {
            let newPrice = 0;
            let modelName = "";

            switch (e.target.value) {
                case "5-IN-1":
                    newPrice = 7500;
                    modelName = "5-IN-1";
                    break;
                case "4-IN-1":
                    newPrice = 5200;
                    modelName = "4-IN-1";
                    break;
                case "2-IN-1":
                    newPrice = 4500;
                    modelName = "2-IN-1";
                    break;
                case "LITE":
                    newPrice = 3988;
                    modelName = "LITE";
                    break;
                case "FILTER":
                    newPrice = 580;
                    modelName = "FILTER";
                    break;
                case "FONT":
                    newPrice = 499;
                    modelName = "FONT";
                    break;
                default:
                    break;
            }

            setFormValue({ ...formValue, price: newPrice, model: modelName, color: 1 });
            handleImageRefresh(modelName, 1);
        } else {
            setFormValue({ ...formValue, [e.target.name]: e.target.value });
            if (e.target.name === "color") {
                handleImageRefresh(formValue.model, e.target.value);
            }
        }
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const obj = {
            product_code: formValue.model,
            color: formValue.color,
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
            free_gift: formValue.freeGift,
        };

        try {
            const result = await directCheckout(obj);
            if (result) {
                window.location.replace(result.payment_url);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleAccordion = (method) => {
        setOpenIndex(method);
    };

    // const handleValidatePromoCode = async () => {
    //     if (promoCode) {
    //         setIsLoading(true);
    //         setValidated(false);
    //         setValid(false);
    //         const session_key = Cookies.get("session_key");

    //         const obj = {
    //             session_key: session_key,
    //             promo_code: promoCode,
    //             type: 2,
    //         };

    //         // console.log(obj);

    //         try {
    //             const result = await validatePromoCode(obj);
    //             if (result) {
    //                 setValid(true);
    //                 setPromoValidation(result);
    //             }
    //             setValidated(true);
    //             setIsLoading(false);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     } else {
    //         setValidated(false);
    //         document.getElementById("promoCode").value = "";
    //     }
    // };

    const handleValidatePromoCode = async () => {
        if (formValue.promoCode) {
            setIsLoading(true);
            setValidated(false);
            setValid(false);

            const obj = {
                product_code: formValue.model,
                color: formValue.color,
                quantity: Number(formValue.quantity),
                promo_code: formValue.promoCode,
                payment_plan: formValue.paymentPlan,
                type: 1,
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
        }
    };

    return (
        <div id="checkout-wrapper">
            <div className="left">
                {isLoading ? (
                    <></>
                ) : (
                    <>
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
                                    {productList?.map((item, index) => (
                                        <option key={index} value={item.code}>
                                            {item.code}
                                        </option>
                                    ))}
                                </select>
                                <FontAwesomeIcon icon={faChevronDown} className="absolute caret_checkout text-[20px] text-[#343637]" />
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
                                    {selectedProduct?.payment_plan?.map((item, index) => (
                                        <option key={index} value={Number(item.id)}>
                                            {`${item.type.toUpperCase()} - RM ${currencyFormat(item.price, 2, true)}`}
                                        </option>
                                    ))}
                                </select>
                                <FontAwesomeIcon icon={faChevronDown} className="absolute caret_checkout text-[20px] text-[#343637]" />
                            </div>

                            <div className="color-wrapper relative">
                                <label>COLOUR</label>
                                <select required name="color" className="color-select" defaultValue={formValue.color} onChange={handleChange}>
                                    {selectedProduct?.colors?.map((item, index) => (
                                        <option key={index} value={Number(item.id)}>
                                            {item.title}
                                        </option>
                                    ))}
                                </select>
                                <FontAwesomeIcon icon={faChevronDown} className="absolute caret_checkout text-[20px] text-[#343637]" />
                            </div>

                            <div className="quantity-wrapper">
                                <label>QUANTITY</label>
                                <input required type="number" name="quantity" defaultValue={formValue.quantity} onChange={handleChange} />
                            </div>

                            {formValue.model !== "FONT" && formValue.model !== "FILTER" && (
                                <div className="payment-wrapper relative">
                                    <label>FREE GIFT</label>
                                    <select
                                        required
                                        name="freeGift"
                                        className="payment-plan-select"
                                        defaultValue={formValue.freeGifts}
                                        onChange={handleChange}
                                    >
                                        {freeGifts?.map((item, index) => (
                                            <option key={index} value={item.code}>
                                                {item.title}
                                            </option>
                                        ))}
                                    </select>
                                    <FontAwesomeIcon icon={faChevronDown} className="absolute caret_checkout text-[20px] text-[#343637]" />
                                </div>
                            )}
                        </form>
                    </>
                )}
            </div>
            <div className="right">
                <BillingForm
                    isLoading={isLoading}
                    formRef={formRef}
                    handleChange={handleChange}
                    handleUpdateBillingDetails={handleCheckout}
                    showPromo={true}
                    handleValidatePromoCode={handleValidatePromoCode}
                    validated={validated}
                    valid={valid}
                    promoValidation={promoValidation}
                />
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
