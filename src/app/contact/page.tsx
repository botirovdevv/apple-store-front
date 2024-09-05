import Link from "next/link"
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-card">
                        <div className="contact-information">
                            <h1 className="contact-title">Contact Information</h1>
                            <p className="contact-subtitle">Say something to start a live chat!</p>

                            <ul className="contact-information_links">
                                <Link className="contact-link" href={'#'} >
                                    <FaPhoneVolume color="#fff" />
                                    +998 (99) 999-99-99
                                </Link>

                                <Link className="contact-link" href={'#'} >
                                    <MdOutlineMailOutline fontSize={24} />
                                    chat@gmail.com
                                </Link>

                                <Link className="contact-link" href={'#'} >
                                    <IoLocationSharp fontSize={24} />
                                    Uzbekistan, Khorezm, Urgench
                                </Link>
                            </ul>

                            <ul className="contact-social_links">
                                <Link href={'#'} className="footer-social_link"><RiFacebookBoxFill color="#fff" fontSize={24} /></Link>
                                <Link href={'#'} className="footer-social_link"><FaInstagram color="#fff" fontSize={24} /></Link>
                                <Link href={'#'} className="footer-social_link"><FaYoutube color="#fff" fontSize={24} /></Link>
                                <Link href={'#'} className="footer-social_link"><FaXTwitter color="#fff" fontSize={24} /></Link>
                            </ul>
                        </div>

                        <form className="contact-form">
                            <div className="contact-inputs">
                                <div className="contact-items">
                                    <label className="contact-label">First Name</label>
                                    <input type="text" className="contact-input" placeholder="Mustafo" />
                                </div>

                                <div className="contact-items">
                                    <label className="contact-label">Secondx Name</label>
                                    <input type="text" className="contact-input" placeholder="Mustafo" />
                                </div>

                                <div className="contact-items">
                                    <label className="contact-label">Email</label>
                                    <input type="text" className="contact-input" placeholder="example@gmail.com" />
                                </div>

                                <div className="contact-items">
                                    <label className="contact-label">Phone Number</label>
                                    <input type="number" className="contact-input" placeholder="+998 (99) 999-99-99" />
                                </div>

                            </div>

                            <div className="contact-message">
                                <label className="contact-label">Message</label>
                                <input type="text" className="contact-message_input" placeholder="Write your message..." />
                            </div>

                            <button className="contact-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact