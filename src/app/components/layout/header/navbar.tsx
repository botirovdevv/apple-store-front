import Image from "next/image"
import logo from '../../../../../public/images/logo.svg'
import Link from "next/link"
import { FaUserAlt } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-content">
                    <Link href={'/'} className="nav-logo">
                        <Image src={logo} className="nav-logo_img" alt="web site logo" />
                        <h1 className="nav-logo_title">Apple Store</h1>
                    </Link>

                    <ul className="nav-links">
                        <Link href={'/'} className="nav-link">Home</Link>
                        <Link href={'#'} className="nav-link">About</Link>
                        <Link href={'#'} className="nav-link">Contact</Link>
                    </ul>

                    <div className="nav-enter_items">
                        <button className="nav-user_btn">
                            <FaUserAlt color="#8b8e99" fontSize={23} />
                        </button>

                        <div className="nav-enter_link">
                            <Link href={'#'} className="nav-link">Login</Link>
                            <span className="nav-line"> | </span>
                            <Link href={'#'} className="nav-link">Signup</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar