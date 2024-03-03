import ScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const DataRecovery = () => {
  const { style, componentRef } = ScrollGrow();

  return (
    <motion.div
      className="bg-gray-300 bg-opacity-50  col-span-6 lg:col-span-7 rounded-md h-[350px]"
      style={style}
      ref={componentRef}
    >
      <div className="p-5 object-cover ">
        <p className="text-black font-semibold top-0 left-0 ">Data Recovery</p>
        <h3 className="text-3xl text-wrap w-10/12 mt-16">
          Lost your old memories ?<br /> Lost your project? <br />
          Don’t worry, We will recover it for you
        </h3>
      </div>
    </motion.div>
  );
};

export default DataRecovery;
