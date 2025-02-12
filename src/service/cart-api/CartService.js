import { getData, postData } from "../ApiBaseService";

export const addToCart = async (obj) => {
    const endpoint = "carts/add";

    const result = await postData(endpoint, obj);
    return result;
};

export const updateCart = async (obj) => {
    const obj1 = { product_code: "5-IN-1", color: "", quantity: 0, session_key: "", id: 0, cart_item: 0, promo_code: 0, payment_plan: 0 };

    const endpoint = "carts/update";

    const result = await postData(endpoint, obj);
    return result;
};

export const retrieveCart = async (obj) => {
    const endpoint = "carts";

    const result = await getData(endpoint, obj);
    return result;
};

export const deleteCart = async (obj) => {
    const obj1 = { session_key: "", id: 0 };

    const endpoint = "carts/delete";

    const result = await postData(endpoint, obj);
    return result;
};

export const deleteCartItem = async (obj) => {
    const obj1 = { session_key: "", id: 0, cart_item: 0 };

    const endpoint = "carts/delete-cart-item";

    const result = await postData(endpoint, obj);
    return result;
};
