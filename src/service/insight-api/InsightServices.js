import { getData, postData } from "../ApiBaseService";

export const getAllBlogs = async (obj) => {
    const endpoint = "blogs";

    const result = await postData(endpoint, obj);
    return result;
};

export const getBlogDetailByID = async (obj) => {
    const endpoint = "blogs/details";

    const result = await getData(endpoint);
    return result;
};

export const getBlogDetailBySlug = async (obj) => {
    const endpoint = `blogs/one-blog-by-slug?slug=${obj.slug}`;

    const result = await getData(endpoint);
    return result;
};
