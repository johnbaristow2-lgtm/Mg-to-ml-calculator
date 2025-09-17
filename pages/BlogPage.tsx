import React from 'react';
import { Link } from 'react-router-dom';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  imageUrl: string;
  altText: string;
}

const articles: Article[] = [
  {
    title: 'What is 1 mg to mL?',
    excerpt: 'A detailed breakdown of how to convert 1 milligram to milliliters for different substances, explaining the critical role of density.',
    date: 'November 5, 2023',
    category: 'Common Questions',
    slug: '/blog/what-is-1mg-in-ml',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=What+is+1+mg+to+mL%3F',
    altText: 'Blog post placeholder image with title: What is 1 mg to mL?',
  },
  {
    title: 'How many mL is 400 mg?',
    excerpt: 'Answering a common conversion question with practical examples for water, medicine, and cooking ingredients. Learn the formula to solve it yourself.',
    date: 'November 3, 2023',
    category: 'Common Questions',
    slug: '/blog/how-many-ml-is-400mg',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=How+many+mL+is+400+mg%3F',
    altText: 'Blog post placeholder image with title: How many mL is 400 mg?',
  },
   {
    title: 'What is 5 mg in mL?',
    excerpt: 'Building on the basics, this article explains how to convert 5 mg to ml and why the answer is different for substances like oil and sugar.',
    date: 'November 2, 2023',
    category: 'Common Questions',
    slug: '/blog/what-is-5mg-in-ml',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=What+is+5+mg+in+mL%3F',
    altText: 'Blog post placeholder image with title: What is 5 mg in mL?',
  },
  {
    title: 'How much is 20 mg in a mL syringe?',
    excerpt: 'A crucial guide for understanding medical dosages. Learn how drug concentration is the key to converting mg to ml for a syringe.',
    date: 'October 28, 2023',
    category: 'Medical Safety',
    slug: '/blog/how-much-is-20mg-in-ml-syringe',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=How+much+is+20+mg+in+a+mL+syringe%3F',
    altText: 'Blog post placeholder image with title: How much is 20 mg in a mL syringe?',
  },
  {
    title: 'How to Convert mg to ml Easily: A Step-by-Step Guide',
    excerpt: 'Demystify the process of converting milligrams to milliliters. This guide breaks down the formula and provides practical examples for everyday use.',
    date: 'October 26, 2023',
    category: 'Guides',
    slug: '/blog/how-to-convert-mg-to-ml',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=How+to+Convert+mg+to+ml+Easily',
    altText: 'Blog post placeholder image with title: How to Convert mg to ml Easily: A Step-by-Step Guide',
  },
  {
    title: 'Why Density Matters in mg to ml Conversion',
    excerpt: 'Explore the science behind the mg to ml formula. Learn why density is the crucial factor and how it varies between common substances like water, oil, and flour.',
    date: 'October 22, 2023',
    category: 'Science Explained',
    slug: '/blog/why-density-matters',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=Why+Density+Matters',
    altText: 'Blog post placeholder image with title: Why Density Matters in mg to ml Conversion',
  },
  {
    title: 'Top Uses of mg to ml Calculator in Medicine and Cooking',
    excerpt: 'From the kitchen to the pharmacy, converting mass to volume is a daily task. Discover the most common and critical applications of our calculator.',
    date: 'October 18, 2023',
    category: 'Applications',
    slug: '/blog/top-uses-of-mg-to-ml-calculator',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=Top+Uses+of+mg+to+ml+Calculator',
    altText: 'Blog post placeholder image with title: Top Uses of mg to ml Calculator in Medicine and Cooking',
  },
  {
    title: 'Common Mistakes to Avoid When Converting MG to ML',
    excerpt: 'A simple mistake can lead to big errors in your recipe or dosage. We cover the common pitfalls, such as ignoring density or using the wrong units.',
    date: 'October 15, 2023',
    category: 'Tips & Tricks',
    slug: '/blog/common-mistakes-in-mg-to-ml-conversion',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=Common+Mistakes+to+Avoid',
    altText: 'Blog post placeholder image with title: Common Mistakes to Avoid When Converting MG to ML',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-light-gray py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">Our Blog</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Insights, guides, and articles on the science of conversion.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-1 lg:max-w-none">
          {articles.map((article) => (
            <div key={article.title} className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="md:w-1/3">
                <img className="h-full w-full object-cover" src={article.imageUrl} alt={article.altText} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between md:w-2/3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">{article.category}</p>
                  <Link to={article.slug} className="block mt-2 group">
                    <p className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">{article.title}</p>
                    <p className="mt-3 text-base text-gray-500">{article.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="text-sm text-gray-500">{article.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;