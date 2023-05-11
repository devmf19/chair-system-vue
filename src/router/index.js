import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import HomeView from '../views/HomeView.vue'
import EventsView from '../views/EventsView.vue'
import StatisticsView from '../views/StatisticsView.vue'
import MoneyView from '../views/MoneyView.vue'
import ProfileView from '../views/ProfileView.vue'
import ProductsView from '../views/ProductsView.vue'
import EventCreateView from '../views/EventCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: ForgotPasswordView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/money',
      name: 'money',
      component: MoneyView,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true }
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/event-create',
      name: 'event-create',
      component: EventCreateView,
      meta: { requiresAuth: true }
    }
  ]
});

// Configurar un guardia de ruta en Vue Router que redirigirá al usuario a la página de inicio de sesión si no está autenticado
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const token = localStorage.getItem('token');
  if (requiresAuth && !token) {
    next('/');
  } else {
    next();
  }
});

export default router
