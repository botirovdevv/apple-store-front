import Image from "next/image"
import Links from "./links"
import user from '../../../public/images/user.jpg'

const Account = () => {
  return (
    <section className="account">
      <div className="container">
        <div className="account-content">
          <Links />
          <div className="account-card">
            <h1 className="account-title">ACCOUNT SETTING</h1>
            <hr />
            <div className="account-items">
              <Image src={user} alt="user photo"/>

              <form className="account-form">
                <div className="account-inputs">
                  <label className="account-label">First Name</label>
                  
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Account