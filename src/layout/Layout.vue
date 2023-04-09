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
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            router
        >
          <el-menu-item index="/home">首页</el-menu-item>
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
        <el-dropdown :hide-on-click="false">
        <div class="el-dropdown-link">
          <el-avatar :size="40" :src="circleUrl" style="position: relative;top: 10px"/>
            <span style="position: relative;left: 10px;top: -4px;font-size: 14px;font-family: 微软雅黑 ,serif">
              {{store.loginInfo.user.name }}
            </span>
          <el-icon class="el-icon--right" style="margin-left: 10px"><arrow-down/></el-icon>
        </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="router.push('/personCenter')">个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
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
import { ArrowDown } from '@element-plus/icons-vue'

const store = useUserStore()
const logout = () => {
  localStorage.removeItem("user")
  router.push("/login")
}

import {ref} from "vue";
import router from "@/router";

const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')



</script>

<style scoped>
.el-dropdown-link{
  cursor: pointer;
}

</style>
