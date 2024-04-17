import MainNavbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home(){

  return(
    <main className="dark">
      <div className=" dark:bg-dark-background-950 bg-background-950">
        <MainNavbar />
        <Footer />
      </div>
    </main>
  )
}