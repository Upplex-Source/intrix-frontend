import { getData, postData } from "../ApiBaseService";

export const getPromoCode = async (obj) => {
    const obj1 = { per_page: 10, promo_code: "", discount_type: 0 };

    const endpoint = "promo-codes";

    const result = await getData(endpoint, obj);
    return result;
};
