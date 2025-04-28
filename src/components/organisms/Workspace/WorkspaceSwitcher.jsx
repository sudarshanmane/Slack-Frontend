import { Button } from "@/components/ui/button.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import useFetchWorkspace from "@/hooks/workspace/useFetchWorkspace.js";
import { useGetWorkspaceById } from "@/hooks/workspace/useGetWorkspaceById.js";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WorkspaceSwitcher = () => {
  const { workspaceId } = useParams();

  const navigate = useNavigate();

  const { isFetching, workspace } = useGetWorkspaceById(workspaceId);

  const { isFetching: isFetchingAllData, workspaces } = useFetchWorkspace();

  const [otherWorkspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    if (!isFetchingAllData) {
      console.log('inside fetching workpsaces')
      const otherWorkspaces = [];

      workspaces?.forEach((el) => {
        if (el._id !== workspace?._id) {
          otherWorkspaces.push(
            <DropdownMenuItem
              className={"cursor-pointer"}
              key={el._id}
              onClick={() => handleWorkspace(el._id)}
            >
              {el.name}
            </DropdownMenuItem>
          );
        }

        setWorkspaces([...otherWorkspaces]);
      });
    }
  }, [workspaces, isFetchingAllData]);

  const handleWorkspace = (id) => {
    navigate(`/workspaces/${id}`);
  };

  return (
    <div className="flex justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className={"bg-[#ABABAD] hover:bg-[#ABABAD]/40"}>
            {isFetching ? (
              <Loader className="animate-spin transition size-5"></Loader>
            ) : (
              <div> {workspace?.name[0].toUpperCase()} </div>
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem
            className={"text-green-700 font-bold cursor-pointer "}
          >
            <div className="flex w-full flex-col">
              {workspace?.name}{" "}
              <span className="text-xs text-muted-foreground ml-auto mt-auto">
                {" "}
                (Actice Workspace)
              </span>
            </div>
          </DropdownMenuItem>
          {otherWorkspaces}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WorkspaceSwitcher;
