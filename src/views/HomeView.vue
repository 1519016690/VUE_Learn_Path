//课程学习
//页面布局常用标签div span p ul li a img i b 
//css 基本语法为选择器+属性；
//  #id,.class  div p
// 属性
/*
font-size
test-align
line-height
width;



 */

<template>
  <div>
   
 <div id="box">
  <div></div>
  <div></div>
  <div></div>
 </div>
 
 <span>
  很难过那</span>
</div>


</template>

<script>
export default {

}
</script>

<style>
#box
{
  /* width: 600px;
  height: 600px; */
  background: red;
  overflow: hidden;
  float: left;
}
#box>div:first-child
{
  width:200px;
  height: 100px;
  background: green;
  /*设置左浮动*/
  float: right;
  opacity: 0.2;
}
#box>div:nth-child(2)
{
  height: 200px;
  width: 200px;
  background: aquamarine;
   /*设置左浮动*/
   float: right;
}
#box>div:nth-child(3){
  height: 200px;
  width: 200px;
  background: orange;
  float: right;
}
span{
  /* background: rebeccapurple;
  float: left; */
}
</style>