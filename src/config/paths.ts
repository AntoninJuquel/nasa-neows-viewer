export const paths = {
  landing: {
    path: "/",
    getHref: () => "/",
  },
  app: {
    root: {
      path: "/app",
      getHref: () => "/app",
      name: "",
    },
    browse: {
      path: "",
      getHref: () => "/app",
      name: "Browse",
    },
    lookup: {
      path: "lookup/:id",
      getHref: (id: string) => `/app/lookup/${id}`,
      name: "",
    },
  },
} as const;
