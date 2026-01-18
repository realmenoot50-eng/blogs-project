import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/Views/LoginView.vue'
import RegisterView from '@/Views/RegisterView.vue'
import HomeView from '@/Views/HomeView.vue'
import {auth} from '@/firebase/config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'login',
      path: '/login',
      component: LoginView,
      meta: {
        requireAuth: false
      }
    },
    {
      name: 'Register',
      path: '/Register',
      component: RegisterView,
      meta: {
        requireAuth: false
      }
    },
    {
      name: 'Home',
      path: '/Home',
      component: HomeView,
      meta: {
        requireAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requireAuth);

  if ( to.meta.requiresAuth && !user) {
    next('/Login'); // توجه لصفحة اللوجن لو مش مسجل
  } else {
    next(); // اسمح له بالمرور في أي حالة أخرى
  }
});



export default router