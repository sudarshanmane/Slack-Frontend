import axiosConfig from "@/config/axiosConfig.js";

export const createWorkspaceRequest = async ({ name, description, token }) => {
  try {
    const response = await axiosConfig.post(
      "/workspaces",
      { name, description },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    return response?.data;
  } catch (error) {
    console.log("Error while creating the workspace!", error);
    throw error.response.data;
  }
};

export const fetchWorkspaceRequest = async ({ token }) => {
  try {
    const response = await axiosConfig.get("/workspaces", {
      headers: {
        "x-access-token": token,
      },
    });

    return response?.data?.data;
  } catch (error) {
    console.log("Error while fetching the workspaces!", error);
    throw error.response.data;
  }
};

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axiosConfig.get(`/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });

    return response?.data?.data;
  } catch (error) {
    console.log("Error while fetching the workspaces!", error);
    throw error.response.data;
  }
};
