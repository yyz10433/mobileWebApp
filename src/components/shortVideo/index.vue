<template>
  <div>
    <div class="video-wrap" :style="{ width: `${visualW}px`, height: `${visualH}px` }">
      <swiper direction="vertical" :pagination="{
        clickable: true,
      }" class="mySwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="item in videoList" v-bind:key="item.id">
          <videoPlay :src="item.vUrl"></videoPlay>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted, ref, toRaw } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'vue3-video-play/dist/style.css';
import { videoPlay } from "vue3-video-play";



const visualW = ref(0);   // 可视屏幕宽度
const visualH = ref(0);   // 可视屏幕高度

// 视频数据
let videoList = reactive([
  {
    id: 1,
    vUrl: `https://yili-timing.s3.cn-east-2.jdcloud-oss.com/yousuanru/hs/video/aa151e43-d4b9-46a9-b796-eea03e6751fa`,
    isLike: 0,
    userComment: []
  },
  {
    id: 2,
    vUrl: `https://yili-timing.s3.cn-east-2.jdcloud-oss.com/yousuanru/hs/video/aa151e43-d4b9-46a9-b796-eea03e6751fa`,
    isLike: 0,
    userComment: []
  },
  {
    id: 3,
    vUrl: `https://yili-timing.s3.cn-east-2.jdcloud-oss.com/yousuanru/hs/video/aa151e43-d4b9-46a9-b796-eea03e6751fa`,
    isLike: 0,
    userComment: []
  }
])



/**
 * 获取当前屏幕宽高
 */
const getNowPageSize = () => {
  visualW.value = window.innerWidth;
  visualH.value = window.innerHeight;
  console.log(`the visualW is ${visualW.value},visualH ${visualH.value}`);
}


/**
 * swiper Change事件
 */
const onSlideChange = (event: any) => {
  const swiperActiveIndex = (toRaw(event)).activeIndex;
  // 为2的倍数更新数据
  if (swiperActiveIndex % 2 == 0) {
    updateVideoList();
  }
}


/**
 * 更新video list
 */
const updateVideoList = () => {
  const swiperMock = reactive([
    {
      id: 1,
      vUrl: `https://yili-timing.s3.cn-east-2.jdcloud-oss.com/yousuanru/hs/video/aa151e43-d4b9-46a9-b796-eea03e6751fa`,
      isLike: 0,
      userComment: []
    },
    {
      id: 2,
      vUrl: `https://yili-timing.s3.cn-east-2.jdcloud-oss.com/yousuanru/hs/video/aa151e43-d4b9-46a9-b796-eea03e6751fa`,
      isLike: 0,
      userComment: []
    },
    {
      id: 3,
      vUrl: `https://yili-timing.s3.cn-east-2.jdcloud-oss.com/yousuanru/hs/video/aa151e43-d4b9-46a9-b796-eea03e6751fa`,
      isLike: 0,
      userComment: []
    }
  ]);

  videoList.push(...swiperMock);
}



onMounted(() => {
  getNowPageSize();
})

</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-item1 {
  width: 100%;
  height: 100%;
  background: red;
}


.swiper-item2 {
  width: 100%;
  height: 100%;
  background: gray;
}
</style>