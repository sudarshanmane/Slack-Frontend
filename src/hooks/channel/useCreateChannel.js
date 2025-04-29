import { createChannelRequest } from "@/api/channel/index.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../context/userAuth.js";

export const useCreateChannel = () => {
  const { auth, workspaceId } = useAuth();

  const queryClient = useQueryClient();

  const {
    isSuccess,
    isPending,
    error,
    mutateAsync: createChannelMutation,
  } = useMutation({
    mutationFn: (data) =>
      createChannelRequest({ ...data, token: auth.token, workspaceId }),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: [`fetchWorkspaceDetails-${workspaceId}`],
      });
    },
    onError: (error) => {},
  });
  return {
    isSuccess,
    isPending,
    error,
    createChannelMutation,
  };
};
