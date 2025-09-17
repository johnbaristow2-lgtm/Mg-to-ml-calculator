
import React from 'react';
import { Link } from 'react-router-dom';

const allArticles = [
  {
    title: 'How to Convert mg to ml Easily',
    category: 'Guides',
    slug: '/blog/how-to-convert-mg-to-ml',
  },
  {
    title: 'Why Density Matters in Conversion',
    category: 'Science Explained',
    slug: '/blog/why-density-matters',
  },
  {
    title: 'Top Uses of the Calculator',
    category: 'Applications',
    slug: '/blog/top-uses-of-mg-to-ml-calculator',
  },
  {
    title: 'Common Mistakes to Avoid',
    category: 'Tips & Tricks',
    slug: '/blog/common-mistakes-in-mg-to-ml-conversion',
  },
];

interface BlogPostLayoutProps {
    title: string;
    date: string;
    category: string;
    children: React.ReactNode;
    currentSlug: string;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ title, date, category, children, currentSlug }) => {
  const relatedArticles = allArticles.filter(a => a.slug !== currentSlug).slice(0, 3);

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-base font-semibold text-primary tracking-wide uppercase">{category}</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">{title}</h1>
          <p className="mt-6 text-md text-gray-500">Published on {date}</p>
        </div>
        <div className="prose lg:prose-xl mx-auto text-gray-700">
          {children}
        </div>
        
        {relatedArticles.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Keep Reading</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedArticles.map(article => (
                      <Link key={article.slug} to={article.slug} className="block p-6 bg-light-gray rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group">
                          <p className="text-sm font-medium text-primary">{article.category}</p>
                          <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">{article.title}</h3>
                      </Link>
                  ))}
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostLayout;