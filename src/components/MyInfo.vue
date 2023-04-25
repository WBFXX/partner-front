<template>
  <div>

    <el-form :model="state.user" label-width="80px">
      <el-form-item label="">
        <el-upload
            class="avatar-uploader"
            :action="url"
            :headers="state.headers"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
        >
          <img v-if="state.user.avatar" :src="state.user.avatar" class="avatar"/>
          <el-icon v-else class="avatar-uploader-icon">
            <Plus/>
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="state.user.username" disabled/>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="state.user.name" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="state.user.email" />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>

  </div>



</template>

<script setup>
import {reactive, ref} from "vue";
import request from "@/utils/request";
import {useUserStore} from "@/stores/user";
import config from "../../config";
import {Plus} from '@element-plus/icons-vue'
import {ElMessage} from "element-plus";

let store = useUserStore();
let state = reactive({
  user:{},
  headers:{
    Authorization: store.getBearerToken
  }
})
const loaduser = () => {
  request.get('/user/' + store.getUserId).then(res =>{
    state.user = res.data
  })
}
loaduser()
const url = ref('http://' + config.serverUrl + "/file/upload")
const handleAvatarSuccess = (res) => {
  if (res.code === '200'){
    state.user.avatar = res.data + "?loginId=" + store.getUser.uid + "&token=" + store.getToken
    ElMessage.success('上传成功')
  }else if (res.code === '500') {
    ElMessage.error('文件太大，请上传更小的图片')
  }else{
    ElMessage.error('上传失败')
  }

}
const save = () => {
  request.put('/user',state.user).then(res =>{
    if (res.code === '200'){
      ElMessage.success('保存成功')
      store.setUser(state.user)
    }else {
      ElMessage.error(res.msg)
    }
  })
}
</script>



<style scoped>

li{
  font-size: 16px;
  text-align: center;
  margin: 15px;
  cursor: pointer;
}

.avatar{
  width: 100px;
  height: 100px;
}


</style>
