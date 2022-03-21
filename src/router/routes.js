const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/dashboard/dashboardTest.vue') },
      { path: 'dashboard', component: () => import('pages/dashboard/dashboardTest.vue') },
      { path: 'posts', component: () => import('pages/post/postsHome.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
