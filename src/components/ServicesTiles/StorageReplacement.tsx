import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";
import storageImg from "../../assets/images/harddrivecable.png";

const StorageReplacement = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      className="bg-gray-300 bg-opacity-50   overflow-hidden col-span-12 lg:col-span-12 rounded-md h-[350px]"
      style={style}
      ref={componentRef}
    >
      <div className="flex justify-between overflow-visible w-full h-full  ">
        <div className="p-5  w-6/12 z-20">
          <p className="top-0 left-0 font-semibold">Storage Replacement</p>
          <h4 className="font-semibold mt-14 text-4xl w-[700px]">
            Get rid of your slow HDD,
            <br /> upgrade to super fast SSD with ease
          </h4>
        </div>
        <div className="object-cover p-3 w-6/12 z-1">
          <img
            className=" rotate-12 transform  float-end"
            src={storageImg}
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StorageReplacement;
