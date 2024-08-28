import NavBar from "./NavBar"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex justify-between md:justify-around my-5">
      <Link to="/"><h1 className="text-2xl md:text-4xl text-teal-600 font-bold">Library</h1></Link>
      
      <NavBar />
    </header>
  )
}

export default Header