import { faq } from "../data/faq";
import { blogs } from "../data/blogs";

const baseUrl = "https://internship-website-demo.vercel.app";

function SeoSchemas() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` },
      { "@type": "ListItem", position: 3, name: "Products", item: `${baseUrl}/#products` },
      { "@type": "ListItem", position: 4, name: "Blogs", item: `${baseUrl}/#blogs` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": blogs.map((blog) => ({
      "@type": "Article",
      headline: blog.title,
      description: blog.excerpt,
      author: {
        "@type": "Person",
        name: blog.author,
      },
      datePublished: blog.datePublished,
      image: blog.image,
      mainEntityOfPage: `${baseUrl}/#${blog.slug}`,
      publisher: {
        "@type": "Organization",
        name: "IDCARE19",
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}

export default SeoSchemas;