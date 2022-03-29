const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/dashboard/dashboardD.vue") },
      {
        path: "dashboard",
        component: () => import("pages/dashboard/dashboardD.vue"),
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
