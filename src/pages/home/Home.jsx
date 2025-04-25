import UserButton from "@/components/molecules/userButton/UserButton.jsx";
import useFetchWorkspace from "@/hooks/workspace/useFetchWorkspace.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isSuccess, isFetching, error, workspaces } = useFetchWorkspace();

  const navigate = useNavigate();

  useEffect(() => {
    if (isFetching) return;

    console.log("workpsces downloaded", workspaces);

    if (workspaces.length === 0 || !workspaces) {
      console.log("No Workspace Found creating one!");
    } else {
      navigate("/workspaces/" + workspaces[0]._id);
    }
  }, [isSuccess, isFetching]);

  return (
    <div className="">
      <UserButton></UserButton>
    </div>
  );
};

export default Home;
