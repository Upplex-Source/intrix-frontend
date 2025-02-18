"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import "./blog-detail.scss";
import { getBlogDetailBySlug } from "@/service/insight-api/InsightServices";
import { useParams } from "next/navigation";

const dummyBlogPosts = [
    {
      id: 1,
      category: "Product",
      readTime: "4 Minute Read",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem",
      image: "/insight/dum1.png",
    },
    {
      id: 2,
      category: "Product",
      readTime: "6 Minute Read",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,",
      image: "/insight/dum2.png",
    },
    {
      id: 3,
      category: "Productivity",
      readTime: "7 Minute Read",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem",
      image: "/insight/dum3.png",
    },
    {
      id: 4,
      category: "Productivity",
      readTime: "7 Minute Read",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus",
      image: "/insight/dum4.png",
    },
  ];

  const dummyPopularPosts = [
    {
      id: 1,
      title: "Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/insight/popular1.png",
    },
    {
      id: 2,
      title: "Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/insight/popular2.png",
    },
    {
      id: 3,
      title: "Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/insight/popular3.png",
    },
    {
      id: 4,
      title: "Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/insight/popular4.png",
    },
  ];

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
        <div className="container mx-auto px-4">
            <div className="mb-8">
                {/* <div className="category">{blogDetail.category}</div> */}
                <div className="text-[42px] xl:text-[52px] text-[#172B4D]">{blogDetail.main_title}</div>
            </div>
            <div className="mb-6 text-[#172B4D] flex items-center gap-2 font-[Montserrat-Regular]">
                <Image className="max-w-[40px]" alt="Author image" src={blogDetail.author?.profile_pic_path || '/appicon.png'} width={50} height={50} />
                <span>By {blogDetail.author?.fullname}</span>
                <span className="px-2 border-l border-r border-[#172B4D]">Published on {blogDetail.publish_date}</span>
                <span>{blogDetail.min_of_read} min read</span>
            </div>
            {/* <Image className="block w-full" src={blogDetail?.images[0]?.path} width={1920} height={1080} alt='Featured image' /> */}
            {blogDetail?.images?.length > 0 ? (
                <Image
                className="block w-full mb-4"
                src={blogDetail.images[0].path}
                width={1920}
                height={1080}
                alt="Featured image"
                />
            ) : (
                <></>
            )}
            <div className="flex gap-8">
                <div className="pb-12 border-b border-[#D6DADC] w-2/3">
                    <div className="blog-description" dangerouslySetInnerHTML={{ __html: blogDetail.text }}></div>
                </div>
                <div className="w-1/3">
                    <h5 className="text-[14px] text-[#42526E] uppercase mb-6">Popular Posts</h5>
                    {dummyPopularPosts.map((popular) => (
                        <div key={popular.id} className="flex gap-2 mb-6 pb-6 items-center border-b border-[#172B4D]">
                            <div className="w-1/4">
                                <Image
                                src={popular.image}
                                width={150}
                                height={100}
                                alt={popular.title}
                                className="w-full h-auto"
                                />
                            </div>
                            <div className="w-3/4">
                                <h2 className="text-[12px] text-[#42526E] uppercase">{popular.title}</h2>
                                <p className="text-[16px] text-[#172B4D] leading-[1.2] font-[Montserrat-Regular]">{popular.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-12 flex flex-col">
                <p className="text-[#42526E] text-[12px] mb-8">Here are some related articles you may find interesting:</p>
                {dummyBlogPosts.map((post) => (
                    <div key={post.id} className="flex gap-6 mb-6 w-3/4 items-center">
                        <div className="w-1/4">
                            <Image
                            src={post.image}
                            width={150}
                            height={100}
                            alt={post.title}
                            className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4">
                            <p className="text-[12px] text-[#42526E] uppercase">
                            {post.category} • {post.readTime}
                            </p>
                            <h2 className="text-[22px] font-bold text-[#172B4D]">{post.title}</h2>
                            <p className="text-[15px] text-[#172B4D] mt-2">{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return <div id="blog-detail-wrapper" className="mt-[200px]">{renderMainBlog(blog)}</div>;
}

export default BlogDetails;
