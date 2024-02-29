import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
const Navbar = () => {
  const NabAnimated = {
    hidden: {
      y: -60,
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.7,
        type: "spring",
        stiffness: 120,
      },
    },
  };
  return (
    <header className=" h-16  ">
      <motion.nav
        className="w-full h-full flex justify-between items-center px-[20px] max-w-[1220px]  mx-auto"
        variants={NabAnimated}
        initial="hidden"
        animate="visible"
      >
        <span className="text-3xl">Fixer</span>
        <ul className=" space-x-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/service"}>Services</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
          <Button>login</Button>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Navbar;
