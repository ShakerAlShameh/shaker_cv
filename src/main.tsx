import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/Components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import router from "./router.tsx";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
