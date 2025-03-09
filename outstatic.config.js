module.exports = {
    basePath: "/outstatic",
    contentPath: "content",
    collections: [
      {
        id: "posts",
        label: "Posts",
        slug: "posts",
        fields: [
          { name: "title", type: "text", label: "Title" },
          { name: "description", type: "text", label: "Description" },
          { name: "content", type: "markdown", label: "Content" },
        ],
      },
    ],
  };
  