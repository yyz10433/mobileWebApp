

<script setup lang="ts">
</script>

<template>
  <!-- 注: * 启用该渲染动画需页面只有一个根标签 -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- 底部导航 -->
  <Tabbar />
</template>

<style scoped>
.fade-enter-from {
  transform: translateX(-100%);
}

.fade-enter-to{
  transform: translateX(0);
}

.fade-enter-active{
  transition: .5s ease;
}
</style>
