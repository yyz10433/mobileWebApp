<template>
  <div>
    <van-popup :show="props.show" @click="!props.show" :position="props.position" @click-overlay="closeDiaLog">内容</van-popup>
  </div>
</template>

<script lang='ts' setup>
/**
 * 全局弹窗
 */
import { defineProps, defineEmits } from 'vue';
import type { PopupPosition } from "vant";

/**
 * 弹窗展示
 */
type dialog = {
  show: boolean,
  position?: PopupPosition
}

/**
 * withDefaults 高阶组件 用于给父组件传过来的值添加默认值
 */
const props = withDefaults(defineProps<dialog>(), {
  show: false,   // 弹窗显隐
  position: 'center'  // 弹出位置
});


const emit = defineEmits(['closeDialog']);
const closeDiaLog = () => {
  emit('closeDialog');
}
</script>
<style scoped>

</style>