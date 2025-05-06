// 'use client';

// import React, { useEffect, useState } from 'react';
// import { db } from '@/module/firebaseConfig';
// import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// import Link from 'next/link'

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [categories, setCategories] = useState(['All']);
//   const [category, setCategory] = useState('All');
//   const [sort, setSort] = useState('Newest');
//   const [currentPage, setCurrentPage] = useState(1);
//   const blogsPerPage = 6;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const blogQuery = query(collection(db, 'Blogs'), orderBy('createdAt', 'desc'));
//         const blogSnapshot = await getDocs(blogQuery);
//         const blogData = blogSnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setBlogs(blogData);

//         const categorySnapshot = await getDocs(collection(db, 'BlogCategory'));
//         const categoryData = categorySnapshot.docs.map(doc => doc.data().name);
//         setCategories(['All', ...categoryData]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredBlogs = blogs.filter(
//     (blog) => category === 'All' || blog.category === category
//   );

//   const sortedBlogs = [...filteredBlogs].sort((a, b) =>
//     sort === 'Newest'
//       ? new Date(b.createdAt.toDate()).getTime() - new Date(a.createdAt.toDate()).getTime()
//       : new Date(a.createdAt.toDate()).getTime() - new Date(b.createdAt.toDate()).getTime()
//   );

//   const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);
//   const displayedBlogs = sortedBlogs.slice(
//     (currentPage - 1) * blogsPerPage,
//     currentPage * blogsPerPage
//   );

//   return (
//     <div className="bg-gray-50 text-gray-800">
//       <section
//         className="relative bg-cover bg-center h-[250px] sm:h-[500px] text-white"
//         style={{ backgroundImage: "url('/images/blogimages.jpg')" }}
//       >
       
//       </section>

//       <div className="max-w-7xl mx-auto px-4 py-10">
//         <h2 className="text-xl font-bold mb-6 text-sky-800">Aapka Care Blog: Health Tips, Expert Advice, Latest Healthcare Insights</h2>
//         <div className="flex flex-wrap justify-between items-center mb-6">
//           <div className="flex gap-3 flex-wrap">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => {
//                   setCategory(cat);
//                   setCurrentPage(1);
//                 }}
//                 className={`px-4 py-2 text-sm rounded-full border ${
//                   category === cat
//                     ? 'bg-gray-800 text-white'
//                     : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//           <div className="mt-4 md:mt-0">
//             <select
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//               className="border px-3 py-2 rounded-md text-sm"
//             >
//               <option>Newest</option>
//               <option>Oldest</option>
//             </select>
//           </div>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//   {displayedBlogs.map((blog) => (
//     <Link href={`/${blog.slug}`} key={blog.id}>
//       <div className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer border-slate-300 border-1">
//         <img
//           src={blog.imageUrl || '/images/blogs.avif'}
//           alt={blog.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-4">
//           <button className="text-xs px-3 py-1 bg-sky-100 text-sky-900 font-semibold rounded-full mb-2">
//             {blog.category}
//           </button>
//           <h3 className="text-lg text-sky-900 font-semibold mb-1">{blog.title}</h3>
//           <div className="text-xs text-gray-600">
//             {new Date(blog.createdAt.toDate()).toDateString()} · 5 mins read
//           </div>
//         </div>
//       </div>
//     </Link>
//   ))}
// </div>

//         <div className="flex justify-center mt-10 space-x-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               className={`w-8 h-8 text-sm rounded ${
//                 currentPage === i + 1
//                   ? 'bg-gray-800 text-white'
//                   : 'bg-white border border-gray-300 hover:bg-gray-100'
//               }`}
//               onClick={() => setCurrentPage(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import React, { useEffect, useState } from 'react';
// import { db } from '@/module/firebaseConfig';
// import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// import Link from 'next/link';

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [categories, setCategories] = useState(['All']);
//   const [category, setCategory] = useState('All');
//   const [sort, setSort] = useState('Newest');
//   const [currentPage, setCurrentPage] = useState(1);
//   const blogsPerPage = 6;
//   const [loadedImages, setLoadedImages] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const blogQuery = query(collection(db, 'Blogs'), orderBy('createdAt', 'desc'));
//         const blogSnapshot = await getDocs(blogQuery);
//         const blogData = blogSnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setBlogs(blogData);

//         const categorySnapshot = await getDocs(collection(db, 'BlogCategory'));
//         const categoryData = categorySnapshot.docs.map(doc => doc.data().name);
//         setCategories(['All', ...categoryData]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredBlogs = blogs.filter(
//     (blog) => category === 'All' || blog.category === category
//   );

//   const sortedBlogs = [...filteredBlogs].sort((a, b) =>
//     sort === 'Newest'
//       ? new Date(b.createdAt.toDate()).getTime() - new Date(a.createdAt.toDate()).getTime()
//       : new Date(a.createdAt.toDate()).getTime() - new Date(b.createdAt.toDate()).getTime()
//   );

//   const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);
//   const displayedBlogs = sortedBlogs.slice(
//     (currentPage - 1) * blogsPerPage,
//     currentPage * blogsPerPage
//   );

//   const handleImageLoad = (id) => {
//     setLoadedImages(prev => ({ ...prev, [id]: true }));
//   };

//   return (
//     <div className="bg-gray-50 text-gray-800">
//       <section
//         className="relative bg-cover bg-center h-[250px] sm:h-[500px] text-white"
//         style={{ backgroundImage: "url('/images/blogimages.jpg')" }}
//       >
//         {/* You can put a heading or overlay here if needed */}
//       </section>

//       <div className="max-w-7xl mx-auto px-4 py-10">
//         <h2 className="text-xl font-bold mb-6 text-sky-800">
//           Aapka Care Blog: Health Tips, Expert Advice, Latest Healthcare Insights
//         </h2>

//         <div className="flex flex-wrap justify-between items-center mb-6">
//           <div className="flex gap-3 flex-wrap">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => {
//                   setCategory(cat);
//                   setCurrentPage(1);
//                 }}
//                 className={`px-4 py-2 text-sm rounded-full border ${
//                   category === cat
//                     ? 'bg-gray-800 text-white'
//                     : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           <div className="mt-4 md:mt-0">
//             <select
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//               className="border border-gray-300 px-4 py-2 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//             >
//               <option>Newest</option>
//               <option>Oldest</option>
//             </select>
//           </div>
//         </div>

//         {/* Blog Cards with Image Loaders */}
//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {displayedBlogs.map((blog) => (
//             <Link href={`/${blog.slug}`} key={blog.id}>
//               <div className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer border border-slate-300">
//                 <div className="relative w-full h-48">
//                   {!loadedImages[blog.id] && (
//                     <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
//                       <div className="w-6 h-6 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" />
//                     </div>
//                   )}
//                   <img
//                     src={blog.imageUrl || '/images/blogs.avif'}
//                     alt={blog.title}
//                     onLoad={() => handleImageLoad(blog.id)}
//                     className={`w-full h-48 object-cover transition-opacity duration-500 ${
//                       loadedImages[blog.id] ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   />
//                 </div>
//                 <div className="p-4">
//                   <button className="text-xs px-3 py-1 bg-sky-100 text-sky-900 font-semibold rounded-full mb-2">
//                     {blog.category}
//                   </button>
//                   <h3 className="text-lg text-sky-900 font-semibold mb-1">{blog.title}</h3>
//                   <div className="text-xs text-gray-600">
//                     {new Date(blog.createdAt.toDate()).toDateString()} · 5 mins read
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center mt-10 space-x-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               className={`w-8 h-8 text-sm rounded ${
//                 currentPage === i + 1
//                   ? 'bg-gray-800 text-white'
//                   : 'bg-white border border-gray-300 hover:bg-gray-100'
//               }`}
//               onClick={() => setCurrentPage(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import React, { useEffect, useState } from 'react';
import { db } from '@/module/firebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Link from 'next/link';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState({});
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

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

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
      <style jsx>{`
        .loader {
          width: 32px;
          height: 32px;
          border: 4px solid rgba(59, 130, 246, 0.2);
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <section
        className="relative bg-cover bg-center h-[250px] sm:h-[500px] text-white"
        style={{ backgroundImage: "url('/images/blogimages.jpg')" }}
      ></section>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-6 text-sky-800">
          Aapka Care Blog: Health Tips, Expert Advice, Latest Healthcare Insights
        </h2>

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
              className="border px-3 py-2 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedBlogs.map((blog) => (
            <Link href={`/${blog.slug}`} key={blog.id}>
              <div className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer border-slate-300 border-1 relative">
                {!loadedImages[blog.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                    <span className="loader" />
                  </div>
                )}
                <img
                  src={blog.imageUrl || '/images/blogs.avif'}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  onLoad={() => handleImageLoad(blog.id)}
                />
                <div className="p-4">
                  <button className="text-xs px-3 py-1 bg-sky-100 text-sky-900 font-semibold rounded-full mb-2">
                    {blog.category}
                  </button>
                  <h3 className="text-lg text-sky-900 font-semibold mb-1">
                    {blog.title}
                  </h3>
                  <div className="text-xs text-gray-600">
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
