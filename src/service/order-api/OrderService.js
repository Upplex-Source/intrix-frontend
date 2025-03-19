import { getData, postData } from "../ApiBaseService";

export const retrieveUserOrder = async (obj) => {
    const obj1 = { reference: "", id: 0, status: 0, per_page: 10 };

    const endpoint = "orders";

    const result = await getData(endpoint);
    return result;
};

export const retryPayment = async (obj) => {
    const obj1 = {
        session_key: "",
        cart_item: 0,
        promo_code: 0,
        fullname: "",
        company_name: "",
        email: "",
        phone_number: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        postcode: "",
        country: "",
        remarks: "",
        payment_plan: 0,
    };

    const endpoint = "orders/retry-payment";

    const result = await postData(endpoint, obj);
    return result;
};

export const checkout = async (obj) => {
    const endpoint = "orders/cart-checkout";

    const result = await postData(endpoint, obj);
    return result;
};

export const directCheckout = async (obj) => {
    const endpoint = "orders/direct-checkout";

    const result = await postData(endpoint, obj);
    return result;
};
