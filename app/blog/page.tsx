"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/navigation";
import Breadcrumb from "../components/breadCrumb/BreadCrumb";
import Head from "next/head";
import Link from "next/link";

interface IBlogItem {
  _id: string;
  title: string;
  category: { _id: string; title: string };
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
    router.push(`/blog/${title}`);
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
        <title>Blog - Omegle: Talk to strangers!</title>
        <meta
          name="description"
          content="Omegle is a great place to meet new friends..."
        />
        <meta
          name="keywords"
          content="Omegle, chat, meet new people, secure chat, online friends"
        />
        <meta
          property="og:title"
          content="Omegle.com - Omegle: Talk to strangers!"
        />
        <meta
          property="og:description"
          content="Omegle is a great place to meet new friends..."
        />
        <meta
          property="og:image"
          content="https://omegle-seven.vercel.app/blog-img.webp"
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
                    <button onClick={() => handleReadMore(blog.title)}>
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
