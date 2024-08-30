import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import img from '../../../../../public/images/banner.png'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-content">
                    <div className="banner-texts">
                        <h1 className="banner-title">
                            Discover Most Affordable Apple products
                        </h1>
                        <p className="banner-subtitle">
                            Find the best, reliable and affordable apple products here. We focus on the product quality. Here you can find all the products apple ever made. Even the products apple officially stopped selling. So why you are waiting? Just order now!
                        </p>
                        <form className="banner-form">
                            <button className="banner-icon">
                                <FiSearch color="#3858d6" fontSize={27} />
                            </button>
                            <input className="banner-input" placeholder="Find the best product" type="text" />
                            <button className="banner-search_btn">
                                Search
                            </button>
                        </form>
                    </div>

                    <div className="banner-image">
                        <Image src={img} className="banner-img" alt="banner iphone image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner