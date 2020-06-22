<!--
 * @Author: xiatian
 * @Date: 2020-05-25 20:16:22
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-26 16:00:23
--> 
<template>
  <div class="navbar">
      <div class="navbar-left">
        <p class="logo-text big-size" @click="toHome">PinkHUB</p>
      </div>
      <div class="navbar-right"></div>
  </div>  
</template>
<script>
export default {
  name:'navbar',
  data(){
   return{
     
   } 
  },
  methods:{
    toHome(){
      this.$router.replace('/welcome')
      
    }
  }
}
</script>
<style lang="less" scoped>
  .navbar {
    height: 60px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
    display:flex;
    &-left{
      color:pink;
      margin-left:50px;
      align-self: center;
      cursor:pointer;
    }
  }

</style>
<style lang="less">
  .big-size{
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    margin: 5px 0; 

  }
</style>