import React from 'react';
import img from '../../../public/images/login.png'
import google from '../../../public/icons/google-logo.png'
import logo from '../../../public/images/logo.svg'
import Image from 'next/image';
import { LuUser2 } from "react-icons/lu";
import { TbLock } from "react-icons/tb";
import Link from 'next/link';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Signup: React.FC = () => {
  return (
    <section className='login'>
      <div className="container">
        <div className="login-content">
          <div className="login-image">
            <Image src={img} width={648} className='login-img' alt='login img' />
          </div>

          <form className="login-signup">
            <div className="login-logo">
              <Image src={logo} width={40} height={44} alt='login img' />
              <h1 className="login-logo_title">Apple Store</h1>
            </div>

            <h1 className="login-title">Signup</h1>

            <div className="login-inputs">
              <label className='login-label'>Username</label>
              <div className="login-input_box">
                <LuUser2 color='#8b8e99' fontSize={19} />
                <input type="text" placeholder='Mustafo Botirov' className='login-input' />
              </div>

              <label className='login-label'>Email</label>
              <div className="login-input_box">
                <MdOutlineMail color='#8b8e99' fontSize={19} />
                <input type="text" placeholder='example@email.com' className='login-input' />
              </div>

              <label className='login-label'>Password</label>
              <div className="login-input_box">
                <TbLock color='#8b8e99' fontSize={19} />
                <input type="password" placeholder='Enter your password' className='login-input' />
              </div>

              <label className='login-label'>Confirm Password</label>
              <div className="login-input_box">
                <TbLock color='#8b8e99' fontSize={19} />
                <input type="password" placeholder='Enter your password' className='login-input' />
              </div>

              <label className='login-label'>Phone Number (Optional)</label>
              <div className="login-input_box">
              <FaPhoneAlt  color='#8b8e99' fontSize={19} />
                <input type="password" placeholder='Enter your phone number' className='login-input' />
              </div>
            </div>

            <Link href={'#'} className='login-link'>Forgot password?</Link>
            <button className="login-btn">Login</button>
            <span className='login-or'>OR</span>
            <button className="login-with_google">
              <Image src={google} width={16} height={17} alt='login img' />
              Continue with Google
            </button>
            <div className="login-items">
              <h1 className="login-info_title">already have an account?</h1>
              <Link href={'/login'} className='login-signup_link'>Login now</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
