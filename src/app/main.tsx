import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import "./index.css";
import { router } from "./router";
import { Notifications } from "@/components/ui/notifications";
import { store } from "@/stores/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
      <Notifications />
    </StoreProvider>
  </StrictMode>
);
