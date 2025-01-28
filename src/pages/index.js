import React from 'react';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="main-content">
        <h1 className="text-3xl font-bold text-black mb-4 ml-20">Welcome to SOLV</h1>
        <p className="text-gray-600 text-lg ml-20">
          Select an option from the sidebar to manage posts and get started!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
