import {createRouter, createWebHistory} from "vue-router";

const app_prefix = import.meta.env.VITE_APP_PREFIX;

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