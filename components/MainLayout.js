// components/MainLayout.js
import React from 'react';
import VerticalNavbar from './VerticalNavbar'; // Adjust the path if necessary


const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <VerticalNavbar />
      <main style={{ marginLeft: '200px', padding: '20px', flexGrow: 1 }}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
