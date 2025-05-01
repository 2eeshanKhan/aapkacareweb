'use client';

import React, { useEffect, useState } from 'react';
import { db } from '@/module/firebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Link from 'next/link'

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Newest');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogQuery = query(collection(db, 'Blogs'), orderBy('createdAt', 'desc'));
        const blogSnapshot = await getDocs(blogQuery);
        const blogData = blogSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogData);

        const categorySnapshot = await getDocs(collection(db, 'BlogCategory'));
        const categoryData = categorySnapshot.docs.map(doc => doc.data().name);
        setCategories(['All', ...categoryData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) => category === 'All' || blog.category === category
  );

  const sortedBlogs = [...filteredBlogs].sort((a, b) =>
    sort === 'Newest'
      ? new Date(b.createdAt.toDate()).getTime() - new Date(a.createdAt.toDate()).getTime()
      : new Date(a.createdAt.toDate()).getTime() - new Date(b.createdAt.toDate()).getTime()
  );

  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);
  const displayedBlogs = sortedBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="bg-gray-50 text-gray-800">
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('/images/blogui.png')" }}
      >
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-10">
         
          <h1 className="text-4xl font-bold mb-2 text-black">Aapka Care Blog: Health Tips, Expert Advice, Latest Healthcare Insights</h1>
          
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 text-sm rounded-full border ${
                  category === cat
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="mt-4 md:mt-0">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border px-3 py-2 rounded-md text-sm"
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {displayedBlogs.map((blog) => (
    <Link href={`/${blog.slug}`} key={blog.id}>
      <div className="bg-slate-800 rounded-sm shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer">
        <img
          src={blog.imageUrl || '/images/blogs.avif'}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <button className="text-xs px-3 py-1 bg-sky-100 text-sky-900 font-semibold rounded-full mb-2">
            {blog.category}
          </button>
          <h3 className="text-lg text-white font-semibold mb-1">{blog.title}</h3>
          <div className="text-xs text-white">
            {new Date(blog.createdAt.toDate()).toDateString()} · 5 mins read
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`w-8 h-8 text-sm rounded ${
                currentPage === i + 1
                  ? 'bg-gray-800 text-white'
                  : 'bg-white border border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}