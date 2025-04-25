import CreateWorkspaceContext from "@/context/CreateWorkspaceContext.jsx";
import { useContext } from "react";

export const useCreateWorkspaceModal = () => {
  return useContext(CreateWorkspaceContext);
};
