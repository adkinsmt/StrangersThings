import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken'); 
    window.location.reload();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;