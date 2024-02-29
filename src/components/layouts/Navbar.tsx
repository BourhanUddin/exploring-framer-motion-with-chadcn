import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
const Navbar = () => {
  const NabAnimated = {
    hidden: {
      y: -60,
      height: 0,
    },
    visible: {
      y: 0,
      height: 48,
      transition: {
        delay: 0.7,
        type: "spring",
        stiffness: 120,
      },
    },
  };
  return (
    <motion.header
      className="fixed w-full  z-[999] "
      variants={NabAnimated}
      initial="hidden"
      animate="visible"
    >
      <nav className="w-full h-full mx-auto  flex justify-between items-center px-[30px] max-w-[1220px]  ">
        <span className="text-3xl">Fixer</span>
        <ul className=" space-x-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/service"}>Services</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
          <Button>login</Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
