<template>
  <div class="head">
    <nav class="navbar" style="background-color: cornflowerblue">
      <router-link :to="{path:'/daochuexcel'}">
        <p  class="pull-right">登录/注册</p></router-link>
      <p class="pull-left navbar-text">ele.me</p>

    </nav>
    <nav class="navbar">
      <p  class="pull-left navbar-text" style="font-size: 20px;color: blue">当前定位城市</p>
      <p  class="pull-right navbar-text" style="font-size: 20px">定位可能不准确</p>
    </nav>
    <hr>
    <p  class="pull-left navbar-text" style="font-size: 20px;color: blue">
      <router-link :to="{path:'/child1',query:{name:jsonArr}}">{{arr.name}}</router-link> </p>
    <hr>
    <hr>
    <p  class="pull-left navbar-text" style="font-size: 20px">热门城市</p>
    <br>
    <el-row>
      <el-col v-for="v in array" :span="6" :key="v.id">
        <td>  <router-link :to="{path:'/child1',query:{name1:v,}}">{{v.name}}</router-link> </td>
      </el-col>
    </el-row>


    <div class="left" v-for="(value,key,index) in arrays" :key="index">
      <br>
      <p class="active">{{key}}</p>
      <br>
      <ul>
        <li v-for="(v,index) in value" :key="index">
          <router-link :to="{path:'/child1',query:{name2:v,}}">{{v.name}}</router-link>
        </li>
        <br>
      </ul>

    </div>
  </div>
</template>

<script>
  // import Vue1 from "../components/js";
  import Vue from "vue";
  export default {
    name: "vue003",
    data(){
      return {
        arr:{},
        array:[],
        arrays:{},
      }
    },
    computed:{
      jsonArr(){
        return JSON.stringify(this.arr)
      },
    },
    methods:{
      sortByKey(obj) {
        const newkey = Object.keys(obj).sort();
        var newObj = {};
        for (var i = 0; i < newkey.length; i++) {
          newObj[newkey[i]]=obj[newkey[i]];
        }
        return newObj;
      }
    },
    mounted(){
      let _this=this;
      Vue.axios.get("https://elm.cangdu.org/v1/cities",{params:{type:'guess'}
      }).then(function (reslut) {
        console.log(reslut.data);
        _this.arr=reslut.data;
      })
      Vue.axios.get("https://elm.cangdu.org/v1/cities",{params:{type:'hot'}
      }).then(function (reslutsed) {
        console.log(reslutsed.data);
        _this.array=reslutsed.data;
      })
      Vue.axios.get("https://elm.cangdu.org/v1/cities",{params:{type:'group'}
      }).then(function (reslutss) {
        console.log(reslutss.data);
        _this.arrays=reslutss.data;
        _this.arrays=_this.sortByKey(_this.arrays);
      })

    }
  }
</script>

<style scoped>
  .navbar{
    width: 100%;
    height: 10%;
    top: 0;
    left: 0;
  }
  ul{
    /*position: absolute;*/
    list-style: none;
    width: 100%;
    margin: 0;
    padding:0;
  }
  li{
    float: left;
    width: 24.7%;
    border: 1px solid black;
    text-align: center;
    color: blue;
  }
  .pull-right{
    position: absolute;
    right: 0;
    /*top: 0;*/
  }
</style>
