import Container from "@/components/layouts/Container";
import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";
import laptopImg from "../../assets/images/macbook.jpg";

const WhoWeAreSection = () => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      className="flex my-20 flex-col lg:flex-row justify-between items-center"
      style={style}
      ref={componentRef}
    >
      <div className="lg:w-6/12 w-12/12 ">
        <img className="w-full h-[550px]" src={laptopImg} alt="" />
      </div>

      <Container className="lg:w-6/12 w-12/12 ">
        <div className="">
          <h1> Who We Are</h1>
          <p className="mt-6 w-12/12 lg:w-11/12 lg:px-2">
            At iRepair, we love MacBooks as much as you do. That’s why we offer
            fast, reliable, and affordable repair services for all kinds of
            MacBooks. Whether you need a screen replacement, a battery upgrade,
            or a software fix, we have the skills and experience to get your
            MacBook back to its best. We serve both individuals and businesses
            in Bangladesh, and we guarantee your satisfaction. Don’t let a
            broken MacBook ruin your day. Contact iRepair today and let us take
            care of it.
          </p>
        </div>
        <div className=" flex sm:flex-row flex-col justify-evenly items-center">
          <div className=" flex flex-col space-y-0 text-center">
            <p className=" text-[120px] text-teal-500">98%</p>
            <p>Successful repairs</p>
          </div>
          <div className="flex flex-col gap-0 text-center ">
            <p className=" text-[120px] text-teal-500">2k+</p>
            <p> Successful repairs</p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default WhoWeAreSection;
