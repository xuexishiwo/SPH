<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在home、seaech时显示，在登陆、注册隐藏  配置路由时，可以给路由添加路由元信息【meta】-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'


export default {
  name:'',
  components:{
    Header,
    Footer
  },
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库之中
    //派发一个action||获取商品三级列表的数据
      this.$store.dispatch('categoryList');
  },
}
</script>

<style>


</style>
