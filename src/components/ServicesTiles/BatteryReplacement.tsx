import ScrollGrow from "@/hooks/ScrollGrow";
import { motion } from "framer-motion";
import batteryImg from "../../assets/images/trackpad.png";
const BatteryReplacement = () => {
  const { style, componentRef } = ScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="overflow-hidden  border bg-gray-300 bg-opacity-50  col-span-12 lg:col-span-12 rounded-md h-[350px] flex "
    >
      <div className="w-6/12 z-10   overflow-visible ">
        <p className="p-3">Battery Replacement</p>
        <div className="mt-[70px] p-3 w-[650px] flex flex-col text-4xl py-auto">
          <p>Get back to 100% battery health.</p>
          <p className="w-[700px]">With 6 month replacement warranty.</p>
        </div>
      </div>
      <div className="w-6/12 z-1">
        <img
          className="object-cover w-full float-end h-full"
          src={batteryImg}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default BatteryReplacement;
