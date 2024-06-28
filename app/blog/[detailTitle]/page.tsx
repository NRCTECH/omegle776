"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/app/components/navbar/Navbar';
import Navbar2 from '@/app/components/navbar2/Navbar2';
import Footer from '@/app/components/footer/Footer';
import Breadcrumb from '@/app/components/breadCrumb/BreadCrumb';
interface IBlogItem {
  _id: string;
  title: string;
  category: { title: string };
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IFaqItem {
  _id: string;
  question: string;
  answer: string;
  blogId?: { _id: string; title: string };
}

const Page: React.FC = () => {
  const [faqs, setFaqs] = useState<IFaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<IBlogItem | null>(null);
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const params = useParams();
  const detailTitle = Array.isArray(params?.detailTitle) ? params.detailTitle[0] : params?.detailTitle || '';
  const decodedTitle = decodeURIComponent(detailTitle.replace(/-/g, ' '));

  const formatTitleForURL = (title: string): string => {
    return encodeURIComponent(
      title.toLowerCase().replace(/ /g, '-').replace(/\./g, '-')
    );
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      const blog = blogs.find((blog) => blog.title.toLowerCase() === decodedTitle.toLowerCase()) || null;
      setSelectedBlog(blog);
    }
  }, [decodedTitle, blogs]);

  useEffect(() => {
    if (selectedBlog) {
      const formattedTitle = formatTitleForURL(selectedBlog.title);
      router.replace(`/blog/${formattedTitle}`);
    }
  }, [selectedBlog, router]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const res = await fetch('/api/faqs');
      const data = await res.json();
      const filteredFaqs = selectedBlog ? data.filter((faq: IFaqItem) => faq.blogId?.title === selectedBlog.title) : [];
      setFaqs(filteredFaqs);
      console.log(filteredFaqs)

    };

    if (selectedBlog) {
      fetchFaqs();
    }
  }, [selectedBlog]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'));
    const headingTexts = headingElements.map((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      return { id, text: heading.textContent || '' };
    });
    setHeadings(headingTexts);
  }, [selectedBlog]);

  const toggleFaq = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className='bg-blue-100'>
      <Navbar />
      <Navbar2 />
      <div className="bg-blue-100">
        <div className="top-20 left-10 mt-4 bg-blue-400 w-64 rounded-lg ml-9">
          <div className="opacity-85 p-4 rounded-lg shadow-lg text-white">
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
                    <a href={`#${content.id}`} className="text-white hover:text-blue-600 transition duration-300">
                      {content.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="mt-4 ml-8">
          <Breadcrumb category={selectedBlog?.category.title} title={selectedBlog?.title} />
        </div>
      </div>
      <div className="flex flex-col items-center p-6 bg-blue-100">
        <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom mt-0 p-4">
          {selectedBlog?.image && (
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-auto h-auto mx-auto object-cover mt-4 p-5 shadow-inner-custom"
            />
          )}
          <h1 className="text-xs font-bold text-black mb-3 mt-9 text-left ml-7">
            {selectedBlog?.createdAt ? new Date(selectedBlog.createdAt).toLocaleDateString() : ''}
          </h1>
          <h1 id="title" className="text-2xl font-bold text-gray-800 mb-0 mt-9 text-center">
            {selectedBlog?.title}
          </h1>
          <span className='block text-xs pb-8 text-center items-center mt-2'>{selectedBlog?.category.title} {'>'} {selectedBlog?.title}</span>
          <div className="text-black mb-4 ml-7 mr-4 mx-auto w-full">
            <div dangerouslySetInnerHTML={{ __html: selectedBlog?.description || '' }} className="max-w-full" />
          </div>
        </div>
      </div>
      <div className="bg-blue-100 max-w-screen-lg w-full mx-auto mb-8 md:mb-16">
        <div className="mt-12">
          <h2 className="text-3xl flex justify-center font-bold mb-4 text-black">FAQs</h2>
          <div>
            {faqs.map((item) => (
              <div key={item._id} className="py-2">
                <button
                  className="flex items-center justify-between w-full py-2 px-4 text-left bg-white rounded-t-lg shadow-lg focus:outline-none focus:ring focus:ring-black"
                  onClick={() => toggleFaq(item._id)}
                >
                  <span className="text-xl font-semibold">{item.question}</span>
                  <svg
                    className="w-6 h-6 text-gray-600 transform transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: openIndex === item._id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <path
                      d="M5 15l7-7 7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openIndex === item._id && (
                  <div className="flex items-center justify-between w-full py-2 px-4 text-left font-bold rounded-b-lg shadow-lg">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
