import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 rounded-md px-3 py-2"
      : "text-white hover:bg-gray-700 rounded-md px-3 py-2";

  return (
    <nav className="bg-sky-800 border-b border-sky-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Stock Analyser
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkStyle}>
                  Home
                </NavLink>
                <NavLink to="/about" className={linkStyle}>
                  About
                </NavLink>
                <NavLink to="/add-job.html" className={linkStyle}>
                  GitHub
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
