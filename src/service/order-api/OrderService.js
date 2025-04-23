import { getData, postData } from "../ApiBaseService";

export const retrieveUserOrder = async (obj) => {
    const endpoint = `orders?reference=${obj.reference}&per_page=${obj.per_page}`;

    const result = await getData(endpoint);
    return result;
};

// export const retrieveCart = async (obj) => {
//     const endpoint = `carts?session_key=${obj.session_key}&per_page=${obj.per_page}`;

//     const result = await getData(endpoint, obj);
//     return result;
// };

export const retryPayment = async (obj) => {
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
