<template>
    <div class="top-bar">
        <van-button type="primary" @click="addItem">点击此按钮</van-button>
        <div>{{ list }}</div>
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
const getUesrInfoAsync = async () => {
    const res = await getUesrInfo();
    name.value = res.data.nickname;
}

const addItem = () => {
    list.push(1);
}

onMounted(() => {
    getUesrInfoAsync();
})


</script>
<style scoped lang="less">

</style>