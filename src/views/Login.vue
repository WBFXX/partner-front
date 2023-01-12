<template>
  <div style="height: 100vh;overflow: hidden; position: relative; background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
    <div style="width: 300px; border-radius: 10px; margin: 0 auto; box-shadow: 0 0 8px -2px rgba(0,0,0,.5);
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); padding: 20px;
      position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);">
      <el-form>
        <h2 style="text-align: center;">后台登录</h2>
        <el-form-item prop="account">
          <el-input v-model="form.account"  placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password"  placeholder="请输入密码"
                    autocomplete="new-password"></el-input>
        </el-form-item>
        <div style="margin-bottom: 0.83em">
          <el-button style="width: 100%" type="primary">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {  reactive  } from "vue"
const form = reactive({})
</script>

<style scoped>

</style>