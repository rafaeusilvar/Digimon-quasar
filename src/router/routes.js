const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("src/pages/post/dashboardD.vue") },
      {
        path: "dashboard",
        component: () => import("src/pages/post/dashboardD.vue"),
      },
      {
        path: "sports",
        component: () => import("pages/post/postsSports.vue"),
      },
      {
        path: "science",
        component: () => import("pages/post/postsScience.vue"),
      },
      {
        path: "technology",
        component: () => import("pages/post/postsTechnology.vue"),
      },
      {
        path: "entertainment",
        component: () => import("pages/post/postsEntertainment.vue"),
      },
      {
        path: "business",
        component: () => import("pages/post/postsBusiness"),
      },
      {
        path: "health",
        component: () => import("pages/post/postsHealth"),
      },
      {
        path: "test",
        component: () => import("pages/post/postsTest"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
