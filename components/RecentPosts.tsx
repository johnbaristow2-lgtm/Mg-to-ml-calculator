import React from 'react';
import { Link } from 'react-router-dom';

const recentArticles = [
  {
    title: 'What is 1 mg to mL?',
    excerpt: 'A detailed breakdown of how to convert 1 milligram to milliliters for different substances, explaining the critical role of density.',
    slug: '/blog/what-is-1mg-in-ml',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=What+is+1+mg+to+mL%3F',
    altText: 'Blog post placeholder image with title: What is 1 mg to mL?',
  },
  {
    title: 'How many mL is 400 mg?',
    excerpt: 'Answering a common conversion question with practical examples for water, medicine, and cooking ingredients. Learn the formula to solve it yourself.',
    slug: '/blog/how-many-ml-is-400mg',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=How+many+mL+is+400+mg%3F',
    altText: 'Blog post placeholder image with title: How many mL is 400 mg?',
  },
   {
    title: 'What is 5 mg in mL?',
    excerpt: 'Building on the basics, this article explains how to convert 5 mg to ml and why the answer is different for substances like oil and sugar.',
    slug: '/blog/what-is-5mg-in-ml',
    imageUrl: 'https://placehold.co/600x400/0052cc/ffffff?text=What+is+5+mg+in+mL%3F',
    altText: 'Blog post placeholder image with title: What is 5 mg in mL?',
  },
];

const RecentPosts: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Latest from Our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentArticles.map(article => (
                        <Link to={article.slug} key={article.slug} className="group flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={article.imageUrl} alt={article.altText} />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">{article.title}</p>
                                    <p className="mt-3 text-base text-gray-500">{article.excerpt}</p>
                                </div>
                                <div className="mt-6">
                                    <span className="text-primary font-semibold group-hover:underline">Read More &rarr;</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentPosts;