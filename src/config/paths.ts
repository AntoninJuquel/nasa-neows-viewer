export const paths = {
  landing: {
    path: "/nasa-neows-viewer/",
    getHref: () => "/nasa-neows-viewer/",
  },
  app: {
    root: {
      path: "/nasa-neows-viewer/app",
      getHref: () => "/nasa-neows-viewer/app",
      name: ""
    },
    browse: {
      path: "",
      getHref: () => "/nasa-neows-viewer/app",
      name: "Browse",
    },
    lookup: {
      path: "lookup/:id",
      getHref: (id: string) => `/nasa-neows-viewer/app/lookup/${id}`,
      name: "",
    },
  },
} as const;
