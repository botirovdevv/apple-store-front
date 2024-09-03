"use client";

import { usePathname } from 'next/navigation';
import './styles/Main.scss';
import Navbar from './components/layout/header/navbar';
import Banner from './components/layout/header/banner';
import Footer from './components/layout/footer/footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <html lang="en">
      <body>
        <div className={`layout-container ${isHomePage ? 'home-background' : 'auth-background'}`}>
          <main className={`main ${isAuthPage ? 'auth-main' : ''}`}>
            <Navbar />
            {isHomePage && <Banner />}
          </main>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
