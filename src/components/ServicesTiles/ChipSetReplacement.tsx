import ScrollGrow from "@/hooks/ScrollGrow";
import { motion } from "framer-motion";

const ChipSetReplacement = () => {
  const { style, componentRef } = ScrollGrow();
  return (
    <motion.div
      className="bg-green-300 col-span-6 lg:col-span-5 rounded-md h-[350px]"
      style={style}
      ref={componentRef}
    >
      B
    </motion.div>
  );
};

export default ChipSetReplacement;
