

/**
 * 该文件主要用于本地无后端调试使用的测试Mock
 */

import Mock from "mockjs";
import { userGetToken,getUserInfo } from "./mockServer";

Mock.setup({
  timeout: '200-600',
});


Mock.mock('/mock/tableDataOne', {
  data: {
    mtime: "@datetime", // 随机生成日期时间
    "score|1-800": 800, // 随机生成1-800的数字
    "rank|1-100": 100, // 随机生成1-100的数字
    "stars|1-5": 5, // 随机生成1-5的数字
    nickname: "@cname", // 随机生成中文名字
  },
});


// 获取token
Mock.mock('/mock/getUesrToken',userGetToken);


// 获取用户信息
Mock.mock('/mock/getUesrInfo',getUserInfo);