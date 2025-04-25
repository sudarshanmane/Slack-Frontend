import combineContextProvider from "@/utils/combineContext.jsx";
import AuthContextProvider from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext.jsx";
import UpdateWorkspaceModalContextProvider from "./UpdateWorkspaceModalContext.jsx";

export const AppContextProvider = combineContextProvider(
  AuthContextProvider,
  CreateWorkspaceContextProvider,
  UpdateWorkspaceModalContextProvider
);
