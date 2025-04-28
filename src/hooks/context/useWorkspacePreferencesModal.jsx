import { UpdateWorkspaceModalContext } from "@/context/UpdateWorkspaceModalContext.jsx";
import React, { useContext } from "react";

const useWorkspacePreferencesModal = () => {
  return useContext(UpdateWorkspaceModalContext);
};

export default useWorkspacePreferencesModal;
