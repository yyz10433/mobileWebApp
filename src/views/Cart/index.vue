<template>
    <div>
      <div class="open-dialog" @click="openDiaLog">打开弹窗</div>
    </div>
    <DiaLog :show="show" position="bottom" @closeDialog="closeDialog" />
</template>

<script lang='ts' setup>
import { ref } from "vue";

const show = ref(false);

const openDiaLog = () =>{
  show.value = true;
}
/**
 * 关闭弹窗
 */
const closeDialog = () =>{
  show.value = false;
}

</script>
<style scoped lang="less">


.open-dialog{
  width: 100px;
  height: 100px;
  background: red;
}

</style>