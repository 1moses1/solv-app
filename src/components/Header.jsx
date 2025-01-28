import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();

  // Check if the current route is part of the "Posts" menu
  const isPostsRoute = router.pathname.startsWith('/posts');

  // Example notification count (can be dynamically fetched or updated)
  const notificationCount = 5;

  return (
    <header className="header">
      {/* Left section of the header */}
      <div className="header__left">
        {/* Sidebar toggle button (visible only when sidebar is closed) */}
        {!isSidebarOpen && (
          <button
            className="header__toggle"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        )}
        {/* Breadcrumb navigation (visible only on Posts-related routes) */}
        {isPostsRoute && (
          <p className={`header__breadcrumb ${!isSidebarOpen ? 'header__breadcrumb-collapsed' : ''}`}>
            <span className="mr-2">Solv</span> 
            <span className="mx-2">&gt;</span> 
            <span className="ml-2">Posts</span>
          </p>
        )}
      </div>

      {/* Right section of the header (icons) */}
      <div className="header__icons">
        {/* Notification Icon with Badge */}
        <button className="header__icon relative">
          {/* Bell icon for notifications */}
          <i className="fas fa-bell"></i>
          {/* Notification badge (visible if there are notifications) */}
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
              {notificationCount}
            </span>
          )}
        </button>

        {/* User Profile Image */}
        <button className="header__icon">
          {/* Container for the user profile image */}
          <div className="w-6 h-6 mb-2 rounded-full overflow-hidden">
            {/* User profile image loaded from the public directory */}
            <Image
              src="/user.png" // Path to the image in the public directory
              alt="User Profile" // Alt text for accessibility
              width={24} // Width of the image (matches notification icon size)
              height={24} // Height of the image (matches notification icon size)
              className="object-cover" // Ensures the image covers the container
            />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;