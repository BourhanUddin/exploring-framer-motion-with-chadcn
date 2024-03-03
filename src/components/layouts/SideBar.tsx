import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="col-span-2 bg-slate-300 bg-opacity-70 h-screen sticky top-0 left-0 overflow-auto pt-5">
      <nav className="flex flex-col gap-3 p-2 ">
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-slate-400 rounded-md p-2  hover:bg-slate-500 flex items-center gap-2",
              {
                "bg-slate-500  hover:bg-opacity-75 hover:transition-all text-white":
                  isActive,
              }
            )
          }
          to={"/admin/dashboard"}
        >
          <LayoutDashboard className="shrink-0"> </LayoutDashboard>
          <span className=" truncate">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-slate-400 rounded-md p-2 hover:bg-slate-500  flex items-center gap-2",
              {
                "bg-slate-500  hover:bg-opacity-75 hover:transition-all text-white":
                  isActive,
              }
            )
          }
          to={"/admin/add-service"}
        >
          <LayoutDashboard className="shrink-0"> </LayoutDashboard>
          <span className=" truncate">Add Service</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-slate-400 rounded-md p-2 hover:bg-slate-500  flex items-center gap-2",
              {
                "bg-slate-500   hover:transition-all text-white": isActive,
              }
            )
          }
          to={"/admin/service-list"}
        >
          <LayoutDashboard className="shrink-0"> </LayoutDashboard>
          <span className=" truncate">Service List</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
