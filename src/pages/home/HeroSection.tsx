import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};
const introchildren = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const laptopAnimated = {
  initial: {
    y: 0,
  },
  animate: {
    y: 40,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType : "reverse"

    },
  },
};

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-74px)]  grid grid-cols-1 lg:grid-cols-2 place-content-center mt-10">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          className="mb-5 text-7xl font-extrabold"
          variants={introchildren}
        >
          <span className=" font-extrabold " style={{ color: "#B1B1B1" }}>
            Don't worry{" "}
          </span>
          <br />
          <span className=" ">We'll Fix it. </span>
        </motion.h1>
        <motion.p className="w-8/12 text-1xl mb-5" variants={introchildren}>
          Welcome to <span className="font-bold">Fixer</span>, your one-stop
          place for all kinds of <span className="font-bold">Laptops </span>
          repairs and diagnostics.
        </motion.p>
        <motion.div variants={introchildren}>
          <Button>Book a Service</Button>
        </motion.div>
      </motion.div>
      <motion.div
        variants={laptopAnimated}
        initial="initial"
        animate="animate"
        className=" w-2/4 lg:w-full mx-auto "
      >
        <img
          className="-rotate-[30deg] p-5 h-[85%] object-contain "
          src="./src/assets/images/macbook-exposed.png"
          alt=""
        />
      </motion.div>
    </Container>
  );
};

export default HeroSection;
