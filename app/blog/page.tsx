"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/navigation";
import Breadcrumb from "../components/breadCrumb/BreadCrumb";
import Head from "next/head";

interface IBlogItem {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface ICategoryItem {
  _id: string;
  title: string;
}

const Page: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  const [categories, setCategories] = useState<ICategoryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Veri alınamadı");
        }
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Bloglar alınırken hata oluştu:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleReadMore = (title: string) => {
    router.push(`/blog/${title}`);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Kategori değiştiğinde sayfayı 1'e ayarla
  };

  // Calculate index of the last blog on current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  // Calculate index of the first blog on current page
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  // Slice blogs array to get blogs for the current page
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Omegle",
    "url": "https://omegle-seven.vercel.app/blog",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://omegle-seven.vercel.app/blog/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Omegle",
    "url": "https://omegle-seven.vercel.app/blog",
    "logo": "https://omegle-mu.vercel.app/static/logo.png",
    "sameAs": [
      "https://www.facebook.com/Omegle",
      "https://twitter.com/Omegle",
      "https://www.instagram.com/Omegle"
    ]
  };
  
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Omegle: Talk to Strangers",
    "description": "Omegle is just a great way to Video Chat with Girls, meet new people and have a fun time omegle people.",
    "url": "https://omegle-seven.vercel.app/blog"
  };
  
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://omegle-seven.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://omegle-seven.vercel.app/blog"
      }
    ]
  };

  return (
    <div>
      <Head>
        <title>Blog - Omegle: Talk to strangers!</title>
        <meta name="description" content="Omegle is a great place to meet new friends..."/>
        <meta name="keywords" content="Omegle, chat, meet new people, secure chat, online friends"/>
        <meta property="og:title" content="Omegle.com - Omegle: Talk to strangers!"/>
        <meta property="og:description" content="Omegle is a great place to meet new friends..."/>
        <meta property="og:image" content="https://omegle-seven.vercel.app/blog-img.webp"/>
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div>
        <Navbar />
        <Navbar2 />
        <div className="flex flex-col items-center justify-between p-6 bg-blue-100 min-h-screen mt-0">
          <div className="mt-4 relative w-full">
            <div className="absolute ml-8 text-left">
              <Breadcrumb />
            </div>
          </div>
          <div className="border-2 md:w-7/12 bg-opacity-30 bg-gray-300 shadow-inner-custom ">
            <img
              src="blog-img.webp"
              alt="Profile Picture"
              className="w-full h-full object-cover rounded-md p-5"
            />

            <h1 className="text-2xl font-bold text-gray-800 mb-3 mt-9 text-center">
              BLOGS
            </h1>
            <div className="flex flex-wrap space-x-4 justify-center underline">
              {categories?.map((category) => (
                <li
                  key={category._id}
                  className={`list-none cursor-pointer ${
                    selectedCategory === category._id
                      ? "font-bold text-blue-600 "
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category._id)}
                >
                  {category.title}
                </li>
              ))}
            </div>

            <div className="mt-9 space-y-12 ml-7 mr-7 relative">
              {currentBlogs.map((blog) => (
                <div key={blog._id} className="space-y-4">
                  <h1 className="text-xl font-bold mb-4">{blog.title}</h1>
                  <div className="space-y-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-4/6 mx-auto h-auto rounded-md"
                    />
                    <div className="flex-1">
                      <div
                        className="text-black"
                        dangerouslySetInnerHTML={{
                          __html: blog.description.length > 400
                            ? `${blog.description.slice(0, 400)}...`
                            : blog.description,
                        }}
                      />
                      <button
                        className="text-blue-600 mt-2 underline"
                        onClick={() => handleReadMore(blog.title)}
                      >
                        Devamını oku...
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sayfalandırma */}
            <div className="flex justify-center mt-6">
              {Array.from(
                { length: Math.ceil(filteredBlogs.length / blogsPerPage) },
                (_, index) => (
                  <button
                    key={index}
                    className={`mb-2 mt-4 mx-1 px-3 py-1 rounded-xl focus:outline-none ${
                      currentPage === index + 1
                        ? "bg-blue-600 text-black font-bold hover:bg-blue-300 hover:text-black"
                        : "bg-blue-400 text-black font-bold hover:bg-blue-500 hover:text-white"
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
