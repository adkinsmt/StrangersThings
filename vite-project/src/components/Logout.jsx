import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken'); 
    React-router();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};
console.log('logout');
export default Logout;