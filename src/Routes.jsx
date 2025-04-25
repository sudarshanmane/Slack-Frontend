import { Route, Routes } from "react-router-dom";

import "./index.css";

import { Auth } from "@/pages/auth/Auth.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

import SignupContainer from "./components/organisms/Auth/SignupContainer.jsx";
import SignInContailer from "./components/organisms/Auth/SignInContailer";
import Home from "./pages/home/Home.jsx";
import ProtectedRoutes from "./components/molecules/protectedRoutes/ProtectedRoutes.jsx";
import WokrspaceLayout from "./pages/workspace/WokrspaceLayout.jsx";
import WorkspaceOptions from "./components/organisms/Workspace/WorkspaceOptions";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/auth/signin"
        element={
          <Auth>
            <SignInContailer></SignInContailer>
          </Auth>
        }
      ></Route>

      <Route
        path="/auth/signup"
        element={
          <Auth>
            <SignupContainer></SignupContainer>
          </Auth>
        }
      ></Route>

      <Route
        path="/home"
        element={
          <ProtectedRoutes>
            <Home></Home>
          </ProtectedRoutes>
        }
      ></Route>

      <Route
        path="/workspaces/:workspaceId?"
        element={
          <ProtectedRoutes>
            <WokrspaceLayout>
              <WorkspaceOptions></WorkspaceOptions>
            </WokrspaceLayout>
          </ProtectedRoutes>
        }
      ></Route>

      {/* protected Routes */}

      {/* <Route path="/" element={<ProtectedRoutes></ProtectedRoutes>}> */}
      {/* ROUTES */}
      {/* </Route> */}

      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};
