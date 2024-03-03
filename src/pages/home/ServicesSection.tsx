import BatteryReplacement from "@/components/ServicesTiles/BatteryReplacement";
import ChipSetReplacement from "@/components/ServicesTiles/ChipSetReplacement";
import DataRecovery from "@/components/ServicesTiles/DataRecovery";
import FreeService from "@/components/ServicesTiles/FreeDelivery";
import FreeDiagnostices from "@/components/ServicesTiles/FreeDiagnostices";
import StorageReplacement from "@/components/ServicesTiles/StorageReplacement";
import SupportService from "@/components/ServicesTiles/SupportService";
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
        <ChipSetReplacement></ChipSetReplacement>
        <DataRecovery></DataRecovery>
        <StorageReplacement></StorageReplacement>
        <FreeService></FreeService>
        <FreeDiagnostices></FreeDiagnostices>
        <SupportService></SupportService>
      </div>
    </Container>
  );
};

export default ServicesSection;
