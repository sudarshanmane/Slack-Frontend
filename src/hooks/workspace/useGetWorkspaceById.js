import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/userAuth.js";
import { fetchWorkspaceDetailsRequest } from "@/api/workspace/index.js";

export const useGetWorkspaceById = (id) => {
  const { auth } = useAuth();
  const {
    data: workspace,
    isSuccess,
    isFetching,
    error,
  } = useQuery({
    queryFn: () =>
      fetchWorkspaceDetailsRequest({ workspaceId: id, token: auth.token }),
    queryKey: [`fetchWorkspaceDetails-${id}`],
    staleTime: 10000,
  });

  return {
    workspace,
    isSuccess,
    isFetching,
    error,
  };
};
