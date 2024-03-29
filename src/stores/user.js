import { defineStore } from 'pinia'   // 导入 defineStore

export const useUserStore = defineStore('user', {
    state: () => ({
        loginInfo: {}   // {  user: {}, token: '' }
    }),
    getters: {
        getUserId() {
            return this.loginInfo.user ? this.loginInfo.user.id : 0
        },
        getUser() {
            return this.loginInfo.user || {}
        },
        getBearerToken() {
            return this.loginInfo.token ? 'Bearer ' + this.loginInfo.token : ''
        },
        getToken() {
            return this.loginInfo.token || ""
        }
    },
    actions: {
        setLoginInfo(loginInfo) {
            this.loginInfo = loginInfo
        },
        setUser(user) {
            this.loginInfo.user = JSON.parse(JSON.stringify(user)) //用JSON这个User，跟内存中的user分离，可以避免修改的同步
        }
    },
    // pinia开启数据持久化
    persist: true
})
