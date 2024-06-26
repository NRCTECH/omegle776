// Page.tsx
"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/navigation"; // next/router kullan
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface IBLogItem {
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
export const metadata: Metadata = {
  title: "Blogs - Omegle: Talk to strangers!",
  description: "Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other.",
  keywords: "Omegle, chat, meet new people, secure chat, online friends",
  robots: "index, follow",
  themeColor: "#ffffff",
};

const Page: React.FC = () => {
  const [blogs, setBlogs] = useState<IBLogItem[]>([]);
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
        // Hata yönetimi burada yapılabilir: kullanıcıya bir hata mesajı gösterilebilir veya tekrar denemesi için bir seçenek sunulabilir
      }
    };
    fetchBlogs();
  }, []);

  const handleReadMore = (id: string) => {
    router.push(`/blog/${id}`);
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



  return (

    <>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omegle-seven.vercel.app" />
        <meta property="og:title" content="Omegle.com - Omegle: Talk to strangers!" />
        <meta property="og:description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
        <meta property="og:image" content="https://omegle-seven.vercel.app/blog-img.webp" />
      </head>

    <div>
      <Navbar />
      <Navbar2 />

      <div className="flex flex-col items-center justify-between p-6 bg-blue-100 min-h-screen mt-0">
        <div className="border-2 md:w-7/12 bg-opacity-30 bg-gray-300 shadow-inner-custom">
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

          {selectedCategory ? (
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
                    <p className="flex-1">
                      {blog.description.length > 600
                        ? `${blog.description.slice(0, 300)}...`
                        : blog.description}
                    </p>
                    {blog.description.length > 600 && (
                      <button
                        className="text-blue-600 mt-2 underline"
                        onClick={() => handleReadMore(blog._id)}
                      >
                        Read more...
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-9 space-y-12 ml-7 mr-7 relative">
              {blogs.slice(indexOfFirstBlog, indexOfLastBlog).map((blog) => (
                <div key={blog._id} className="space-y-4">
                  <h1 className="text-xl font-bold mb-4">{blog.title}</h1>
                  <div className="space-y-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-4/6 mx-auto h-auto rounded-md"
                    />
                    <p className="flex-1">
                      {blog.description.length > 600
                        ? `${blog.description.slice(0, 300)}...`
                        : blog.description}
                    </p>
                    {blog.description.length > 600 && (
                      <button
                        className="text-blue-600 mt-2 underline"
                        onClick={() => handleReadMore(blog._id)}
                      >
                        Read more...
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
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
    </>
  );
};

export default Page;
