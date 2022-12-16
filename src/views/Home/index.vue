<template>
    <div class="top-bar">
        
    </div>
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

.top-bar{
    width: 100%;
    height: 88px;
    background: #1989fa;
}



</style>