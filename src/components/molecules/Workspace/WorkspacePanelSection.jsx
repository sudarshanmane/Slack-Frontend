import { Button } from "@/components/ui/button.jsx";
import useCreateChannelModal from "@/hooks/context/useCreateChannelModal.js";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

const WorkspacePanelSection = ({ children, label, workspace }) => {
  const [open, setOpen] = useState();

  const { openCreateChannelModal, setOpenCreateChannelModal } =
    useCreateChannelModal(workspace);

  const handleCreateChannelModel = () => {
    setOpenCreateChannelModal(true);
  };

  return (
    <div className="flex flex-col mt-3 w-full">
      <div className="flex items-center px-3.5 group">
        <div className="flex w-full justify-between items-center">
          <Button
            variant="transparent"
            className={
              "p-0.5 text-sm  text-[#f9edffcc] hover:bg-foreground/20 transition flex items-center justify-center "
            }
            onClick={() => setOpen(!open)}
          >
            <FaCaretRight
              className={`size-4 transition ${open ? " rotate-90" : ""}`}
            ></FaCaretRight>

            <span> {" " + label}</span>
          </Button>

          <Button
            onClick={handleCreateChannelModel}
            variant="transparent"
            className={
              "p-0.5 text-sm size-6 text-[#f9edffcc] flex justify-center items-center hover:bg-foreground/20 transition"
            }
          >
            <PlusIcon size={"4"}></PlusIcon>
          </Button>
        </div>

        {/* {open && (
          <Button
            variant={"transparent"}
            size="iconSm"
            className={
              "opacity-0 group:hover:opacity-100 transition-all opacity ml-auto text-sm size-6 text-[#f9edffcc]"
            }
          ></Button>
        )} */}
      </div>
      {open && children}
    </div>
  );
};

export default WorkspacePanelSection;
