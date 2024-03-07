import TeamImg_1 from "../../assets/images/teamImg-(1).jpg";
import TeamImg_2 from "../../assets/images/teamImg-(2).jpg";
import TeamImg_3 from "../../assets/images/teamImg-(3).jpg";
import TeamImg_4 from "../../assets/images/teamImg-(4).jpg";
import TeamImg_5 from "../../assets/images/TeamImg-(5).jpg";

const TeamSection = () => {
  return (
    <div className="bg-slate-300 bg-opacity-50 py-24 px-12 rounded my-28 flex flex-col items-center">
      <div className="text-center ">
        <h2 className="my-5">
          Meet our <span className="text-teal-500">Team</span>
        </h2>
        <p className="w-[700px]">
          All our technicians are fully qualified and licensed. Moreover,
          theyare incredibly skillful and proficient in various aspects of
          computer repair.
        </p>
      </div>
      <div className="flex flex-row items-center gap-7 mt-14">
        <img
          className="h-[180px] w-[160px] rounded-lg  "
          src={TeamImg_1}
          alt=""
        />
        <img
          className="h-[180px] w-[160px] rounded-lg  "
          src={TeamImg_2}
          alt=""
        />
        <img
          className="h-[180px] w-[160px] rounded-lg  "
          src={TeamImg_5}
          alt=""
        />
        <img
          className="h-[180px] w-[160px] rounded-lg  "
          src={TeamImg_3}
          alt=""
        />
        <img
          className="h-[180px] w-[160px] rounded-lg  "
          src={TeamImg_4}
          alt=""
        />
      </div>
    </div>
  );
};

export default TeamSection;
