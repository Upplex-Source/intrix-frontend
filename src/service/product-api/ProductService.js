import { getData, postData } from "../ApiBaseService";

export const getAddOn = async (obj) => {
    const endpoint = "add-ons";

    const result = await postData(endpoint, obj);
    return result;
};

export const getFreeGifts = async (obj) => {
    const endpoint = "free-gifts";

    const result = await postData(endpoint, obj);
    return result;
};

export const getProducts = async (obj) => {
    const endpoint = "products";

    const result = await postData(endpoint, obj);
    return result;
};

export const getProductImage = async (obj) => {
    const endpoint = "product/image";

    const result = await postData(endpoint, obj);
    return result;
};
// export const retrieveCart = async (obj) => {
//     const endpoint = `carts?session_key=${obj.session_key}&per_page=${obj.per_page}`;

//     const result = await getData(endpoint, obj);
//     return result;
// };
