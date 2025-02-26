import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('react');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.example.com/search?q=${query}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]); // Efek ini akan dijalankan ulang setiap kali `query` berubah

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>Data: {data ? JSON.stringify(data) : 'No data found'}</div>
      )}
    </div>
  );
}

export default FetchDataComponent;
