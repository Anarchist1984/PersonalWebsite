import MainNavbar from "./components/Navbar"
import Footer from "./components/Footer"
import { signIn } from "@/auth"

export default function Home(){

  return(
    <main className="dark">
      <div className=" dark:bg-dark-background-950 bg-background-950">
        <MainNavbar />
        <div><form
      action={async () => {
        "use server"
        await signIn("google")}}>
      <button type="submit">Signin with Google</button>
    </form></div>
        <Footer />
      </div>
    </main>
  )
}