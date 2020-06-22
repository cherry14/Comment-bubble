<!--
 * @Author: xiatian
 * @Date: 2020-05-25 19:58:48
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-26 10:29:18
--> 
<template>
  <el-container style="background:#f6f6f9" >
    <el-header>
      <navbar />
    </el-header>
    <el-main style="padding: 30px 20px 20px 20px;">
      <el-container style="width:1200px;margin:0 auto;">
        <el-aside style="width:200px">
          <sidebar class="sidebar-container" />
        </el-aside>
        <el-main style="padding: 0 10px;">
          <app-main />
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name:'Layout',
  components:{
    Navbar,Sidebar,AppMain
  },
  data(){
    return{

    }
  },
}
</script>
<style lang="less">
  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }
</style>
<style lang="less" scoped>

</style>