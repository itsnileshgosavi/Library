import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul className="flex justify-evenly text-xl font-mono space-x-2 md:space-x-10 items-center">
      <li className="p-1 md:p-3 bg-teal-400 rounded-lg shadow-lg text-white" >
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="p-1 md:p-3 bg-teal-400 rounded-lg shadow-lg text-white" >
        <NavLink to="/BrowseBooks">Browse</NavLink>
      </li>
      <li className="p-1 md:p-3 bg-teal-400 rounded-lg shadow-lg text-white" >
        <NavLink to="/AddBook">Add Book</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
