import React, { useState, useEffect } from 'react';

const ReadData = () => {
  // State untuk menyimpan data dan status loading
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect digunakan untuk memanggil API saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        
        // Mengecek apakah respons berhasil 
        if (response.ok) {
          const result = await response.json();
          setData(result);  // Menyimpan data ke state
        } else {
          throw new Error('Error fetching data');
        }
      } catch (error) {
        setError(error.message);  // Menangani error jika terjadi kesalahan
      } finally {
        setLoading(false);  // Mengubah status loading setelah proses selesai
      }
    };

    fetchData();
  }, []); // Empty array berarti hanya dipanggil sekali saat komponen dimuat

  return (
    <div>
      <h2>Posts</h2>
      
      {/* Menampilkan status loading jika data masih dimuat */}
      {loading && <p>Loading...</p>} 
({loading})
      

      {/* Menampilkan pesan error jika ada */}
      {error && <p>Error: {error}</p>}
    
      {/* Menampilkan data jika berhasil di-fetch */}
      {!loading && !error && (
        <ul>
          {data.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReadData;
