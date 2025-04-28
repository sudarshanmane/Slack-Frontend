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
    console.log("Error while fetching the workspaces! 1", error);
    throw error.response.data;
  }
};

export const updateWorkspaceRequest = async ({
  name,
  description,
  workspaceId,
  token,
}) => {
  try {
    const response = await axiosConfig.put(
      `/workspaces/${workspaceId}`,
      { name, description },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    return response?.data;
  } catch (error) {
    console.log("Error while updating the workspace!", error);
    throw error.response.data;
  }
};

export const deleteWorkspaceRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axiosConfig.delete(`/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });

    return response?.data;
  } catch (error) {
    console.log("Error while delete the workspace!", error);
    throw error.response.data;
  }
};
