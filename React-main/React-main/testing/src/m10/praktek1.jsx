import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Efek dijalankan!');
  }); // Tanpa array dependency

  return (
    <div>
      <p>Angka saat ini: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default Counter;
