<template>
  <div>
    <!-- 头部 -->
    <div style="display: flex; height: 60px;background-color: white;line-height: 60px;border-bottom: 1px solid #ddd">
      <div style="width: 200px;display: flex">
        <div style="width: 85px;padding-left: 30px">
          <img src="../assets/imgs/交流.png" alt="" style="width: 60px">
        </div>
        <div
            style="flex: 1;color: rgb(186,66,214);opacity: 95%;font-size: 15px;font-family: Microsoft Yauheni,sans-serif">
          <b>考研交流互助</b>
        </div>
      </div><!--logo -->
      <div style="flex: 1;padding-left: 50px">
        <el-menu
            style="border: none"
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            router
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/im">聊天室</el-menu-item>
          <el-menu-item index="/">动态</el-menu-item>
          <el-menu-item index="/">考研加油站</el-menu-item>
          <el-sub-menu index="2">
            <template #title>工作空间</template>
            <el-menu-item index="2-1">1</el-menu-item>
            <el-menu-item index="2-2">2</el-menu-item>
            <el-menu-item index="2-3">3</el-menu-item>
          </el-sub-menu>

        </el-menu>
      </div><!--菜单区域 -->

      <div style="width: 200px">
        <el-dropdown :hide-on-click="false" style="line-height: 60px">
        <div class="el-dropdown-link">
          <el-avatar :size="40" :src="avatar" style="position: relative;top: 10px"/>
<!--            <span style="font-size: 14px; margin-left:45px;pxfont-family: 微软雅黑 ,serif">-->
<!--              {{store.loginInfo.user.name }}-->
<!--            </span>-->
<!--          <el-icon class="el-icon&#45;&#45;right" style="margin-left: 10px"><arrow-down/></el-icon>-->
        </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="router.push('/personCenter?page=myInfo')">个人中心</el-dropdown-item>
              <el-dropdown-item>
                <div @click="logout">退出登录</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div><!--头像和下拉菜单 -->
    </div>
    <!-- 主体 -->
    <div
        style="margin: 10px auto 0px auto;width: 60%; ">
      <router-view></router-view> <!-- 加载子路由的视图 -->


    </div>
  </div>

</template>

<script setup>

import {useUserStore} from "@/stores/user";
import router from "@/router";
import {ref} from "vue";

const store = useUserStore()
const logout = () => {
  localStorage.removeItem("user")
  router.push("/login")
}
const avatar = ref('')
const user = store.getUser
if (user.avatar){
  avatar.value = user.avatar
}




</script>

<style scoped>
.el-dropdown-link{
  cursor: pointer;
}

</style>
