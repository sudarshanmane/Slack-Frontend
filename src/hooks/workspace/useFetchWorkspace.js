import { fetchWorkspaceRequest } from "@/api/workspace/index.js";
import { useAuth } from "../context/userAuth.js";
import { useQuery } from "@tanstack/react-query";

const useFetchWorkspace = () => {
  const { auth } = useAuth();

  const {
    isFetching,
    isSuccess,
    error,
    data: workspaces,
  } = useQuery({
    queryFn: () => fetchWorkspaceRequest({ token: auth.token }),
    queryKey: ["fetchWorkspaces"],
    staleTime: 3000, // CONSIDER IT FOR THE BETTER USER EXPERIENCE
    // refetchOnWindowFocus: false, // IT WILL STOP FETCHING THE DATA AGAIN AND AGAIN AFTER THREE SECOND ON WINDOW CHANGE
  });

  return {
    isFetching,
    isSuccess,
    error,
    workspaces,
  };
};

export default useFetchWorkspace;
