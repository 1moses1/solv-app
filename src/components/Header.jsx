import React from 'react';
import { useRouter } from 'next/router';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();

  // Determine if the current route is part of the "Posts" menu
  const isPostsRoute = router.pathname.startsWith('/posts');

  return (
    <header className="header">
      <div className="header__left">
        {!isSidebarOpen && (
          <button
            className="header__toggle"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        )}
        {isPostsRoute && (
          <p className={`header__breadcrumb ${!isSidebarOpen ? 'header__breadcrumb-collapsed' : ''}`}>
            Solv &gt; Posts
          </p>
        )}
      </div>
      <div className="header__icons">
        {/* Notification Icon */}
        <button className="header__icon">
          <i className="fas fa-bell"></i>
        </button>
        {/* User Icon */}
        <button className="header__icon">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
