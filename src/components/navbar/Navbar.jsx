import React from "react";
import Links from "./links/Links";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link href="/" className="logo">
        NoobDev
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
