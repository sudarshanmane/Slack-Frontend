import WorkspaceOptions from "@/components/organisms/Workspace/WorkspaceOptions.jsx";
import WorkspacePanel from "@/components/organisms/Workspace/WorkspacePanel.jsx";
import WorkspaceSidebar from "@/components/organisms/Workspace/WorkspaceSidebar.jsx";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable.jsx";
import { useAuth } from "@/hooks/context/userAuth.js";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const WokrspaceLayout = ({ children }) => {
  const { setWorkspaceId } = useAuth();

  const { workspaceId } = useParams();

  useEffect(() => {
    if (workspaceId) {
      setWorkspaceId(workspaceId);
    }
  }, [setWorkspaceId]);

  return (
    <div className="h-[calc(100vh-40px)]">
      <WorkspaceOptions></WorkspaceOptions>
      <div className="flex h-full">
        <WorkspaceSidebar></WorkspaceSidebar>
        <div className="h-full w-full ">
          <ResizablePanelGroup
            direction="horizontal"
            className="h-full w-full"
            autoSaveId={"workpace"}
          >
            <ResizablePanel
              defaultSize={25}
              minSize={10}
              maxSize={25}
              className="bg-[#5E2C5F]"
            >
              <div className="flex h-full items-start justify-center  w-full text-white">
                <WorkspacePanel></WorkspacePanel>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full  w-full items-center justify-center p-6">
                <span className="font-semibold bg-black ">Content</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        {/* {children} */}
      </div>
    </div>
  );
};

export default WokrspaceLayout;
