import { postData } from "../ApiBaseService";

export const getCountries = async (obj) => {
    const endpoint = "where-to-find-us/countries";

    const result = await postData(endpoint, obj);
    return result;
};

export const getInstallationGuide = async (obj) => {
    // const obj1 = { country: "Malaysia" };
    const endpoint = "guides-resources/installation-guides";

    const result = await postData(endpoint, obj);
    return result;
};

export const getProductBrochures = async (obj) => {
    // const obj1 = { country: "Malaysia" };
    const endpoint = "guides-resources/product-brochures";

    const result = await postData(endpoint, obj);
    return result;
};

export const getVideos = async (obj) => {
    // const obj1 = { country: "Malaysia" };
    const endpoint = "guides-resources/videos";

    const result = await postData(endpoint, obj);
    return result;
};

export const submitContactUsForm = async (obj) => {
    const endpoint = "contact-us";

    const result = await postData(endpoint, obj);
    return result;
};

// export const retrieveCart = async (obj) => {
//     const endpoint = `carts?session_key=${obj.session_key}&per_page=${obj.per_page}`;

//     const result = await getData(endpoint, obj);
//     return result;
// };
