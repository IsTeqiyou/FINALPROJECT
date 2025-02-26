import React, { useState, useEffect } from 'react';

const TextLogger = () => {
  // Gunakan useState untuk mengelola nilai teks
  const [text, setText] = useState('');

  // Gunakan useEffect untuk melacak perubahan nilai teks
  useEffect(() => {
    // Cetak teks ke konsol setiap kali nilai text berubah
    console.log(`Teks berubah menjadi: ${text}`);
  }, [text]); // Array dependency berisi nilai text

  // Fungsi untuk menangani perubahan teks pada input
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Fungsi untuk memicu pembaruan teks
  const updateText = () => {
    setText(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>{text}</p>
      <button onClick={updateText}>Update Teks</button>
    </div>
  );
};

export default TextLogger;
