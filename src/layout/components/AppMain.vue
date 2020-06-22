<!--
 * @Author: xiatian
 * @Date: 2020-05-25 20:16:36
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-26 20:30:58
--> 
<template>
  <div class="app-main">
    <router-view :key="key"></router-view>
  </div>  
</template>
<script>
export default {
  name:'AppMain',
  data(){
   return{
     
   } 
  },
  computed: {
    key() {
      
      return this.$route.path
    }
  }
}
</script>
<style lang="less" scoped>
  .app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 64px);
    width: 100%;
    position: relative;
    overflow: hidden;
    border-right: solid 1px #e6e6e6;
    margin: 0;
    padding-left: 0;
    // background-color: #FFF;
  }
</style>