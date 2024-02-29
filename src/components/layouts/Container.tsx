import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerPros = {
  children: ReactNode;
  className?: string;
};
const Container = ({ children, className }: TContainerPros) => {
  return (
    <div className={cn("w-full px-[20px] max-w-[1220px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
