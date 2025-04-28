import { updateWorkspaceRequest } from "@/api/workspace/index.js";
import { useAuth } from "@/hooks/context/userAuth.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateWorkspace = () => {
  const { auth, workspaceId } = useAuth();
  const queryClient = useQueryClient();

  const {
    isSuccess,
    isPending,
    error,
    mutateAsync: updateWorspaceMutation,
  } = useMutation({
    mutationFn: (data) =>
      updateWorkspaceRequest({
        ...data,
        workspaceId: workspaceId,
        token: auth.token,
      }),
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ["fetchWorkspaces"] });

      // for refetching the updated information
      queryClient.invalidateQueries({
        queryKey: [`fetchWorkspaceDetails-${workspaceId}`],
      });

      console.log("Workspace Successfully updated!", data, "invalidatred");
    },
    onError: (error) => {
      console.log("Error whilte updating the workspace!", error);
      throw error;
    },
  });

  return {
    isSuccess,
    isPending,
    error,
    updateWorspaceMutation,
  };
};
