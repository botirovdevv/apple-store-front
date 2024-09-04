import React from "react";
import Image from "next/image";
import logo from "../../../../../public/images/logo.svg";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <nav className={`nav ${isAuthPage ? "nav-auth" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="nav-logo">
            <Image src={logo} className="nav-logo_img" alt="Website Logo" />
            <h1 className="nav-logo_title">Apple Store</h1>
          </Link>

          <ul className="nav-links">
            <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link href="#about" className="nav-link">About</Link>
            </li>
            <li>
              <Link href="#contact" className="nav-link">Contact</Link>
            </li>
          </ul>

          <div className="nav-enter_items">
            <Link href="/login" className="nav-user_btn">
              <FaUserAlt color="#8b8e99" fontSize={23} />
            </Link>

            <div className="nav-enter_link">
              <Link href="/login" className="nav-link">Login</Link>
              <span className="nav-line"> | </span>
              <Link href="/signup" className="nav-link">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
