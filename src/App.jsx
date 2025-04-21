import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import "./index.css";

import { Auth } from "@/pages/auth/Auth.jsx";
import SigninCard from "@/components/organisms/Auth/SignInCard";
import NotFound from "./pages/NotFound.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignupContainer from "./components/organisms/Auth/SignupContainer.jsx";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/auth/signin"
          element={
            <Auth>
              <SigninCard></SigninCard>
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

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Toaster></Toaster>
    </QueryClientProvider>
  );
}

export default App;
