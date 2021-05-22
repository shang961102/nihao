<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/images/tabbar/icon01.png" alt="">
        <img slot="item-icon_active" src="~assets/images/tabbar/icon01_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="~assets/images/tabbar/icon02.png" alt="">
        <img slot="item-icon_active" src="~assets/images/tabbar/icon02_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="~assets/images/tabbar/icon03.png" alt="">
        <img slot="item-icon_active" src="~assets/images/tabbar/icon03_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="~assets/images/tabbar/icon04.png" alt="">
        <img slot="item-icon_active" src="~assets/images/tabbar/icon04_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    name: "App",
    components: {
      TabBar,
      TabBarItem
      
    }

}
 </script>

<style scoped>
@import "assets/css/reset.css";

</style>
