import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken'); 
    localStorage.removeItem('refreshToken');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};
console.log('logout');
export default Logout;