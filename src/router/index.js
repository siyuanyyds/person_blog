import { createRouter, createWebHistory } from 'vue-router';

// 动态引入页面组件（懒加载）
const Home = () => import('../views/Home.vue');
const BlogPost = () => import('../views/BlogPost.vue');
const About = () => import('../views/About.vue');
const Archive = () => import('../views/Archive.vue');
const CloudDisk = () => import('../views/CloudDisk.vue');
const NotFound = () => import('../views/NotFound.vue'); // 404 页面

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { showNavbar: false }, // 不显示导航栏
  },
  {
    path: '/blog',
    name: 'BlogPost',
    component: BlogPost,
    meta: { showNavbar: true }, // 显示导航栏
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { showNavbar: true },
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive,
    meta: { showNavbar: true },
  },
  {
    path: '/cloud-disk',
    name: 'CloudDisk',
    component: CloudDisk,
    meta: { showNavbar: true },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: { showNavbar: false }, // 不显示导航栏
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
