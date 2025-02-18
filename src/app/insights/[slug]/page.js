"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import "./blog-detail.scss";
import { getBlogDetailBySlug } from "@/service/insight-api/InsightServices";
import { useParams } from "next/navigation";

function BlogDetails() {
    const [isLoading, setIsLoading] = useState(false);
    const [blog, setBlog] = useState({});
    const { slug } = useParams();

    useEffect(() => {
        const handleGetBlogDetailBySlug = async () => {
            setIsLoading(true);

            const obj = {
                slug: slug,
            };

            console.log(obj);

            try {
                const result = await getBlogDetailBySlug(obj);
                if (result) {
                    console.log(result);
                    setBlog(result);
                }
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        handleGetBlogDetailBySlug();
    }, []);

    const renderMainBlog = (blogDetail) => (
        <div className="blog-wrapper">
            <div className="blog-header">
                {/* <div className="category">{blogDetail.category}</div> */}
                <div className="title">{blogDetail.main_title}</div>
            </div>
            <div className="blog-author">
                <Image className="author-image" src={blogDetail.image} width={50} height={50} />
                <span>By {blogDetail.author?.fullname}</span>
                <span>Published on {blogDetail.publish_date}</span>
                <span>{blogDetail.display_type}</span>
            </div>
            {/* <Image className="blog-image" src={blogDetail.imageSrc} alt='' /> */}
            <div className="blog-content">
                <div className="blog-description">{blogDetail.meta_desc}</div>
            </div>
        </div>
    );

    return <div id="blog-detail-wrapper">{renderMainBlog(blog)}</div>;
}

export default BlogDetails;
