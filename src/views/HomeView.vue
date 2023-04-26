<script setup>
import {Compass, View, Pointer, ChatLineRound} from "@element-plus/icons-vue";
import request from "@/utils/request";
import {reactive} from "vue";
import {useUserStore} from "@/stores/user";

// const state = reactive({
//   hotDynamics: []
// })
function filterTime(time) {
  const date = new Date(time)
  const Y = date.getFullYear()
  const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const D = date.getDate()
  return `${Y}-${M}-${D}`
}

const state = reactive({
  hotDynamics: []
})
const load = async () => {
  const res = await request.get('/dynamic/hot', {
    params: {
      pageNum: 1,
      pageSize: 5
    }
  })
  // console.log(res)
  state.hotDynamics = res.data.records
}

load()


// const load = () => {
//   request.get('/dynamic/hot', {
//     params: {
//       pageNum: 1,
//       pageSize: 5
//     }
//   }).then(res => {
//     state.hotDynamics = res.data.records
//   })
// }
//
// load()

</script>

<template>
  <div style="background-color: white;border-radius: 10px; margin-bottom: 10px;padding: 10px" class="container-height">
    <div style="display: flex;padding: 10px">
      <!--    话题动态-->

      <div class="dynamic-box" style="width: 60%; ">

        <div style="padding: 20px; border: 1px solid #ccc; border-radius: 10px; margin-bottom: 10px"
             v-for="item in state.hotDynamics" :key="item.id">
          <div style="display:flex;">
            <img style="width: 50px; height: 50px; margin-right: 20px; border-radius: 50%"
                 :src="item.user.avatar"
                 alt="">
            <div style="flex: 1; line-height: 25px">
              <div style="font-weight: bold">{{ item.user.name }}</div>
              <div style="font-size: 12px; color: #999">{{ filterTime(item.createTime) }} · 来自 {{
                  item.location
                }}
              </div>

            </div>
            <el-button>关注</el-button>
          </div>
          <div class="content">{{ item.description }}</div>
          <div style="margin: 10px 0">
            <el-row :gutter="10">
              <el-col :span="12" style="margin-bottom: 10px">
                <img style="width: 100%"
                     :src="item.img"
                     alt="">
              </el-col>
            </el-row>
          </div>

          <div style="margin: 10px 0;display: flex;line-height: 25px">
            <div style="width: 50%">
              <el-tag># 冬至到了</el-tag>
              <el-tag type="danger" style="margin-left: 10px;font-size: 13px">
                <el-icon :size="20" style="top: 2px;font-size: 14px;position: relative">
                  <Compass/>
                </el-icon>
                圈子
              </el-tag>

            </div>
            <div style="width: 50%;text-align: right;color: #999;font-size: 14px">
              <el-icon>
                <View/>
              </el-icon>
              20
              <el-icon style="margin-left: 10px">
                <Pointer/>
              </el-icon>
              10
              <el-icon>
                <ChatLineRound/>
              </el-icon>
              500
            </div>
          </div>

        </div>


      </div>
      <!--    咨询-->
      <div style="width: 40%; ">

        <div style=" padding: 10px; margin-left: 10px; border: 1px solid #ccc; border-radius: 10px; margin-bottom: 10px">
          <div style="font-size: 18px; padding: 10px; color: salmon"><b>交友资讯</b></div>

          <div style="font-size: 14px; margin: 10px"><span style="color: goldenrod">1. </span> <span>经常不在家，如何让亲人听到你的声音？</span></div>
          <div style="font-size: 14px; margin: 10px"><span style="color: goldenrod">1. </span> <span>经常不在家，如何让亲人听到你的声音？</span></div>
          <div style="font-size: 14px; margin: 10px"><span style="color: goldenrod">1. </span> <span>经常不在家，如何让亲人听到你的声音？</span></div>
          <div style="font-size: 14px; margin: 10px"><span style="color: goldenrod">1. </span> <span>经常不在家，如何让亲人听到你的声音？</span></div>
          <div style="font-size: 14px; margin: 10px"><span style="color: goldenrod">1. </span> <span>经常不在家，如何让亲人听到你的声音？</span></div>
        </div>

        <div style=" padding: 10px; margin-left: 10px; border: 1px solid #ccc; border-radius: 10px">
          <div style="font-size: 18px; padding: 1px; color: #8ec5fc"><b>推荐圈子</b></div>

          <el-row :gutter="10" style="margin: 10px 0">
            <el-col :span="12">
              <el-card style="margin-bottom: 10px; cursor: pointer">
                <div style="padding: 5px; text-align: center">米粉圈子</div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card style="margin-bottom: 10px; cursor: pointer">
                <div style="padding: 5px; text-align: center">米粉圈子</div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card style="margin-bottom: 10px; cursor: pointer">
                <div style="padding: 5px; text-align: center">米粉圈子</div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card style="margin-bottom: 10px; cursor: pointer">
                <div style="padding: 5px; text-align: center">米粉圈子</div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card style="margin-bottom: 10px; cursor: pointer">
                <div style="padding: 5px; text-align: center">米粉圈子</div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card style="margin-bottom: 10px; cursor: pointer">
                <div style="padding: 5px; text-align: center">米粉圈子</div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card style="margin-bottom: 10px; cursor: pointer">
                <div style="padding: 5px; text-align: center">米粉圈子</div>
              </el-card>
            </el-col>
          </el-row>
        </div>

      </div>



    </div>
  </div>
</template>
<style scoped>
/*只显示两行文本，多余的用省略号*/
.content {
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 10px 0;
  line-height: 25px;
  text-align: justify
}


</style>
