import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'Index',
        component: Home
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: About
    // },
    // {
    //     path: '/projects',
    //     name: 'Projects',
    //     component: () => import('../views/Projects.vue') // 懒加载
    // },
    // {
    //     path: '/contact',
    //     name: 'Contact',
    //     component: () => import('../views/Contact.vue') // 懒加载
    // }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router