/**
 * 引用公共模板
 */


import TopBar from "../components/top-navbar/index.vue";
import FooterBar from "../components/tabbar/index.vue";
import DiaLog from "../components/dialog/index.vue";
import type { Component } from "vue";


// [propName: string] 定义了任意属性并取 Component 类型的值。
const components:{
  [propName : string] :Component
} = {
  TopBar,
  FooterBar,
  DiaLog
}


export default  {
  install:(app : any)=>{
    for (const componentName in components) {
      app.component(componentName,components[componentName]);
    }
  }
}