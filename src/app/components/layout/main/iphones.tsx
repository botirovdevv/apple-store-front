import Image from "next/image"
import Link from "next/link"
import img from '../../../../../public/images/iphones.png'

const Iphones = () => {
    return (
        <section className="iphones">
            <div className="container">
                <div className="iphones-content">
                    <div className="iphones-banner">
                        <h1 className="iphones-banner_title">
                            ex.iphones.
                        </h1>
                        <p className="iphones-price">From ₹25,000 to ₹10,000,0. Every Model Ever Built</p>
                        <div className="iphones-links_group">
                            <Link href={'#'} className="iphones-link">Buy</Link>
                            <Link href={'#'} className="iphones-learn_more">Learn More</Link>
                        </div>

                        <Image src={img} className="iphones-img" alt="ex iphones"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Iphones