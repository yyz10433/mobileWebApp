<template>
    <div>
        首页
    </div>
    <button @click="getUesrInfoAsync">字典</button>
    <button >其他</button>
    <button class="custom_btn">获取分类id</button>
    <div>{{ useStore.changeAount }}</div>
    <div @click="jumpPage">点击跳转二级页面</div>
    <div>userName : {{ name }}</div>
</template>



<script setup lang='ts'>
import { getUesrInfo } from '../../api/home';
import { useCounterStore } from "../../stores/counter";
import { useRouter } from "vue-router";
import { onMounted,ref } from "vue";

const useStore = useCounterStore();
const router = useRouter();
const name = ref(null);   // 用户姓名

/**
 * 跳转二级页面
 */
const jumpPage = () =>{
    router.push('/MineDetail');
}

/**
 * 获取用户信息
 */
const getUesrInfoAsync = async () =>{
    const res = await getUesrInfo();
    name.value = res.data.nickname;
}

onMounted(() => {
    getUesrInfoAsync();
})


</script>
<style scoped lang="less">
.custom_btn {
    width: 300px;
    height: 100px;
    background: blue;
}
</style>