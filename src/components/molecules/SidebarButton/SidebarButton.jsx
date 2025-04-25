import { Button } from "@/components/ui/button.jsx";
import React from "react";

const SidebarButton = ({ Icon, label }) => {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer gap-y-0.5 mb-1 pt-2">
      <Button variant>
        <Icon className="size-5 bg-transparent text-white group-hover:scale-110 transition-all"></Icon>
      </Button>
      <span className="text-[10px] text-white group-hover:text-accent">
        {label}
      </span>
    </div>
  );
};

export default SidebarButton;
