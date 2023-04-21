import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Trang chủ',
        permission: [],
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
      meta: {
        title: "Đăng nhập",
        permissions: [],
      },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/RegisterView.vue"),
      meta: {
        title: "Đăng ký",
        permissions: [],
      },
    },
  ]
});

const getPageTitle = (title: string) => {
  return title ? `${title} - mPOS` : "mPOS";
};

router.beforeEach((to) => {
  const meta: { [key: string]: any } = to.meta || {};
  document.title = getPageTitle(meta.title);
});

export default router
