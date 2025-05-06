'use client';
import { useEffect, useState } from 'react';

export default function BlogContent({ description }) {
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    const container = document.getElementById('blog-content');
    const images = container?.getElementsByTagName('img') || [];
    let loadedCount = 0;

    if (images.length === 0) {
      setLoadingImages(false);
      return;
    }

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setLoadingImages(false);
      }
    };

    for (let img of images) {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleLoad); // handle broken images too
      }
    }

    return () => {
      for (let img of images) {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleLoad);
      }
    };
  }, [description]);

  return (
    <>
      {loadingImages && (
        <div className="flex justify-center py-10">
          <div className="loader" />
        </div>
      )}

      <div
        id="blog-content"
        className={`prose max-w-none text-black transition-opacity duration-300 ${
          loadingImages ? 'opacity-0' : 'opacity-100'
        }`}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {/* <style jsx>{`
        .loader1 {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 4px solid;
          border-color: #f87171 #facc15 #34d399 #60a5fa;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style> */}
    </>
  );
}
