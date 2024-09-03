"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "../layout/header/navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";
  const isSignupPage = pathname === "/signup";

  const isAuthPage = isLoginPage || isSignupPage;

  return (
    <div className={`main ${isAuthPage ? "auth-layout" : ""}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
