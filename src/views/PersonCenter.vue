<template>

  <div style="display: flex" class = "container-height">


    <div style="width: 240px;padding: 20px" class="box">

      <ul>
        <li @click="changePagePath('myInfo')" :class="pagePath === 'myInfo' ? 'menu-active' : ''"><el-icon class="menu-icon"><User /></el-icon>个人资料</li>
        <li><el-icon class="menu-icon"><Lock /></el-icon>修改密码</li>
        <li><el-icon class="menu-icon"><Message /></el-icon>消息提醒</li>
        <li @click="changePagePath('myDynamic')" :class="pagePath === 'myDynamic' ? 'menu-active' : ''"><el-icon class="menu-icon"><Promotion /></el-icon>我的动态</li>

      </ul>

    </div>

    <div style="flex: 1;margin-left: 20px;padding: 30px 100px" class="box">
      <MyInfo v-if="pagePath === 'myInfo'"/>
      <MyDynamic v-if="pagePath === 'myDynamic'"/>
    </div>

  </div>

</template>

<script setup>
import {User,Message,Promotion,Lock} from '@element-plus/icons-vue'
import MyInfo from "@/components/MyInfo.vue";
import MyDynamic from "@/components/MyDynamic.vue";
import {useRoute} from "vue-router";
import {inject} from "vue";
import router from "@/router";

const route = useRoute()
const pagePath = route.query.page //用来引用url参数：page
const reload = inject('reload')

const changePagePath = (pagePath) => {
  router.push({ query: {page: pagePath} })
  route.query.page = pagePath
  reload()
}


</script>
<style scoped>
.box{
  background-color: white;
  border-radius: 10px;

}

li{
  font-size: 16px;
  text-align: center;
  margin: 15px;
  cursor: pointer;
}

.menu-icon{
  margin-right: 5px;
  top: 2px;
}
.menu-active{
  color: dodgerblue;
}
</style>
