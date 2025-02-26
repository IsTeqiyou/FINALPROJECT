import React, { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Tampilkan status login */}
      <h1>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h1>
      
      {/* Tampilkan tombol berdasarkan status */}
      {isLoggedIn ? (
        <button onClick={handleLogout} style={{ padding: '10px 20px', marginTop: '20px' }}>
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} style={{ padding: '10px 20px', marginTop: '20px' }}>
          Login
        </button>
      )}
    </div>
  );
}

export default LoginStatus;

