import { db } from '@/module/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import BlogContent from '@/module/BlogContent'
import CommentForm from '@/module/CommentForm'
import CommentList from '@/module/CommentList'

export async function generateStaticParams() {
  const q = query(collection(db, 'Blogs'));
  const snapshot = await getDocs(q);

  const paths = snapshot.docs
    .map((doc) => {
      const { slug } = doc.data();
      if (!slug || typeof slug !== 'string') return null;

      const parts = slug.split('/');
      if (parts.length < 3) return null;

      const [year, month, ...slugParts] = parts;
      return {
        year,
        month,
        slug: slugParts.join('/'),
      };
    })
    .filter(Boolean); // removes nulls

  return paths;
}



export default async function BlogPage({ params }) {
    // ✅ Await the parent function if it's async
    if (!params) return notFound(); // safety
  
    const { year, month, slug } = await params;
  
    if (!year || !month || !slug) {
      return notFound();
    }
  
    const fullSlug = `${year}/${month}/${slug}`;
    const q = query(collection(db, 'Blogs'), where('slug', '==', fullSlug));
    const snapshot = await getDocs(q);
  
    if (snapshot.empty) return notFound();
  
    const blog = snapshot.docs[0].data();
  
    return (
  
    <div className="max-w-7xl mx-auto px-4 py-8 bg-transparent">
      <h1 className="text-4xl font-bold text-sky-900 mb-6">{blog.title}</h1>
      <BlogContent description={blog.description} />
      <CommentList blogId={snapshot.docs[0].id} />
      <CommentForm blogId={snapshot.docs[0].id} />
    </div>
    );
  }
  
