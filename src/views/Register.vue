<template>
  <div
      style="height: 100vh;overflow: hidden; position: relative; background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);">
    <div class="form-box">
      <el-form ref="ruleFormRef" :model="form" :rules="rules" status-icon>
        <h2 style="text-align: center;">注册</h2>
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号" :prefix-icon="User"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" type="password"
                    autocomplete="new-password" :prefix-icon="Lock"></el-input>
        </el-form-item>
        <el-form-item prop="confirm">
          <el-input v-model="form.confirm" placeholder="请确认密码" type="password"
                    autocomplete="new-password" :prefix-icon="Lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="请输入昵称"
                    :prefix-icon="UserFilled"></el-input>
        </el-form-item>
        <div style="margin-bottom: 0.83em" @click="register">
          <el-button style="width: 100%" type="primary">注册</el-button>
        </div>
        <div style="text-align: right">
          <el-button type="primary" link @click="router.push('/login')">已有账号？去登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue"
//import {FormInstance, FormRules} from 'element-plus'
import {User, Lock ,UserFilled} from '@element-plus/icons-vue'
import router from "@/router";
import request from "@/utils/request";
import {ElMessage} from "element-plus";
import {useUserStore} from "@/stores/user";

const ruleFormRef = ref()

const form = reactive({})
const store = useUserStore()

const confirmpassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  }
  if (form.password !== value) {
    callback(new Error('两次输入密码不一致'))
  }
  callback()
}

const rules = reactive({
  username: [
    {required: true, message: '请输入账号', trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入正确密码', trigger: 'blur'},
  ],
  confirm: [
    {validator: confirmpassword, trigger: 'blur'},
  ],
})

const register = () => {
  ruleFormRef.value.validate(valid => {
        //当valid== true 就调用登录
        if (valid) {
          request.post("/register", form).then(res => {
                if (res.code === '200') {
                  //   store.$patch({user: res.data})   // res.data 是后台返回的用户数据，存储到缓存里面
                  store.setLoginInfo(res.data)
                  ElMessage.success('注册成功')
                  router.push('/')//根据setlogininfo缓存信息跳转到主页
                } else {
                  ElMessage.error(res.msg)
                }
              }
          )
        }

      }
  )
}

</script>

<style scoped>
.form-box {
  width: 300px;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 0 8px -2px rgba(0, 0, 0, .5);
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>