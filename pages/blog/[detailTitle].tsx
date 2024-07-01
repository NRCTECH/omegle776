import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Navbar from '@/app/components/navbar/Navbar';
import Navbar2 from '@/app/components/navbar2/Navbar2';
import { useRouter } from 'next/router';
import { htmlToText } from 'html-to-text';
import Breadcrumb from '@/app/components/breadCrumb/BreadCrumb';
import Footer from '@/app/components/footer/Footer';
import { format } from 'date-fns';

interface IBlogItem {
  _id: string;
  title: string;
  category: {title: string, _id: string};
  description: string;
  image: string;
  createdAt: Date;
}

interface IFaqItem {
  _id: string;
  question: string;
  answer: string;
  blogId?: { _id: string; title: string };
}

interface BlogDetailProps {
  blog: IBlogItem | null;
  faqs: IFaqItem[];
}

const BlogDetail = ({ blog, faqs = [] }: BlogDetailProps) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [pageTitle, setPageTitle] = useState('Loading...');
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (blog) {
      setPageTitle(blog.title);
    }
  }, [blog]);

  useEffect(() => {
    if (blog && blog.description) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = blog.description;

      const headingsFromContent = Array.from(tempDiv.querySelectorAll('h1, h2, h3'));
      headingsFromContent.forEach((heading, index) => {
        const id = `content-heading-${index}`;
        heading.id = id;
      });

      const quillContent = document.querySelector('.quill-content');
      if (quillContent) {
        quillContent.innerHTML = tempDiv.innerHTML;
      }

      const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3'));
      allHeadings.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
      });

      const updatedHeadings = allHeadings.map((heading) => ({
        id: heading.id,
        text: heading.textContent || '',
      }));

      setHeadings(updatedHeadings);
    }
  }, [blog]);

  const toggleFaq = (id: string) => {
    if (openIndex === id) {
      setOpenIndex(null); // Eğer zaten açıksa kapat
    } else {
      setOpenIndex(id); // Değilse aç
    }
  };

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth',
      });
    } else {
      console.error(`Element with id ${id} not found.`);
    }
  };


    // Başlıkları URL dostu hale getirir, küçük harf ve kısa çizgi kullanır
    const slugify = (title: string) =>
      title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Omegle",
    "url": "https://omegle-seven.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://omegle-seven.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Omegle",
    "url": "https://omegle-seven.vercel.app",
    "logo": "https://omegle-seven.vercel.app/static/logo.png",
    "sameAs": [
      "https://www.facebook.com/Omegle",
      "https://twitter.com/Omegle",
      "https://www.instagram.com/Omegle",
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": blog ? blog.title : "Omegle: Talk to Strangers",
    "description": blog ? blog.description.substring(0, 160) : "Omegle is just a great way to Video Chat with Girls, meet new people and have a fun time omegle people.",
    "url": `https://omegle-seven.vercel.app${router.asPath}`,
    "breadcrumb": {
      "@id": `https://omegle-seven.vercel.app${router.asPath}#breadcrumb`,
    },
    "inLanguage": "en-US",
    "potentialAction": [
      {
        "@type": "ReadAction",
        "target": `[https://omegle-seven.vercel.app${router.asPath}]`,
      },
    ],
  };

  const jsonLdBreadcrumb = blog ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://omegle-seven.vercel.app",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": blog.category.title,
        "item": `https://omegle-seven.vercel.app/category/${blog.category._id}`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": `https://omegle-seven.vercel.app/blog/${slugify(blog.title)}`,
      },
    ],
  } : null;

  const jsonLdArticle = blog ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://omegle-seven.vercel.app/blog/${slugify(blog.title)}#article`,
    "isPartOf": {
      "@id": `https://omegle-seven.vercel.app/blog/${slugify(blog.title)}`,
    },
    "headline": blog.title,
    "datePublished": blog.createdAt,
    "dateModified": blog.createdAt,
    "mainEntityOfPage": {
      "@id": `https://omegle-seven.vercel.app/blog/${slugify(blog.title)}`,
    },
    "wordCount": blog.description.split(' ').length,
    "publisher": {
      "@id": "https://omegle-seven.vercel.app/#organization",
    },
    "keywords": blog.title.split(' '),
    "articleSection": [blog.category.title],
    "inLanguage": "en-US",
  } : null;

  const jsonLdFaqs = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;


  return (
    <div className='bg-stone-300'>
      <Head>
        <title>{blog ? blog.title : 'Blog Detail'}</title>
        <meta name="description" content={blog && blog.description ? htmlToText(blog.description.substring(0, 160), { wordwrap: false }) : 'Blog details and more'} />
        <meta name="keywords" content={blog ? blog.title.split(' ').join(', ') : 'blog, detail, article'} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={blog ? `https://omegle-seven.vercel.app/blog/${slugify(blog.title)}` : 'https://omegle-seven.vercel.app/blog'} />


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
        {jsonLdArticle && (
          <script
            id='jsonLdArticleId'
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
          />
        )}
        {jsonLdFaqs && (
          <script
            id='jsonLdFaqsId'
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqs) }}
          />
        )}

      </Head>
      <Navbar />
      <Navbar2 />
      <Breadcrumb category={blog?.category.title} title={blog?.title} />
      <div className="container mx-auto px-4">
      <div className='border-2 bg-stone-100 bg-opacity-100 mb-16 w-4/5 mx-auto mt-12'>

      {blog && blog.image && (
          <img src={blog.image} alt={blog.title} width={700} height={700} className="mx-auto mt-7 rounded shadow-md mb-8" />
        )}
        <span className="w-full items-right text-xs p-8 pb-4 text-black text-left ml-9">
          {blog?.createdAt && format(new Date(blog.createdAt), 'MMMM dd, yyyy')}
        </span>
        <div className='mx-auto text-center mb-7 mt-6'>
        <h1 className="text-3xl font-bold  mb-1 text-center text-black">{blog?.title}</h1>
        <span className="w-full text-xs text-black text-center mx-auto">{blog?.category.title} {'>'} {blog?.title}</span>
        </div>
        <div className="text-black text-justify quill-content mx-16 mb-9"></div>

        
      </div>
      <div className="mt-16 w-4/5 text-center mx-auto">
          <h2 className="text-3xl font-bold mb-7 text-center">FAQs</h2>
          {faqs.map((faq) => (
            <div key={faq._id} className="mb-4 p-4 rounded bg-stone-100 opacity-100 shadow cursor-pointer" onClick={() => toggleFaq(faq._id)}>
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              {openIndex === faq._id && <p className='mt-2 text-black  rounded-lg'>{faq.answer}</p>}
            </div>
          ))}
        </div>



      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { detailTitle } = context.params || {};

  if (!detailTitle) {
    return { notFound: true };
  }

  const decodedTitle = decodeURIComponent(detailTitle as string).replace(/-/g, ' ');

  try {
    const resBlog = await fetch(`https://omegle-seven.vercel.app/api/blogs?title=${encodeURIComponent(decodedTitle)}`);
    const blogs = await resBlog.json();
    const selectedBlog = blogs.length > 0 ? blogs.find((blog: IBlogItem) => blog.title.toLowerCase() === decodedTitle.toLowerCase()) : null;

    if (!selectedBlog) {
      return { notFound: true };
    }

    const resFaqs = await fetch('https://omegle-seven.vercel.app/api/faqs');
    const faqsData = await resFaqs.json();
    const filteredFaqs = selectedBlog ? faqsData.filter((faq: IFaqItem) => faq.blogId?.title === selectedBlog.title) : [];

    return {
      props: {
        blog: selectedBlog || null,
        faqs: filteredFaqs,
      },
    };
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    return { notFound: true };
  }
};

export default BlogDetail;
