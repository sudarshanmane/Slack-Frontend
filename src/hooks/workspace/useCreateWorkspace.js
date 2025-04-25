import { createWorkspaceRequest } from "@/api/workspace/index.js";
import { useAuth } from "@/hooks/context/userAuth.js";
import { useMutation } from "@tanstack/react-query";
export const useCreateWorkspace = () => {
  const { auth } = useAuth();

  const {
    data,
    isSuccess,
    isPending,
    error,
    mutateAsync: createWorspaceMutation,
  } = useMutation({
    mutationFn: (data) =>
      createWorkspaceRequest({ ...data, token: auth.token }),
    onSuccess: (response) => {
      console.log("Successfully create a workspace!", response);
    },
    onError: (error) => {
      console.log("Failed to create a workspace!", error);
    },
  });

  return { data, isSuccess, isPending, error, createWorspaceMutation };
};
