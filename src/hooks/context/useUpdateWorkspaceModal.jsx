import { UpdateWorkspaceModalContext } from "@/context/UpdateWorkspaceModalContext.jsx";
import React, { useContext } from "react";

const useUpdateWorkspaceModal = () => {
  return useContext(UpdateWorkspaceModalContext);
};

export default useUpdateWorkspaceModal;
