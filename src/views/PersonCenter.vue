<template>

  <div style="display: flex" class = "container-height">
    <div style="width: 240px;padding: 20px" class="box">

      <ul>
        <li>个人资料</li>
        <li>消息提醒</li>
        <li>我的动态</li>

      </ul>

    </div>

    <div style="flex: 1;margin-left: 20px;padding: 30px 100px" class="box">
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
          <el-input v-model="state.user.username" />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="state.user.name" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="state.user.email" />
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script setup>
import {reactive, ref} from "vue";
import request from "@/utils/request";
import {useUserStore} from "@/stores/user";
import config from "../../config";
import { Plus } from '@element-plus/icons-vue'
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
</script>
<style>
.box{
  background-color: white;
  border-radius: 10px;

}

li{
  text-align: center;
  margin: 15px;
  cursor: pointer;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
