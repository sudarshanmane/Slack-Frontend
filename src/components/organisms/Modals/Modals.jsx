import UpdateWorkspaceModal from "@/components/molecules/WorkspacePreferencesModal/WorkspacePreferencesModal.jsx";
import CreateWorkspaceModel from "./../../molecules/createWorkspaceModal/CreateWorkspaceModel";
import CreateChannelModal from "@/components/molecules/Channels/CreateChannelModal.jsx";

export const Modals = () => {
  return (
    <>
      <CreateWorkspaceModel></CreateWorkspaceModel>
      <UpdateWorkspaceModal></UpdateWorkspaceModal>
      <CreateChannelModal></CreateChannelModal>
    </>
  );
};
