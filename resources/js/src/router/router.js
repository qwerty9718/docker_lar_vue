import {createRouter, createWebHistory} from "vue-router";
import _env_values from "@/src/store/_env_values.js";

const app_prefix = _env_values.app_prefix;

const routes = [
    {
        path:`/${app_prefix}`,
        component: () => import('@/src/pages/MainPage.vue'),
        name:'main'
    },

    {
        path:`/${app_prefix}/second`,
        component: () => import('@/src/pages/SecondPage.vue'),
        name:'second-page'
    },

    {
        path:`/${app_prefix}/login`,
        component: () => import('@/src/Pages/Auth/Login.vue'),
        name:'login-page'
    },

    {
        path:`/${app_prefix}/register`,
        component: () => import('@/src/Pages/Auth/Register.vue'),
        name:'register-page'
    },

    {

        path: `/${app_prefix}:pathMatch(.*)*`,
        component: () => import('@/src/pages/ErrorPage.vue'),
        name:'error'

    },

]
const router = createRouter({
    routes,
    history:createWebHistory(),
    linkActiveClass: 'active',
});




// router.beforeEach((to, from, next) => {
//
//     const accessToken = localStorage.getItem('x_xsrf_token')
//
//     // Если ТОКЕНА нет
//     if (!accessToken){
//         if(security_route_list.includes(to.name)) {
//             return next({name:'login'})
//         }
//     }
//
//
//     // Если ТОКЕН ЕСТЬ
//     if (accessToken){
//         if(to.name === 'login' || to.name === 'register'){
//             return next({name:'cabinet'})
//         }
//     }
//
//
//     next()
// });


export default router;