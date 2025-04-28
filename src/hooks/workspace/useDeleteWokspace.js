import { deleteWorkspaceRequest } from "@/api/workspace/index.js";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../context/userAuth.js";

export const useDeleteWorkspace = (workspaceId) => {
  const { auth } = useAuth();

  const {
    isSuccess,
    isPending,
    error,
    mutateAsync: deleteWorkspaceMutation,
  } = useMutation({
    mutationFn: () =>
      deleteWorkspaceRequest({ token: auth.token, workspaceId }),
    onError: (error) => {
      console.log("Error while deleting the workspace", error);
    },
    onSuccess: (data) => {
      console.log("Workspace deleted successfully", data);
    },
  });

  return { isSuccess, isPending, error, deleteWorkspaceMutation };
};
