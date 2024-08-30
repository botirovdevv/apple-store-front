import Banner from "./components/layout/header/banner"
import Navbar from "./components/layout/header/navbar"
import Collections from "./components/layout/main/collections"
import Iphones from "./components/layout/main/iphones"

const HomePage = () => {
  return (
    <>
      <main className="main">
        <Navbar />
        <Banner />
      </main>
      <Collections />
      <Iphones/>

    </>
  )
}

export default HomePage