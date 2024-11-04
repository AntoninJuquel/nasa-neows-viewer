export const paths = {
  landing: {
    path: "/",
  },

  browse: {
    path: "/browse",
  },

  lookup: {
    path: "/lookup/:id",
    getHref(id: string) {
      return `/lookup/${id}`;
    },
  },
} as const;
