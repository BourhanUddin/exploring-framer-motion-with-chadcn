import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className=" h-16  ">
      <nav className="w-full h-full flex justify-between items-center px-[20px] max-w-[1220px]  mx-auto">
        <span className="text-3xl">Fixer</span>
        <ul className=" space-x-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/service"}>Services</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
          <Button>login</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
