import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isPostsOpen, setIsPostsOpen] = useState(false); // Tracks whether the "Posts" menu is expanded

  return (
    <div
      className={`sidebar fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full' // Dynamically sets the sidebar position
      }`}
    >
      {/* Sidebar Toggle Button */}
      <button
        className="absolute top-4 left-4 text-gray-600 text-2xl focus:outline-none z-50"
        onClick={toggleSidebar} // Toggles the sidebar's open/close state
      >
        ☰
      </button>

      <div className="px-6 pt-16">
        {/* Sidebar Logo */}
        <div
          className="mb-2 mr-3 flex justify-center"
          style={{ marginTop: '-32px' }} // Adjust logo placement
        >
          <Image
            src="/solv-logo.png" // Path to the logo image in the public folder
            alt="SOLV Logo"
            width={110} // Logo width
            height={30} // Logo height
          />
        </div>

        {/* Version Information */}
        <div className="bg-gray-100 text-black-600 rounded p-4 mb-4">
          <p className="text-sm">
            <b>Name of the version</b> {/* Bold text for the version name */}
          </p>
          <p className="text-xs italic">02 aug 2024</p> {/* Italicized version date */}
        </div>

        {/* Sidebar Navigation */}
        <nav>
          <ul>
            {/* Overview Link */}
            <li>
              <Link
                href="/" // Redirects to the overview page
                className="nav-link flex items-center gap-2 p-2 rounded hover:bg-gray-200 mb-4"
              >
                {/* Overview Icon */}
                <Image
                  src="/web.png" // Path to the overview icon
                  alt="Overview Icon"
                  width={22} // Icon width
                  height={20} // Icon height
                />
                Overview {/* Link text */}
              </Link>
            </li>

            {/* Posts Menu */}
            <li>
              <details
                className="group" // Group styling for nested dropdown
                open={isPostsOpen} // Tracks whether the "Posts" menu is expanded
                onToggle={() => setIsPostsOpen(!isPostsOpen)} // Toggles the menu's open/close state
              >
                {/* Posts Menu Summary */}
                <summary
                  className="nav-link flex items-center justify-between gap-2 cursor-pointer p-2 rounded hover:bg-gray-200"
                >
                  {/* Posts Menu Icon and Label */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/audit.png" // Path to the audit icon
                      alt="Audit Icon"
                      width={18} // Icon width
                      height={18} // Icon height
                    />
                    <span>Posts</span> {/* Label for the "Posts" menu */}
                  </div>
                  {/* Dynamic Dropdown Arrow */}
                  <i
                    className={`fas ${isPostsOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} // Toggles arrow direction
                    style={{ fontSize: '0.8rem' }} // Adjust arrow size
                  ></i>
                </summary>

                {/* Posts Menu Links */}
                <ul className="pl-4">
                  {/* Create Post Link */}
                  <li>
                    <Link
                      href="/posts/create" // Redirects to the create post page
                      className="nav-link block p-2 rounded hover:bg-primary hover:text-white"
                    >
                      Create Post
                    </Link>
                  </li>

                  {/* Get Posts Link */}
                  <li>
                    <Link
                      href="/posts/list" // Redirects to the posts list page
                      className="nav-link block p-2 rounded hover:bg-primary hover:text-white"
                    >
                      Get Posts
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
