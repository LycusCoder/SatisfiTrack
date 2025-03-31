import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReviewAnalysis from '../views/ReviewAnalysis.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/analisis', component: ReviewAnalysis },
    { path: '/dashboard', component: Dashboard }
  ]
})

export default router