'use client';
import { useState } from 'react';
import { db } from '@/module/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function CommentForm({ blogId }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Prevent updating comment if it's already over 4000 characters
    if (name === 'comment' && value.length > 4000) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, comment } = formData;

    if (!name || !email || !comment) {
      alert('Please fill all required fields.');
      return;
    }

    if (comment.length > 4000) {
      alert('Comment cannot exceed 4000 characters.');
      return;
    }

    try {
      await addDoc(collection(db, 'Blogs', blogId, 'Comments'), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setFormData({ name: '', email: '', website: '', comment: '' });
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 max-w-2xl space-y-4">
      <h3 className="text-2xl font-semibold text-rose-800">Leave a Reply</h3>
      <p className="text-gray-600 text-sm mb-4">
        Your email address will not be published. Required fields are marked *
      </p>

      <div>
        <textarea
          name="comment"
          placeholder="Comment *"
          value={formData.comment}
          onChange={handleChange}
          className="w-full h-48 border rounded p-3"
          required
          maxLength={4000}
        />
        <p className="text-sm text-gray-500 text-right">
          {formData.comment.length}/4000 characters
        </p>
      </div>

      <input
        name="name"
        type="text"
        placeholder="Name *"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email *"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />

      <input
        name="website"
        type="text"
        placeholder="Website"
        value={formData.website}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />

      <button
        type="submit"
        className="bg-sky-600 hover:bg-sky-800 text-white px-4 py-2 rounded"
      >
        Post Comment
      </button>
    </form>
  );
}
