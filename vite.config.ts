import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import pxtoViewPort from 'postcss-px-to-viewport';
import { viteMockServe } from 'vite-plugin-mock';   // 自定义mock


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), viteMockServe()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  /**
   * pxtoViewPort vw适配移动端配置
   */
  css: {
    postcss: {
      plugins: [
        pxtoViewPort({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true,  // 是否转换后直接更换属性值
          landscape: false,  // 是否处理横屏情况
          exclude: [/node_modules/]
        })
      ]
    }
  },
  /**
   * vite 跨域配置
   */
  server: {
    open: true,  // 自启动浏览器 
    port: 8080,
    proxy: {
      '/api': {
        target: 'xxxxx',  // 域名
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        ws: true,
      }
    }
  }
})
