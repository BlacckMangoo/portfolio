import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav className="navigation">
      {/* Other navigation links */}
      <Link to="blogs" smooth={true} duration={500}>
        Blogs
      </Link>
      {/* Other navigation links */}
    </nav>
  );
};

export default Navigation;