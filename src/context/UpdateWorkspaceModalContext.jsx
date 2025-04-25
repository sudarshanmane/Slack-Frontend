import { createContext, useState } from "react";

export const UpdateWorkspaceModalContext = createContext();

const UpdateWorkspaceModalContextProvider = ({ children }) => {
  const [openUpdateWorkspaceModal, setOpenUpdateWorkspaceModal] =
    useState(false);

  return (
    <UpdateWorkspaceModalContext.Provider
      value={{ openUpdateWorkspaceModal, setOpenUpdateWorkspaceModal }}
    >
      {children}
    </UpdateWorkspaceModalContext.Provider>
  );
};

export default UpdateWorkspaceModalContextProvider;
