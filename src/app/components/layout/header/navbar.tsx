import React from "react";
import Image from "next/image";
import logo from "../../../../../public/images/logo.svg";
import Link from "next/link";
import { FaUserAlt, FaHeart } from "react-icons/fa"; 
import { FaCartShopping } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const { isAuthenticated, logout } = useAuth();

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
            {isAuthenticated ? (
              <>
                <li>
                  <Link href="/products" className="nav-link">Products</Link>
                </li>
                <li>
                  <Link href="/bu-products" className="nav-link">BU Products</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/about" className="nav-link">About</Link>
                </li>
                <li>
                  <Link href="/contact" className="nav-link">Contact</Link>
                </li>
              </>
            )}
          </ul>

          <div className="nav-enter_items">
            {isAuthenticated ? (
              <div className="nav-auth-icons">
                <Link href="/cart" className="nav-link">
                  <FaCartShopping color="#8b8e99" fontSize={23} />
                </Link>
                <Link href="/favorites" className="nav-link">
                  <FaHeart color="#8b8e99" fontSize={23} />
                </Link>
                <button onClick={logout} className="nav-link">Logout</button>
              </div>
            ) : (
              <div className="nav-login-signup">
                <Link href="/login" className="nav-user_btn">
                  <FaUserAlt color="#8b8e99" fontSize={23} />
                </Link>

                <div className="nav-enter_link">
                  <Link href="/login" className="nav-link">Login</Link>
                  <span className="nav-line"> | </span>
                  <Link href="/signup" className="nav-link">Signup</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
