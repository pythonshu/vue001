<template>
  <div id="vue002">

      <input  id="inputHelpBlock"
             placeholder="请输入商家或美食名称"
             v-model="valueTxt"
             aria-describedby="helpBlock">


    </input>

    <button type="button" class="btn btn-success" @click="tosubmit">提交</button>

    <div class="unfound" v-show="issearch1">
      很抱歉！无搜索结果
    </div>
    <div  v-show="issearch" >
      <p class="header">商家</p>
      <ul>
        <li class="datal1" v-for="(per,index) in dataarry" @click="tofoot(per)" :key="index">
          <!--图片-->
          <div class="imgd1 pull-left">
            <img :src="'//elm.cangdu.org/img/'+per.image_path" alt="">
          </div>
          <div class="pull-left contentright">
            <span>{{per.name}}</span>
            <p class="p1">月售 {{per.recent_order_num}}单</p>
            <p class="p1">{{per.float_minimum_order_amount}}元起送 / 距离{{per.distance}}公里</p>
          </div>
        </li>
      </ul>
    </div>
    <!--<main_one_zwq></main_one_zwq>-->
  </div>
</template>

<script>

  import Vue from "vue";
  export default {
    name: "vue002",
    data(){
      return{
        valueTxt:"",
        dataarry:"",
        issearch:false,
        issearch1:false

      }
    },
    methods:{
      onClickLeft(){
        this.$router.go(-1)
      },
      tosubmit(){
        this.axios.get(
          "https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762",
          {params:{keyword:this.valueTxt}}
        ).then((rel)=>{
          console.log(rel.data)
          this.dataarry=rel.data

        })
      },
      //点击搜索展示数据跳转
      tofoot(value){
        this.$router.push(
          {path:'/daochuexcel',
            query:{
              latitude:value.latitude,
              longitude:value.longitude,
              names:value.image_path,
              name1:value.address
              }})
      }
    },
    watch:{
      dataarry(){
        if(this.dataarry.length==0){
          this.issearch=false,
          this.issearch1=true
        }else{
          this.issearch=true,
            this.issearch1=false
        }


      }
    }
  }
</script>

<style scoped lang="less">
  .van-nav-bar__title{
    color: white;
    font-weight:700;
    font-size: 0.18rem;
  }
  .van-nav-bar{
    background: #3190e8;

  }
  .van-icon {
    color: white;
    font-size: 0.25rem;
    margin-left: -100%;
  }
  .inputs{
    width: 100%;
    background: white;
    /*line-height: 0.5rem;*/
    height: 0.5rem;
  }
  .inputs input{
    background: #f2f2f2;
    display: inline-block;
    height: 70%;
    margin:0.07rem 0 0.1rem 0.1rem;
    width: 2.65rem;
    border-radius: 5px;
    padding-left: 5px;
  }
  .submit{
    display: inline-block;
    background: #3190e8;
    width: 0.77rem;
    height: 0.3156rem;
    transform: translateY(-0.08rem);
    text-align: center;
    color: white;
    border-radius: 5px;
  }
  .s1{
    display: inline-block;
    transform: translateY(8px);
    font-weight:700;

  }
  .header{
    line-height: 0.4667rem;
    margin-left: 0.1rem;
    font-weight:700;
    font-size: 0.1406rem;
  }
  .datal1{
    width: 100%;
    height:100px;
    background: white;
    padding:10;
  }
  .imgd1{
    height: 100%;
  }
  img{
    width: 39px;
  }
  .contentright{
    font-size: 0.1289rem;
    width: 80%;
    margin-left: 0.1rem;
    border-bottom: 1px solid #e4e4e4;
  }
  .p1{
    line-height: 0.25rem;
  }
  .datal1{
    border-bottom: 1px solid #e4e4e4;
  }
  .unfound{
    width: 100%;
    background: white;
    line-height: 0.4rem;
    text-align: center;
    margin-top: 0.05rem;
  }
</style>
