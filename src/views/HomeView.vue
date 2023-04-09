<script setup>
import request from "@/utils/request";
const load = () => {
  request.get('/user').then(res =>{
    console.log(res.data)
  })
}
load()
</script>

<template>
  <div style="background-color: white;border-radius: 10px;" class="container-height">主页</div>
</template>
