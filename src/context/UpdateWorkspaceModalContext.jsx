import { createContext, useState } from "react";

export const UpdateWorkspaceModalContext = createContext();

const UpdateWorkspaceModalContextProvider = ({ children }) => {
  const [openUpdateWorkspaceModal, setOpenUpdateWorkspaceModal] =
    useState(false);

  const [workspaceDetails, setWorkspaceDetails] = useState();

  return (
    <UpdateWorkspaceModalContext.Provider
      value={{
        openUpdateWorkspaceModal,
        setOpenUpdateWorkspaceModal,
        workspaceDetails,
        setWorkspaceDetails,
      }}
    >
      {children}
    </UpdateWorkspaceModalContext.Provider>
  );
};

export default UpdateWorkspaceModalContextProvider;
