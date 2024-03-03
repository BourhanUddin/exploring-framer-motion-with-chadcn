import ScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";
import chipImg from "../../assets/images/chip.jpg";

const ChipSetReplacement = () => {
  const { style, componentRef } = ScrollGrow();
  return (
    <motion.div
      className="relative col-span-6 lg:col-span-5 rounded-md h-[350px] overflow-hidden"
      style={{
        ...style,
      }}
      ref={componentRef}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${chipImg})`,
          backgroundColor: "rgb(177,177,177,0.5)",
          opacity: 0.4, // Set opacity for the background image
          zIndex: 1, // Set a higher z-index for the background image
        }}
      ></div>
      {/* This div holds the background image */}
      <div className="absolute p-5 top-0 left-0 w-full h-full flex flex-col  z-10">
        {/* This div holds the text and ensures it's centered */}
        <p className=" left-0 top-0 text-black  font-bold">Chip Replacement</p>
        <h4 className=" text-opacity-70 font-semibold text-3xl mt-16 w-10/12 h-full ">
          There is no need to replace the motherboard for a tiny little dead
          chipset.
        </h4>
      </div>
    </motion.div>
  );
};

export default ChipSetReplacement;
