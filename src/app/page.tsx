import Banner from "./components/layout/header/banner"
import Navbar from "./components/layout/header/navbar"
import Collections from "./components/layout/main/collections"
import Subscribe from "./components/layout/main/subscribe"
import Iphones from "./components/layout/main/iphones"
import Watches from "./components/layout/main/watches"
import ProductSlider from "./components/product/productSlider"
import Footer from "./components/layout/footer/footer"

const HomePage = () => {
  return (
    <>
      <main className="main">
        <Navbar />
        <Banner />
      </main>
      <Collections />
      <Iphones/>
      <ProductSlider/>
      <Watches/>
      <Subscribe/>
      <Footer/>

    </>
  )
}

export default HomePage