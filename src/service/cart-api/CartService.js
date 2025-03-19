import { getData, postData } from "../ApiBaseService";

export const addToCart = async (obj) => {
    const endpoint = "carts/add";

    const result = await postData(endpoint, obj);
    return result;
};

export const updateCart = async (obj) => {
    const endpoint = "carts/update";

    const result = await postData(endpoint, obj);
    return result;
};

export const retrieveCart = async (obj) => {
    const endpoint = `carts?session_key=${obj.session_key}&per_page=${obj.per_page}`;

    const result = await getData(endpoint, obj);
    return result;
};

export const updateAddOnCart = async (obj) => {
    const endpoint = "carts/update-add-on";

    const result = await postData(endpoint, obj);
    return result;
};

export const updateBillingDetails = async (obj) => {
    const endpoint = "carts/update-shipment";

    const result = await postData(endpoint, obj);
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
