import { createBrowserRouter } from "react-router-dom";
import { paths } from "@/config/paths";

export const router = createBrowserRouter([
  {
    path: paths.landing.path,
    async lazy() {
      const { Landing } = await import("./routes/landing");
      return { Component: Landing };
    },
  },
  {
    path: paths.browse.path,
    async lazy() {
      const { Browse } = await import("./routes/browse");
      return { Component: Browse };
    },
  },
]);
