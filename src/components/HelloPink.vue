<!--
 * @Author: xiatian
 * @Date: 2020-05-25 19:50:44
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-25 19:57:20
--> 
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Let's Go in the pinkHub</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
