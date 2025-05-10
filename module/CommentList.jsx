'use client';
import { useEffect, useState } from 'react';
import { db } from '@/module/firebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { format } from 'date-fns';

export default function CommentList({ blogId }) {
  const [comments, setComments] = useState([]);

  // State to track expanded comments
  const [expandedComments, setExpandedComments] = useState({});

  useEffect(() => {
    const q = query(
      collection(db, 'Blogs', blogId, 'Comments'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, [blogId]);

  // Function to toggle the expanded state of a comment
  const toggleExpand = (id) => {
    setExpandedComments((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the expanded state for this comment
    }));
  };

  return (
    <div className=" max-w-3xl">
      {/* <h3 className="text-4xl font-semibold text-gray-800 mb-8">
        {comments.length} Comment{comments.length !== 1 && 's'}
      </h3> */}
      <div className="space-y-8">
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            className={`p-6 rounded-sm  hover:shadow-xl transition-all transform hover:scale-105 ${
              index % 2 === 0 ? 'bg-green-50' : 'bg-blue-50'
            }`}
          >
            <div className="flex items-center mb-5">
              {/* User Avatar */}
              <div className="w-14 h-14 rounded-sm bg-slate-700 flex items-center justify-center text-white text-xl font-semibold uppercase shadow-sm">
                {comment.name[0]} {/* Display first letter of name as avatar */}
              </div>
              <div className="ml-5 flex-1">
                <p className="text-xl font-semibold text-gray-800">{comment.name}</p>
                {/* <p className="text-sm text-gray-400">
                  {format(comment.createdAt?.toDate(), 'hh:mm a')} |{' '}
                  {format(comment.createdAt?.toDate(), 'd MMM yyyy')}
                </p> */}
                <p className="text-sm text-gray-400">
  {comment.createdAt && typeof comment.createdAt.toDate === 'function'
    ? `${format(comment.createdAt.toDate(), 'hh:mm a')} | ${format(comment.createdAt.toDate(), 'd MMM yyyy')}`
    : ''}
</p>
              </div>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed">
              {expandedComments[comment.id]
                ? comment.comment
                : comment.comment.length > 150
                ? `${comment.comment.slice(0, 150)}...`
                : comment.comment}
            </p>
            {comment.comment.length > 150 && (
              <span
                onClick={() => toggleExpand(comment.id)}
                className="text-blue-500 cursor-pointer hover:underline mt-2 block"
              >
                {expandedComments[comment.id] ? 'Read Less' : 'Read More'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
