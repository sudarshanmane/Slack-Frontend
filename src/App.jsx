import { Toaster } from "@/components/ui/sonner";

import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppContextProvider } from "./context/AppContextProvider";
import { AppRoutes } from "./Routes.jsx";
import { Modals } from "./components/organisms/Modals/Modals.jsx";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes></AppRoutes>
        <Modals></Modals>

        <Toaster
          position="top-center"
          closeButton={true}
          toastOptions={{
            duration: 6000,
            style: {},
            classNames: {
              toast: "border border-black bg-white text-black",
              title: "text-black",
              description: "text-teal-400",
              closeButton: "text-black",
            },
          }}
        />
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
