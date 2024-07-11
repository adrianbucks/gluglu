export const BLOG_CATEGORIES: {
  title: string;
  slug: "news" | "education";
  description: string;
}[] = [
  {
    title: "News",
    slug: "news",
    description: "Updates and announcements from GluGlu.",
  },
  {
    title: "Education",
    slug: "education",
    description: "Educational content about GluGlu.",
  },
];

export const BLOG_AUTHORS = {
  gluglu: {
    name: "gluglu",
    image: "/_static/avatars/mickasmt.png", // TODO: change image
    twitter: "gluglu",
  },
  adrianbucks: {
    name: "adrianbucks",
    image: "/_static/avatars/shadcn.jpeg", // TODO: change image
    twitter: "adrianbucks",
  },
};
