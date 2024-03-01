import ScrollGrow from "@/hooks/ScrollGrow";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { style, componentRef } = ScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-300   col-span-12 lg:col-span-12 rounded-md h-[350px]"
    ></motion.div>
  );
};

export default BatteryReplacement;
