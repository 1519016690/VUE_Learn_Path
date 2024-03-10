<template>
  <div style="background-color: #11213F;">
    <div class="header">
      <div class="title">
        <div class="logo">LOGO</div>
        <div class="title_name">
          <p>销售数据可视化平台</p>
        </div>
        <div style="padding: 4px;">
          <div style="height: 30px; width: 200px; border: 1px solid #438DA7; justify-content:center;">
            <p style="margin: autos; color: white;">12:00:34  12/12/34</p>
          
          </div>
        </div>
      </div>
      <div class="sysinfo">
        <div>fun</div>
        <div>fun</div>
        <div>fun</div>
        <div>fun</div>
      </div>
    </div>
    <div class="main_content" style="display: flex; height: 750px; width: 100%; background-color: rebeccapurple;">
      <div style="background-color: #11213F; height: 98%; width: 400px; margin: 2px;">
        <div  style="height: 20%; margin-top: 2px;">
        <div style="background: linear-gradient(135deg,rgba(38,74,108, 1)  0%, rgba(38,74,108, 0.1) 100%); color: #70E4F8; margin-block-end:0px;margin-block-start: 0px;
        text-align: start; height: 20px;"> 
          实时拜访全国        
        </div>
        <div class="part">
          <div style="color: white; text-align: start;">进行</div>
          <div style="color: white;">进行</div>
          <div style="color: white;">进行</div>
          <div style="color: white;">进行</div>
          </div>
        </div>
        <div style=" height: 30%;margin-top: 2px;">
          <div style="background: linear-gradient(135deg,rgba(38,74,108, 1)  0%, rgba(38,74,108, 0.1) 100%); color: #70E4F8; text-align: start; height: 20px;"> 
          批发商交易额（本地） 
        </div>
        <div  class="part">
          </div>
        </div>
        <div style="height: 40%; margin-top: 2px;">
          <div style="background: linear-gradient(135deg,rgba(38,74,108, 1)  0%, rgba(38,74,108, 0.1) 100%); color: #70E4F8; text-align: start; height: 20px;"> 
             jiniji
        </div>
        <div  class="part">
          </div>
        </div>
      </div>
      <div style="background-color: #11213F; height: 95%; width: 400px;margin: 2px; flex: 1; padding: 5px;">
        <div style=" height: 20%;">
          <div style="background: linear-gradient(135deg,rgba(38,74,108, 1)  0%, rgba(38,74,108, 0.1) 100%); color: #70E4F8; height: 20px;"> 
           分时交易（本地） 
        </div>
        <div class="part">
          </div>
        </div>
        <div style=" height: 20%; margin-top: 2px;">
          <div style="background: linear-gradient(135deg,rgba(38,74,108, 1)  0%, rgba(38,74,108, 0.1) 100%); color: #70E4F8;"> 
          <p style="text-align: start;">分时交易（本地）</p>
        </div>
        <div class="part">
          </div>
      </div>
        <div style="background-color: #617DA3; height: 40%; display: flex; margin-top: 2px; justify-content: center;">
          <div style="background-color: purple;  width: 48%; margin: 4px;">
            <div style="background: linear-gradient(135deg,rgba(38,74,108, 1)  0%, rgba(38,74,108, 0.1) 100%); color: #70E4F8;"> 
          <p style="text-align: start;">分时交易（本地）</p>
        </div>
      </div>
        <div style="background-color: purple;  width: 50%;margin: 4px;">
          <div style="background: linear-gradient(135deg,rgba(38,74,108, 1)  0%, rgba(38,74,108, 0.1) 100%); color: #70E4F8;"> 
          <p style="text-align: start;">分时交易（本地）</p>
        </div>
        </div>
        </div>
      </div>
      <div style="background-color: #11213F; height: 90%; width: 400px;margin: 2px; padding: 8px;">
        <div style="height: 20%; margin-top: 2px;" >
          <div style="background: linear-gradient(135deg,rgba(38,74,108, 1)  0%, rgba(38,74,108, 0.1) 100%); color: #70E4F8;"> 
          <p style="text-align: start;">分时交易（本地）</p>
        </div></div>
        <div style="background-color: #617DA3;  height: 20%;margin-top: 2px;">
          <div style="background: linear-gradient(135deg,rgba(38,74,108, 1)  0%, rgba(38,74,108, 0.1) 100%); color: #70E4F8;"> 
          <p style="text-align: start;">分时交易（本地）</p>
        </div></div>
        <div style="background-color: #617DA3; height: 40%;margin-top: 2px; ">
          <div style="background: linear-gradient(135deg,rgba(38,74,108, 1)  0%, rgba(38,74,108, 0.1) 100%); color: #70E4F8;"> 
          <p style="text-align: start;">分时交易（本地）</p>
        </div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header
{
  height: 60px;
  width: 100%;
  background:#11213F;
  display: flex;
  padding: 5px;
}
.title
{
  height: 100%;
  width: auto;
  /* background: #617DA3; */
  display: flex;
  border-bottom-style:double;
  border-bottom-color: black;
}
.logo
{
  background: yellow;
  margin-top: auto;
  width: auto;
}
.title_name
{
  color: #70C4DF;
  font-weight: bold;
  flex: 1;
  font-size: 24px;
  margin-left: 10px;
}
.sysinfo
{
  height: 100%;
  width: 300px;
  background: rgb(165, 103, 103);
  margin-left: auto;
  display: flex;
}
.sysinfo>div{
  background: yellow;
  margin: 1px;
  height: 80%;
  margin: auto;
}
/* .part{
  position: relative;
  margin:300px auto;
  width:400px;
  height:50px;
  background: rgba(1, 19, 67, 0.8);
  border: 2px solid #00a1ff;
  border-radius: 8px;
}
.part::before {
            position: absolute;
            top: -2px;
            bottom: -2px;
            left: 30px;
            width: calc(100% - 60px);
            content: "";
            border-top: 2px solid #016886;
            border-bottom: 2px solid #016886;
            z-index: 0;
        }
        .part::after {
            position: absolute;
            top: 30px;
            right: -2px;
            left: -2px;
            height: calc(100% - 60px);
            content: "";
            border-right: 2px solid #016886;
            border-left: 2px solid #016886;
            z-index: 0;
        } */


.part
{
  /* padding-top: 50px;  */
  height: calc(100% - 20px);
  overflow:hidden;
  background: linear-gradient(to left, #2CD5FF, #2CD5FF) left top no-repeat,
  linear-gradient(to bottom, #2CD5FF, #2CD5FF) left top no-repeat,
  linear-gradient(to left, #2CD5FF, #2CD5FF) right top no-repeat,
  linear-gradient(to bottom, #2CD5FF, #2CD5FF) right top no-repeat,
  linear-gradient(to left, #2CD5FF, #2CD5FF) left bottom no-repeat,
  linear-gradient(to bottom, #2CD5FF, #2CD5FF) left bottom no-repeat,
  linear-gradient(to left, #2CD5FF, #2CD5FF) right bottom no-repeat,
  linear-gradient(to left, #2CD5FF, #2CD5FF) right bottom no-repeat;
  background-size: 4px 20px, 20px 4px, 4px 20px, 20px 4px;
  border: 0.5px solid #073F97;
  position: relative;
}
</style>