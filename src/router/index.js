import {createRouter, createWebHistory} from 'vue-router'
import {useUserStore} from "@/stores/user";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Layout',
            redirect: '/home',//重定向到home,在登陆后重新定位到home
            component: () => import('../layout/Layout.vue'),
            children:[
                {
                    path: 'home',
                    name: 'Home',
                    component: () => import('../views/HomeView.vue'),
                },{
                    path: 'personCenter',
                    name: 'PersonCenter',
                    component: () => import('../views/PersonCenter.vue')
                },
                {
                    path: '/im',
                    name: 'Im',
                    component: () => import('../views/im.vue')
                }

            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },

        {
            path: '/register',
            name: 'Register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/404',
            name: '404',
            component: () => import('../views/404.vue')
        },
        {
            path: '/:pathMatch(.*)',  // 匹配所有未知路由
            redirect: '/404'    // 重定向到404页面
        },
    ]
})
// 路由守卫
router.beforeEach((to, from, next) => {
    const store = useUserStore()  // 拿到用户对象信息
    const user = store.loginInfo.user
    // const user = store.loginInfo //从useUserStore拿来的，不应该叫user，也许以后会改，插个眼
    const hasUser = user && user.id
    const noPermissionPaths = ['/login', '/register','/home']   // 定义无需登录的路由
    if (!hasUser && !noPermissionPaths.includes(to.path)) {
        // 用户没登录,  假如你当前跳转login页面，然后login页面没有用户信息，这个时候你再去往 login页面跳转，就会发生无限循环跳转
        // 获取缓存的用户数据
        //  如果to.path === '/login' 的时候   !noPermissionPaths.includes(to.path) 是返回 false的，也就不会进 next("/login")
        next("/login")
    } else {
        next()
    }
})
export default router
