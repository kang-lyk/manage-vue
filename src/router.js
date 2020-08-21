import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/vue',
            children: [
                {
                    path: 'vue',
                    component: () => import('./views/VuePage.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        // {
        //     path: '/register',
        //     name: 'register',
        //     component: () => import('./views/Register.vue')
        // },
        {
            path: '*',
            component: () => import('./views/exception/Page404.vue')
        }
    ]
})
