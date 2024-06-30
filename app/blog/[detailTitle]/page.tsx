import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
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

interface JsonLdScripts {
  website: object;
  organization: object;
  webPage: object;
  breadcrumb: object;
}

interface PageProps {
  blog: IBlogItem;
  faqs: IFaqItem[];
  jsonLdScripts: JsonLdScripts;
}

const Page: React.FC<PageProps> = ({ blog, faqs, jsonLdScripts }) => {
  return (
    <div className='bg-stone-300'>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScripts.website) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScripts.organization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScripts.webPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScripts.breadcrumb) }} />
      </Head>
      <Navbar />
      <Navbar2 />
      <Breadcrumb category={blog.category.title} title={blog.title} />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-8">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-auto rounded shadow-md mb-8" />
        <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">FAQs</h2>
          {faqs.map((faq) => (
            <div key={faq._id} className="mb-4 p-4 rounded bg-white shadow">
              <h3 className="font-semibold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const blogId = params?.id;  // URL'den blog ID'si alınıyor.

  // API'den blog bilgilerini çekme
  const blogRes = await fetch(`https://example.com/api/blogs/${blogId}`);
  const blog = await blogRes.json();

  // API'den blog'a ait FAQs bilgilerini çekme
  const faqsRes = await fetch(`https://example.com/api/faqs?blogId=${blogId}`);
  const faqs = await faqsRes.json();

  // JSON-LD yapılandırılmış veri betikleri oluşturma
  const jsonLdScripts = {
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": blog.title,
      "url": `https://your-website.com/blog/${blogId}`,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `https://your-website.com/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Your Organization Name",
      "url": "https://your-website.com",
      "logo": "https://your-website.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/your-page",
        "https://twitter.com/your-page",
        "https://www.instagram.com/your-page"
      ]
    },
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": blog.title,
      "description": blog.description,
      "url": `https://your-website.com/blog/${blogId}`
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://your-website.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `https://your-website.com/blog/${blogId}`
        }
      ]
    }
  };

  return {
    props: {
      blog,
      faqs,
      jsonLdScripts
    }
  };
};

export default Page;
