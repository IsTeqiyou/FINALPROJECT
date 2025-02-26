import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams(); // Ambil parameter id dari URL
  const [post, setPost] = useState(null); // State untuk menyimpan data post
  const [loading, setLoading] = useState(true); // State untuk status loading
  const [error, setError] = useState(null); // State untuk menangkap error

  // Fetch data dari API berdasarkan ID
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch post data");
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Jika sedang loading
  if (loading) {
    return <p>Loading...</p>;
  }

  // Jika terjadi error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Jika data berhasil diambil
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}

export default PostDetail;