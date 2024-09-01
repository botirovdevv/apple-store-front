import Image from "next/image"
import img from '../../../../../public/images/newletter.png'

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe-content">
          <div className="subscribe-texts">
            <h1 className="subscribe-title">Subscribe To Newsletter</h1>
            <p className="subscribe-subtitle">Get free guide about smart watches daily. </p>

            <form className="subscribe-form">
              <input type="text"
                className="subscribe-input"
                placeholder="Enter Email Address"
              />
              <button className="subscribe-btn">Subscribe</button>
            </form>
          </div>

          <div className="subscribe-image">
            <Image
              src={img}
              alt="subscribe to newsletter"
              width={694}
              height={464}
              className="subscribe-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe