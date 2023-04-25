<script setup>
import {Compass,View,Pointer,ChatLineRound} from "@element-plus/icons-vue";
import request from "@/utils/request";
const load = () => {
  request.get('/user').then(res =>{
    console.log(res.data)
  })
}
load()
</script>

<template>
  <div style="background-color: white;border-radius: 10px;padding: 10px" class="container-height">
    <div style="display: flex;padding: 10px">
<!--    话题动态-->

      <div class="dynamic-box" style="width: 60%; padding: 20px;border: 1px solid #ccc">
        <div style="display: flex">
         <div style="width: 65px">
           <img style="width: 50px;height: 50px; margin-right: 10px; border-radius: 50px"
               src="http://localhost:9090/file/download/cb0c4669449848c0b72592e5b8f099e5.jpg?loginId=5a4f2a4963c148d1a27cb8bdb712792c&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJsb2dpbiIsImxvZ2luSWQiOiI1YTRmMmE0OTYzYzE0OGQxYTI3Y2I4YmRiNzEyNzkyYyIsInJuU3RyIjoic2xORHlNQTJuQVBJNUFwc0U4UkdUZ3BiMkJmWG5GOVUifQ.1oeqb5OEIPyGj52YEYoFAVCHCGursKIm42W6pGUcPyg"
               alt="">
         </div>
          <div style="flex: 1;line-height: 25px">
            <div style="font-weight: bold">管理员本员</div>
            <div style="font-size: 12px;color: #999">18分钟前，来自华为mate30</div>
          </div>
          <div style="width: 50px">
            <el-button>关注</el-button>
          </div>
        </div>
        <div class="content">
          2022年7月15日 · 一、2023年全国“退役大学生士兵计划”由北京大学、清华大学等513所普通高等学校承
          担（具体计划方案见附件）。 该专项计划在全国硕士研究生招生计划总规模
        </div>
        <div style="margin: 10px 0">
          <el-row :gutter="10">
          <el-col :span="12" style="margin-bottom: 10px">
            <img style="width: 100%" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.byqRULijwzwRE2m3lN8uWwHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">
          </el-col>
          <el-col :span="12">
            <img style="width: 100%" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.byqRULijwzwRE2m3lN8uWwHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">
          </el-col>
          <el-col :span="12">
            <img style="width: 100%" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.byqRULijwzwRE2m3lN8uWwHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">
          </el-col>

          </el-row>
          </div>

        <div style="margin: 10px 0;display: flex;line-height: 25px">
          <div style="width: 50%">
            <el-tag type="primary"># 冬至到了</el-tag>
            <el-tag type="danger" style="margin-left: 10px;font-size: 13px"><el-icon :size="20" style="top: 2px;font-size: 14px;position: relative"><Compass /></el-icon>  圈子</el-tag>

          </div>
          <div style="width: 50%;text-align: right;color: #999;font-size: 14px">
            <el-icon><View /></el-icon> 20
            <el-icon style="margin-left: 10px"><Pointer /></el-icon> 10
            <el-icon><ChatLineRound /></el-icon> 500
          </div>
          </div>

      </div>
      <!--    排行榜-->
      <div style="width: 40%;height: 100px;padding: 10px;border: 1px solid #ccc;margin-left: 10px">12</div>
    </div>




  </div>

</template>
<style scoped>
/*只显示两行文本，多余的用省略号*/
.content{
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
