// module.exports={
//   lintOnsave:false,
//   //代理跨域
//   deServer:{
//     proxy:{
//       'api':{
//         target:'http://localhost:3000',
//         pathRewrite:{'^/api':''},
//       }
//     }
//   }
// }
module.exports = {
  productionSourceMap:false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
};
