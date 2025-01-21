import Link from 'next/link';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`sidebar fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button
        className="absolute top-4 left-4 text-gray-600 text-2xl focus:outline-none z-50"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div className="px-6 pt-16">
        <h2 className="text-2xl font-bold text-black mb-6">SOLV</h2>
        <div className="bg-gray-100 text-gray-600 rounded p-4 mb-4">
          <p className="text-sm">Name of the version</p>
          <p className="text-xs">02 aug 2024</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                href="/"
                className="nav-link flex items-center gap-2 p-2 rounded hover:bg-gray-200"
              >
                <i className="fas fa-chart-line"></i>
                Overview
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="nav-link flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-200">
                  <i className="fas fa-file-alt"></i>
                  Posts
                </summary>
                <ul className="pl-4">
                  <li>
                    <Link
                      href="/posts/create"
                      className="nav-link block p-2 rounded hover:bg-primary hover:text-white"
                    >
                      Create Post
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/posts/list"
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
