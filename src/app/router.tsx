import { createHashRouter } from "react-router-dom";
import { paths } from "@/config/paths";

export const router = createHashRouter([
  {
    path: paths.landing.path,
    async lazy() {
      const { Landing } = await import("./routes/landing");
      return { Component: Landing };
    },
  },
  {
    path: paths.app.root.path,
    async lazy() {
      const { Root } = await import("./routes/root/root");
      return { Component: Root };
    },
    children: [
      {
        path: paths.app.browse.path,
        async lazy() {
          const { Browse } = await import("./routes/root/browse");
          return { Component: Browse };
        },
      },
      {
        path: paths.app.lookup.path,
        async lazy() {
          const { Lookup, lookupLoader } = await import("./routes/root/lookup");
          return { Component: Lookup, loader: lookupLoader };
        },
      },
    ],
  },
]);
