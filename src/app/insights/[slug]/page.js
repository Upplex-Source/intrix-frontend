"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import "./blog-detail.scss";
import {  getBlogDetailBySlug } from "@/service/insight-api/InsightServices";
import { useParams } from "next/navigation";

function BlogDetails() {
    const [isLoading, setIsLoading] = useState(false);
    const [blog, setBlog] = useState({});
    const { slug } = useParams();

    const sampleBlogData = {
        author: "Jordan",
        author_id: null,
        created_at: "2025-02-18 16:05:02",
        display_publish_date: "2025-02-01",
        display_type: "One Minute Read",
        encrypted_id: "al",
        id: 1,
        image: "https://backoffice.intrix.upplex.com.my/storage/blogImage/1739866067.png",
        images: [],
        main_title: "Test Blog Post",
        meta_desc: "description",
        meta_title: "test",
        publish_date: "2025-02-01 00:00:00",
        slug: "bp1",
        status: 10,
        subtitle: "Test Blog Post - 101",
        tag: [],
        text: '<p><img class="image_resized" style="width:19.88%;" src="https://backoffice.intrix.upplex.com.my/storage/blogImage/1739868270.png"></p><p>&nbsp;</p><p>test</p><p>content</p>',
        type: 1,
        updated_at: "2025-02-18 16:44:44",
    };

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
                <span>By {blogDetail.author}</span>
                <span>Published on {blogDetail.publish_date}</span>
                <span>{blogDetail.display_type}</span>
            </div>
            {/* <Image className="blog-image" src={blogDetail.imageSrc} alt='' /> */}
            <div className="blog-content">
                <div className="blog-description">{blogDetail.text}</div>
            </div>
        </div>
    );

    return <div id="blog-detail-wrapper">{renderMainBlog(sampleBlogData)}</div>;
}

export default BlogDetails;
