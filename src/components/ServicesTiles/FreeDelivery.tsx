import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";
const FreeDelivery = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      className="bg-gray-300 bg-opacity-50   col-span-12 md:col-span-6 lg:col-span-4 rounded-md h-[350px]"
      style={style}
      ref={componentRef}
    >
      <div className="flex items-center flex-col flex-start ">
        <h1 className="mt-16">
          same <br /> Day
          <br /> <span className="text-teal-500">Delivery</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default FreeDelivery;
