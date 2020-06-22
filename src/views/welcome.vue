<!--
 * @Author: xiatian
 * @Date: 2020-05-25 19:46:35
 * @LastEditors: xiatian
 * @LastEditTime: 2020-06-22 14:24:04
--> 
<template>
  <div class="welcome">
    welcome to pinkHub
    <div class="big-box" ref="xxxx">
      <div class="father-box" v-if="showList">
        <template  v-for="(item,index) in showList" >

        <div :ref="item.id" :key="item.id" >
          {{item.text}}
        </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'welcome',
  data(){
    return{
      sonList:[
        {text:"gogogogogogogogogogo"},
        {text:"宝马530"},
        {text:"奔驰G500"},
        {text:"奔驰G63"},
        {text:"哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好哈喽你好"},
        {text:"啥玩意儿"},
        {text:"奥迪a4l奥迪a4l奥迪a4l奥迪a4l"},
        {text:"奔驰c260奔驰c260奔驰c260奔驰c260奔驰c260奔驰c260奔驰c260奔驰c260"},
        {text:"奔驰c260奔驰c260奔驰c260"},
        {text:"奔驰c260奔驰c260"},
        {text:"奔驰G500"},
        {text:"奔驰G63"},
      ],
      showList:[]
    }
  },
  created(){
    this.setTimeToShow()
  },
  methods:{
    setTimeToShow(){
      //缓存数组- 深拷贝服务端数组
      let buffer = [...this.sonList]
      //模拟实时推送消息 1.1s/次
      //创建id
      let listIndex = 0
      let timer = setInterval(() =>{
        listIndex ++
        // if(listIndex >99){
        //   listIndex = 1
        // }
        //如果buffer缓存数组为空，从新轮回拷贝服务端数组
        if(buffer.length == 0) buffer = [...this.sonList]
        let id=`id${listIndex}`
        //渲染的dom节点的数组中设置id属定值
        this.$set(buffer[0],'id',id)
        //将第一条节点push到渲染数组列表中
        this.showList.push(buffer[0])
        //再去执行渲染动画
        this.$nextTick(() =>{
          this.$refs[id][0].className = 'son-box-create'
          console.log(this.$refs[id][0]);
          console.log(this.$refs[id]);
          console.log(this.$refs['xxxx']);
          
          //使用动画结束监听，对节点进行删除
          // this.$refs[id][0].addEventListener("animationend", (e)=>{
            
          //   if(this.$refs[id][0]){
          //     this.showList.shift()
          //     // console.log(this.$refs[id][0]);
          //   }
          // })

          if(this.showList.length >5) this.showList.shift()
          //缓存区删除一条数据
          buffer.shift()
        })
      },1000)
    }
  }

}
</script>
<style lang="less" scoped>
  .big-box{
    display:flex;
    height:800px;
    align-items: flex-end;
  }
  .father-box{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
  }
  .son-box-create{
    background: pink;
    border-radius: 10px;
    animation: create 5s;
    transform-origin: 0 100% 0;
    margin-top:10px;
    max-width:200px;
    font-size:13px;
    padding: 20px 30px;
    word-wrap: break-word; 
  }
  @keyframes create {
    0%{
      opacity: 0;
      margin-top:0;
      transform: scale(0.1);
      padding:0;
    }
    20%{
      margin-top:10px;
      padding: 20px 30px;
      transform: scale(1);
    }
    25%{
      opacity: 1;
    }
    70%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }


</style>