<!--
 * @Author: xiatian
 * @Date: 2020-05-25 20:16:22
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-26 11:11:42
--> 
<template>
  <div class="sidebar">
      <sidebar-menu />
  </div>  
</template>
<script>
import sidebarMenu from './sidebarMenu'


export default {
  name:'sidebar',
  components:{
    sidebarMenu
  },
  data(){
   return{
     
   } 
  },
}
</script>
<style lang="less" scoped>

</style>