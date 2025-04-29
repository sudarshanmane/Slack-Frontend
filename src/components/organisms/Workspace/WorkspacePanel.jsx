import WorkspacePanelHeader from "@/components/molecules/Workspace/WorkspacePanelHeader.jsx";
import { useGetWorkspaceById } from "@/hooks/workspace/useGetWorkspaceById.js";
import {
  AlertTriangleIcon,
  HashIcon,
  Loader,
  MessageSquareTextIcon,
} from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";
import SidebarItem from "./../../atoms/SidebarItem/SidebarItem";
import WorkspacePanelSection from "@/components/molecules/Workspace/WorkspacePanelSection.jsx";

const WorkspacePanel = () => {
  const { workspaceId, channelId } = useParams();

  const { isFetching, workspace, isSuccess } = useGetWorkspaceById(workspaceId);

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader className="animate-spin transition text-white"></Loader>
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center p-2">
        <div
          className={
            " border w-[400px] flex flex-wrap break-words p-2 rounded bg-red-100 text-center text-red-600  font-semibold justify-center items-center "
          }
        >
          <AlertTriangleIcon className=""></AlertTriangleIcon> Someting went
          wrong!
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#5E2C5F] w-full">
      <WorkspacePanelHeader workspace={workspace}></WorkspacePanelHeader>
      <div className="flex w-full justify-center items-start mt-2 h-full flex-col gap-1">
        <div className="ml-3 flex w-full">
          <SidebarItem
            label="Threads"
            Icon={MessageSquareTextIcon}
            id="Threads"
            variant={"active"}
          ></SidebarItem>
        </div>
        <WorkspacePanelSection label={"Channels"} workspace={workspace}>
          <div className="flex w-full justify-center items-center mt-2 h-full flex-col gap-1 p">
            {workspace &&
              workspace.channels.map((el) => {
                console.log(el, channelId);

                return (
                  <SidebarItem
                    key={el._id}
                    Icon={HashIcon}
                    label={el.name}
                    id={el._id}
                    variant={channelId === el._id ? "active" : "default"}
                  ></SidebarItem>
                );
              })}
          </div>
        </WorkspacePanelSection>
      </div>
    </div>
  );
};

export default WorkspacePanel;
