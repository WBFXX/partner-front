<script setup>
import { RouterView } from 'vue-router'
import {nextTick, provide, ref} from "vue";
//让页面在不刷新的情况下 重新渲染一次
const isRouterAlive = ref(true)
const reload = () => {
  isRouterAlive.value = false
  nextTick(() =>{
    isRouterAlive.value = true
      }
  )
}
provide('reload',reload)


</script>

<template>
<RouterView v-if="isRouterAlive"/>
 </template>


