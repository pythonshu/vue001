<template>
    <div id="vue001">
      <input type="text" placeholder="输入学校，商务楼，地址" v-model="aa">
      <button type="info" class="van_buttonShi" @click="ssdz">提交</button>
      <ul>
        <li v-for="(date,value) in aaArr">{{date.name}}
          <p>{{date.address}}</p>
        </li>

      </ul>

<button type="info" @click="kuayu">解決跨域</button>
    </div>
</template>

<script>
  import Vue from "vue";
    export default {
      name: "vue001",
      data() {
        return {
          aa: '',
          aaArr: []
        }
      },
      methods: {
        ssdz() {
          Vue.axios.get("https://elm.cangdu.org/v1/pois", {
            params: {
              keyword: this.aa,
            }
          }).then((data) => {
            console.log(data.data);
            this.aaArr = data.data;
            if (this.aaArr.length >= 1) {
              this.xians = true
            }
          }).catch((err) => {

            console.log(err);
          });
        },
        kuayu() {
          this.$axios.get('/?').then(response => {
            if (response.data) {
              // console.log(response.data)
              this.$router.push('/vue005')
            }
          }).catch(err => {
            alert('请求失败')
          })
        }
      }
    }
</script>

<style scoped lang="less">
li{
  width:100%;
  height:50px;
  border:1px solid rgba(0,0,0,0);
  p{
    width:100%;
    height:20px;
    background:pink;
  }
}
input{
  width:200px;
  height:70px;
  border:2px solid rgba(0,0,0,0.1);
display:inline-block;

}

button{
  width:200px;
  height:70px;
  border:1px;
  border-radius:13px;
  background:green;

}
</style>
