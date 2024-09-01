import Link from "next/link"
import Feedback from "./feedback"
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-feedback">
            <Feedback />
          </div>
          <div className="footer-all_links">
            <ul className="footer-links">
              <div className="footer-links_group">
                <h1 className="footer-link_title">Info</h1>
                <Link href={'#'} className="footer-link">Company</Link>
                <Link href={'#'} className="footer-link">Products</Link>
                <Link href={'#'} className="footer-link">Engineering</Link>
                <Link href={'#'} className="footer-link">Services</Link>
                <Link href={'#'} className="footer-link">Productions</Link>
              </div>

              <div className="footer-links_group">
                <h1 className="footer-link_title">About us</h1>
                <Link href={'#'} className="footer-link">Gallery</Link>
                <Link href={'#'} className="footer-link">technologies</Link>
                <Link href={'#'} className="footer-link">Contacts</Link>
              </div>

              <div className="footer-links_group">
                <h1 className="footer-link_title">Contact us</h1>
                <Link href={'#'} className="footer-link">+998 (99) 999-99-99</Link>
                <Link href={'#'} className="footer-link">help@gmail.com</Link>
                <Link href={'#'} className="footer-link">Uzbekistan, Khorezm</Link>
              </div>
            </ul>


            <ul className="footer-social_links">
              <Link href={'#'} className="footer-social_link"><RiFacebookBoxFill color="#fff" fontSize={24} /></Link>
              <Link href={'#'} className="footer-social_link"><FaInstagram color="#fff" fontSize={24} /></Link>
              <Link href={'#'} className="footer-social_link"><FaYoutube color="#fff" fontSize={24} /></Link>
              <Link href={'#'} className="footer-social_link"><FaXTwitter color="#fff" fontSize={24} /></Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer