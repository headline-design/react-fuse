import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow">
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-800">
              Fuse
            </Link>
          </div>
          <nav className="flex items-center">
            <Link to="/about" className="mr-4 text-gray-800">
              About
            </Link>
            <Link
              to="/getting-started"
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Getting started
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
