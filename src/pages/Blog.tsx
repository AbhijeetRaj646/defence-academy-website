import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag, TrendingUp } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "NDA 2024: Complete Preparation Strategy and Important Updates",
    excerpt: "Everything you need to know about NDA 2024 examination including syllabus changes, preparation tips, and important dates.",
    image: "https://images.pexels.com/photos/8926567/pexels-photo-8926567.jpeg",
    author: "Col. Rajesh Kumar",
    date: "February 20, 2024",
    readTime: "8 min read",
    category: "Exam Updates"
  };

  const blogPosts = [
    {
      id: 2,
      title: "SSB Interview: 15 Common Mistakes to Avoid",
      excerpt: "Learn about the most common mistakes candidates make during SSB interviews and how to avoid them.",
      image: "https://images.pexels.com/photos/8926568/pexels-photo-8926568.jpeg",
      author: "Maj. Priya Sharma",
      date: "February 18, 2024",
      readTime: "6 min read",
      category: "SSB Interview"
    },
    {
      id: 3,
      title: "CDS Mathematics: Quick Revision Tips",
      excerpt: "Last-minute revision strategies for CDS mathematics section with important formulas and shortcuts.",
      image: "https://images.pexels.com/photos/8926569/pexels-photo-8926569.jpeg",
      author: "Dr. Amit Singh",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Study Tips"
    },
    {
      id: 4,
      title: "AFCAT 2024: New Pattern Analysis",
      excerpt: "Detailed analysis of the new AFCAT pattern and effective preparation strategies for better scores.",
      image: "https://images.pexels.com/photos/8926570/pexels-photo-8926570.jpeg",
      author: "Wing Cdr. Abhishek",
      date: "February 12, 2024",
      readTime: "7 min read",
      category: "AFCAT"
    },
    {
      id: 5,
      title: "Physical Fitness for Defence Aspirants",
      excerpt: "Complete guide to building physical fitness for defence services including workout routines and diet plans.",
      image: "https://images.pexels.com/photos/8926571/pexels-photo-8926571.jpeg",
      author: "PT Instructor Kumar",
      date: "February 10, 2024",
      readTime: "10 min read",
      category: "Fitness"
    },
    {
      id: 6,
      title: "Success Story: From Failure to NDA Success",
      excerpt: "Inspiring journey of a student who overcame multiple failures to finally clear NDA and join the Indian Army.",
      image: "https://images.pexels.com/photos/8926572/pexels-photo-8926572.jpeg",
      author: "Academy Team",
      date: "February 8, 2024",
      readTime: "4 min read",
      category: "Success Story"
    },
    {
      id: 7,
      title: "Current Affairs for Defence Exams 2024",
      excerpt: "Monthly compilation of important current affairs topics relevant for all defence entrance examinations.",
      image: "https://images.pexels.com/photos/8926573/pexels-photo-8926573.jpeg",
      author: "GK Expert Team",
      date: "February 5, 2024",
      readTime: "12 min read",
      category: "Current Affairs"
    }
  ];

  const categories = [
    { name: "Exam Updates", count: 15 },
    { name: "Study Tips", count: 23 },
    { name: "SSB Interview", count: 18 },
    { name: "Success Stories", count: 12 },
    { name: "Current Affairs", count: 34 },
    { name: "Fitness", count: 8 }
  ];

  const recentPosts = [
    "NDA 2024 Notification Released",
    "CDS Cut-off Marks Analysis",
    "AFCAT Exam Date Announced",
    "New SSB Selection Process",
    "Defence Academy Merit List"
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Blog & News</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest news, exam updates, study tips, and success stories from the defence world
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-yellow-500"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <User className="h-4 w-4" />
                      <span className="text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>
                  </div>
                  <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">Latest Articles</h2>
                <div className="w-16 h-1 bg-yellow-500"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-xs font-semibold">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-3 hover:text-yellow-600 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-2">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-yellow-500" />
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="flex items-center justify-between text-gray-600 hover:text-blue-900 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-yellow-500" />
                  Recent Posts
                </h3>
                <ul className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-blue-900 transition-colors text-sm leading-relaxed"
                      >
                        {post}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-900 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Get the latest exam updates and preparation tips delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-2 rounded-lg transition-colors text-sm"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">Exam Calendar 2024</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">Syllabus Downloads</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">Previous Year Papers</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">Cut-off Analysis</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">Free Mock Tests</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;