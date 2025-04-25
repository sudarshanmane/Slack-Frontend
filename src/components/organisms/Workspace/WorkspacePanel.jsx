import WorkspacePanelHeader from "@/components/molecules/Workspace/WorkspacePanelHeader.jsx";
import { useGetWorkspaceById } from "@/hooks/workspace/useGetWorkspaceById.js";
import { AlertTriangleIcon, Loader } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

const WorkspacePanel = () => {
  const { workspaceId } = useParams();

  const { isFetching, workspace, isSuccess } = useGetWorkspaceById(workspaceId);

  if (isFetching) {
    return (
      <div className="flex justify-center items-center">
        <Loader className="animate-spin transition text-white"></Loader>
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center ">
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
    </div>
  );
};

export default WorkspacePanel;
