<template>
    <div>
        首页
    </div>
    <button @click="getUesrInfoAsync">字典</button>
    <button @click="getMilk">其他</button>
    <button @click="getCateGroy(0)" class="custom_btn">获取分类id</button>
    <div>{{ useStore.changeAount }}</div>
</template>



<script setup lang='ts'>
import { getUesrInfo, getMilkList, getCategroy } from '../../api/home';
import { useCounterStore } from "../../stores/counter";


const useStore = useCounterStore();

/**
 * 字典表
 */
const getUesrInfoAsync = async () => {
    const res = await getUesrInfo();
    console.log(res);
}

/**
 * 等级
 */
const getMilk = async () => {
    const res = await getMilkList();
    console.log(res);
}


/**
 * 分类
 * @param { Number } categoryId 分类id
 */
const getCateGroy = async (categoryId: number) => {
    const res = await getCategroy({
        categoryId
    })
    console.log(res);

}





</script>
<style scoped lang="less">


.custom_btn{
    width: 300px;
    height: 100px;
    background: blue;
}

</style>