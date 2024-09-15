"use client";
import Link from "next/link";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { useAuth } from "../contexts/AuthContext";
import { usePathname } from "next/navigation";

const Links = () => {
  const { logout } = useAuth();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <section className="links">
      <div className="links-card">
        <Link
          className={`links-link ${isActive("/") ? "active" : ""}`}
          href={"/"}
        >
          <RxDashboard className="icon" />
          Dashboard
        </Link>
        <Link
          className={`links-link ${isActive("/account") ? "active" : ""}`}
          href={"/account"}
        >
          <FiUser className="icon" />
          Account Details
        </Link>

        <Link
          className={`links-link ${isActive("/orders") ? "active" : ""}`}
          href={"/orders"}
        >
          <FaRegClock className="icon" />
          Order History
        </Link>

        <Link
          className={`links-link ${isActive("/track") ? "active" : ""}`}
          href={"/track"}
        >
          <SlLocationPin className="icon" />
          Track Order
        </Link>

        <Link
          className={`links-link ${isActive("/cart") ? "active" : ""}`}
          href={"/cart"}
        >
          <MdOutlineShoppingCart className="icon" />
          Shopping Cart
        </Link>

        <Link
          className={`links-link ${isActive("/wishlist") ? "active" : ""}`}
          href={"/wishlist"}
        >
          <FaRegHeart className="icon" />
          Wishlist
        </Link>

        <Link
          className={`links-link ${isActive("/address") ? "active" : ""}`}
          href={"/address"}
        >
          <FiCreditCard className="icon" />
          Address
        </Link>

        <Link
          className={`links-link ${isActive("/wallet") ? "active" : ""}`}
          href={"/wallet"}
        >
          <LuWallet className="icon" />
          Wallet
        </Link>

        <Link className="links-link" href={"/"} onClick={logout}>
          <TbLogout className="icon" />
          Log-out
        </Link>
      </div>
    </section>
  );
};

export default Links;
