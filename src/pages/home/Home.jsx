import UserButton from "@/components/molecules/userButton/UserButton.jsx";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModel.jsx";
import useFetchWorkspace from "@/hooks/workspace/useFetchWorkspace.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isSuccess, isFetching, error, workspaces } = useFetchWorkspace();

  const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } =
    useCreateWorkspaceModal();

  const navigate = useNavigate();

  useEffect(() => {
    if (isFetching) return;

    if (workspaces.length === 0 || !workspaces) {
      setOpenCreateWorkspaceModal(true);
    } else {
      navigate("/workspaces/" + workspaces[0]._id);
    }
  }, [isSuccess, workspaces, isFetching, openCreateWorkspaceModal]);

  return (
    <div className="">
      <UserButton></UserButton>
    </div>
  );
};

export default Home;
