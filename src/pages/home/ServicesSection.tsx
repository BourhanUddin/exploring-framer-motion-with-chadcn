import BatteryReplacement from "@/components/ServicesTiles/BatteryReplacement";
import Container from "@/components/layouts/Container";

const ServicesSection = () => {
  return (
    <Container className="my-20 ">
      <div className=" flex flex-col justify-between items-center">
        <h1 className="text-center">
          <span className="text-teal-400">Services</span> that we provide.
        </h1>
        <p className="max-w-[80ch] mt-10 mb-2 text-center">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4 my-10 px-3">
        <BatteryReplacement></BatteryReplacement>
        <div className="bg-green-300 col-span-6 lg:col-span-5 rounded-md h-[350px]">
          B
        </div>
        <div className="bg-red-300   col-span-6 lg:col-span-7 rounded-md h-[350px]"></div>
        <div className="bg-green-300  col-span-12 lg:col-span-12 rounded-md h-[350px]"></div>
        <div className="bg-green-300 col-span-12 md:col-span-6 lg:col-span-4 rounded-md h-[350px]"></div>
        <div className="bg-green-300 col-span-12 md:col-span-6 lg:col-span-4 rounded-md h-[350px]"></div>
        <div className="bg-green-300 col-span-12 lg:col-span-4 rounded-md h-[350px]"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
