<!--
 * @Author: xiatian
 * @Date: 2020-05-25 20:16:22
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-26 20:23:39
--> 
<template>
  <div class="sidebar-menu">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo menu-item"
      @open="handleOpen"
      @close="handleClose"
      text-color="#333"
      >
      <div v-for="(item,index) in routes":key="index">
        <template v-if="item.children && item.hidden !=true">
          <el-submenu :index="item.meta.title">
            <template slot="title">
              <span>{{item.meta.title}}</span>
            </template>
            <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subIndex">
              <a :href="subItem.path" v-if="subItem.waiLian" target="__blank">
                <el-menu-item>{{subItem.meta.title}}</el-menu-item>
              </a>
              <router-link :to="subItem.path" v-else>
                <el-menu-item :index="subItem.meta.title">{{subItem.meta.title}}</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </template> 
        <template v-else>
          <router-link :to="item.path">
            <el-menu-item :index="item.meta.title" >
              <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </div>
    </el-menu>
  </div>  
</template>
<script>

export default {
  name:'sidebar-menu',
  data(){
   return{
     routes:[]
   } 
  },
  created(){
    this.routes = this.$router.options.routes
    // console.log(this.routes);
    
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="less" scoped>
  .sidebar-menu{

    .menu-item{
      border-radius:15px;
    }
  }
  .wai-lian{
    padding-left: 40px;
    color: rgb(51, 51, 51);
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 200px;
  }
  .wai-lian:hover{
    outline: 0;
    background-color: #ecf5ff;
  }
</style>