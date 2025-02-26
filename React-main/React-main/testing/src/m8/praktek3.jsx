import React, { useState } from 'react';

function SimpleCalculator() {
  // State untuk menyimpan angka pertama, angka kedua, dan hasil operasi
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  // Fungsi untuk menangani operasi matematika
  const handleAddition = () => {
    setResult(Number(number1) + Number(number2));
  };

  const handleSubtraction = () => {
    setResult(Number(number1) - Number(number2));
  };

  const handleMultiplication = () => {
    setResult(Number(number1) * Number(number2));
  };

  const handleDivision = () => {
    if (Number(number2) === 0) {
      setResult('Error: Division by zero');
    } else {
      setResult(Number(number1) / Number(number2));
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Kalkulator Sederhana</h1>

      {/* Input untuk angka pertama */}
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="Angka pertama"
          style={{ margin: '10px', padding: '10px', width: '200px' }}
        />
      </div>

      {/* Input untuk angka kedua */}
      <div>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Angka kedua"
          style={{ margin: '10px', padding: '10px', width: '200px' }}
        />
      </div>

      {/* Tombol operasi */}
      <div>
        <button onClick={handleAddition} style={{ margin: '5px', padding: '10px 20px' }}>
          Tambah
        </button>
        <button onClick={handleSubtraction} style={{ margin: '5px', padding: '10px 20px' }}>
          Kurangi
        </button>
        <button onClick={handleMultiplication} style={{ margin: '5px', padding: '10px 20px' }}>
          Kali
        </button>
        <button onClick={handleDivision} style={{ margin: '5px', padding: '10px 20px' }}>
          Bagi
        </button>
      </div>

      {/* Tampilkan hasil */}
      <h2>Hasil: {result !== null ? result : 'Belum ada hasil'}</h2>
    </div>
  );
}

export default SimpleCalculator;

