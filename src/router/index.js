import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import WorkView from '@/views/WorkView.vue';
import ProjectView from '@/views/ProjectView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'David (Zhiyuan) Yang | SDE @ AWS' }
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkView,
    meta: { title: 'Selected Work & Research | David Yang' }
  },
  {
    path: '/work/:id',
    name: 'Project',
    component: ProjectView,
    meta: { title: 'Project Details | David Yang' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About & Experience | David Yang' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact & Connect | David Yang' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: { title: 'Page Not Found | David Yang' }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
