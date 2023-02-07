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
  <div>主页</div>
</template>
