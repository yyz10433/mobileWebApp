<template>
  <div v-if="store.isShowTab">
    <van-tabbar v-model="active" :placeholder="true">
      <template v-for="(val, index) in tab">
        <van-tabbar-item :icon="val.icon" @click="jumpPage(val.url)" :name="index">{{ val.name }}</van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup lang='ts'>
/**
 * 底部导航
 */

import { ref,  watch } from "vue";
import { useRouter } from "vue-router";
import { useCounterStore } from "../../stores/counter";


const router = useRouter();           // 路由实例
const store = useCounterStore();      // pinia仓库
const tab = store.footerBar;  // 导航

// 选中的路由
const active = ref(0);

/**
 * 监听路由变化 改变导航栏
 */
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    const nowRoute = newValue.fullPath;   // 当前路径
    const index = tab.findIndex(v => { return v.url == nowRoute.replace(/\//g, ''); });
    active.value = index == -1 ? 0 : index;  // 选中状态
  },
  { immediate: true }
)


/**
 * 跳转
 * @param { string } url  路由地址
 */
const jumpPage = (url: string) => {
  router.push(url);
}

</script>
<style scoped lang="less">

</style>