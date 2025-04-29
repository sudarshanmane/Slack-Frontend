import axiosConfig from "@/config/axiosConfig.js";

export const createChannelRequest = async ({ workspaceId, name, token }) => {
  try {
    const response = await axiosConfig.put(
      `/workspaces/${workspaceId}/add-channel`,
      { name },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);

    throw error.response.data;
  }
};
