<template>
    <div class="top-bar">
        <van-button type="primary" @click="addItem">点击此按钮</van-button>
        <div>{{ list }}</div>
        <van-button type="primary" @click="jumpPage">跳转二级页面</van-button>

        <van-button type="primary" @click="getUserInfo">获取用户信息</van-button>
        <div>
            <van-button type="primary" @click="goVideoPage">进入微视</van-button>
        </div>
    </div>
</template>



<script setup lang='ts'>
import { getUesrInfo } from '../../api/home';
import { useCounterStore } from "../../stores/counter";
import { useRouter } from "vue-router";
import { onMounted, ref, reactive } from "vue";

const useStore = useCounterStore();
const router = useRouter();
const name = ref(null);   // 用户姓名
const list = reactive([] as Array<number>);


/**
 * 跳转二级页面
 */
const jumpPage = () => {
    router.push('/MineDetail');
}

/**
 * 获取用户信息
 */
const getUserInfo = async () => {
    const res = await getUesrInfo();
    console.log('res',res);
    
}


/**
 * 跳转
 */
const goVideoPage = () =>{
    router.push('/Video');
}

const addItem = () => {
    list.push(1);
}

onMounted(() => {
})


</script>
<style scoped lang="less">

</style>