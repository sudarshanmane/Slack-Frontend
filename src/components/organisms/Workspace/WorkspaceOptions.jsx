import { Button } from "@/components/ui/button.jsx";
import { useGetWorkspaceById } from "@/hooks/workspace/useGetWorkspaceById.js";
import { InfoIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceOptions = () => {
  const { workspaceId } = useParams();

  const { isSuccess, workspace, isFetching, error } =
    useGetWorkspaceById(workspaceId);

  // if (isFetching) {
  //   return (
  //     <div className="flex w-full h-[100vh] justify-center items-center">
  //       <Loader2Icon className="animate-spin transition"></Loader2Icon>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="w-full h-[100vh] flex justify-center items-center">
  //       <Card className={"bg-red-100 border w-[400px] "}>
  //         <CardHeader>
  //           <CardTitle
  //             className={
  //               "text-red-600 flex flex-col gap-2 justify-center items-center"
  //             }
  //           >
  //             <AlertTriangleIcon className="text-red-600 "></AlertTriangleIcon>{" "}
  //             Someting went wrong!
  //           </CardTitle>
  //         </CardHeader>
  //       </Card>
  //     </div>
  //   );
  // }

  return (
    <nav className="flex w-full bg-sky-800 h-[40px] justify-center items-center">
      <div className="flex w-full justify-between">
        <div></div>
        <Button className={"bg-accent/25 hover:bg-accent/15 px-2"}>
          <SearchIcon></SearchIcon>
          <span className="text-white">Search {workspace?.name}</span>
        </Button>

        <Button variant className={"hover:bg-accent/15 text-white px-2 mr-5 "}>
          <InfoIcon></InfoIcon>
        </Button>
      </div>
    </nav>
  );
};

export default WorkspaceOptions;
