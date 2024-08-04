const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/TodoPage.vue") },

      { path: "/index", component: () => import("src/pages/IndexPage.vue") },
      {
        path: "/post",
        component: () => import("src/pages/FileUploadUsingPost.vue"),
      },
      {
        path: "/send",
        component: () => import("src/pages/SendingDataUsingPost.vue"),
      },
      { path: "/api", component: () => import("src/pages/ApiPage.vue") },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
