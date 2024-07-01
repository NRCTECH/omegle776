"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import Head from "next/head";
import Navbar2 from "../components/navbar2/Navbar2";
import Breadcrumb from "../components/breadCrumb/BreadCrumb";

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
  "logo": "https://omegle-seven.vercel.app/static/logo.png",
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

interface IBlogItem {
  _id: string;
  title: string;
  category: { _id: string; title: string };
  description: string;
  image: string;
  createdAt: string;
}

interface ICategoryItem {
  _id: string;
  title: string;
}

const slugify = (title: string): string =>
  title
    .toLowerCase()
    .replace(/%20/g, '-') // %20'leri kısa çizgiye çevir
    .replace(/[\s\W-]+/g, '-') // Boşlukları ve özel karakterleri kısa çizgiye çevirir
    .replace(/^-+|-+$/g, ''); // Başlangıç ve bitişteki kısa çizgileri temizler


const Page: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  const [categories, setCategories] = useState<ICategoryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h1"));
    const headingTexts = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
    }));
    setHeadings(headingTexts);
  }, [blogs]);

  const handleReadMore = (title: string) => {
    const slugifiedTitle = slugify(title);
    router.push(`/blog/${slugifiedTitle}`);
  };

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category.title === selectedCategory)
    : blogs;

  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  


  return (
    <div>
            <Head>
            <title>Blogs - Omegle Talk to Strangers</title>
<meta name="description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
<meta name="keywords" content="Omegle, chat, meet new people, secure chat, online friends" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://omegle-seven.vercel.app/blog" />

        <script
          id='jsonLdWebSiteId'
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          id='jsonLdOrganizationId'
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          id='jsonLdWebPageId'
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
        {jsonLdBreadcrumb && (
          <script
            id='jsonLdBreadcrumbId'
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
          />
        )}

        {/* Blog sayfası için SEO bilgileri */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "blogPost": blogs.map((blog) => ({
                "@type": "BlogPosting",
                "headline": blog.title,
                "image": blog.image,
               
                "datePublished": new Date(blog.createdAt).toISOString(),
                "description": blog ? blog.description.substring(0, 160) : "Omegle is just a great way to Video Chat with Girls, meet new people and have a fun time omegle people.",
              })),
            }),
          }}
        />
      </Head>


      <div>
        <Navbar />
        <Navbar2 />
        <div className="absolute ml-8 text-left mt-4">
              <Breadcrumb />
            </div>
        <div className="flex flex-col items-center justify-between p-4 bg-stone-300 min-h-screen mt-0">

          <div className="mt-0 relative w-full flex justify-center">
            <div className="bg-gray-700 w-64 rounded-lg mb-2">
              <div className="opacity-100 p-4 rounded-lg shadow-lg text-white">
                <div className="flex justify-left items-center space-x-4">
                  <h2 className="text-md font-bold">Contents</h2>
                  <button
                  title='Title'
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none hover:text-blue-600"
                  >
                    {isOpen ? "[ close ]" : "[ open ]"}
                  </button>
                </div>
                {isOpen && (
                  <ul className="mt-4 space-y-1">
                    {headings.map((content) => (
                      <li key={content.id} className="text-xs">
                        <a
                          href={`#${content.id}`}
                          className="text-white hover:text-blue-600 transition duration-300"
                        >
                          {content.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

          </div>
          <div className="border-2 md:w-7/12 bg-stone-100 bg-opacity-100 shadow-inner-custom">
            <h1 className="text-2xl font-bold text-black0 mb-3 mt-9 text-center">
              BLOGS
            </h1>
            <div className="flex flex-wrap space-x-4 justify-center underline">
              {categories?.map((category) => (
                <li
                  key={category._id}
                  className={`list-none cursor-pointer ${
                    selectedCategory === category.title
                      ? "font-bold text-black"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category.title)}
                >
                  {category.title}
                </li>
              ))}
            </div>

            <div className="mt-9 space-y-12 ml-7 mr-7 relative">
              {currentBlogs.map((blog) => (
                <div key={blog._id} className="space-y-4">
                  <h1 className="text-xl font-bold mb-4">
                    <button title='Title' onClick={() => handleReadMore(blog.title)}>
                      {blog.title}
                    </button>
                  </h1>
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
                          __html:
                            blog.description.length > 1500
                              ? `${blog.description.slice(0, 1400)}...`
                              : blog.description,
                        }}
                      />
                      <button
                      title='Title'
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

            <div className="flex justify-center mt-6">
              {Array.from(
                { length: Math.ceil(filteredBlogs.length / blogsPerPage) },
                (_, index) => (
                  <button
                  title='Title'
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
