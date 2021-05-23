<template>
    <div class="daochuexcel">
      <!--<div class="a">-->
        <!--<div class="a1">a1</div>-->
        <!--<div>a1</div>-->
      <!--</div>-->
      <div class="a3">{{name1}}</div>
      <div class="a2">{{location.lat}}</div>
      <div class="a2">{{location.lng}}</div>
      <img class="a1" :src="'//elm.cangdu.org/img/'+names" alt="">
      <div class="map">
        <!--<el-input v-model="addressKeyword" placeholder="请输入地址来直接查找相关位置"></el-input>-->

        <baidu-map
          class="a"
          :scroll-wheel-zoom="true"
          :center="location"
          :zoom="zoom"

          @click="getLocationPoint"
          ak="NcbiRo0S36DaYTWhyQ6zpRKlfPc2w9s1"
        >
        </baidu-map>
      </div>

    </div>
</template>

<script>
  import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
  import BmView from 'vue-baidu-map/components/map/MapView.vue'
  import BmLocalSearch from 'vue-baidu-map/components/search/LocalSearch.vue'

    export default {
    components: {
      BaiduMap,
      BmView,
      BmLocalSearch

      },
        name: "daochuexcel",
      data(){
          return{

            location: {
              lng:'',
              lat:''
            },
            zoom: 12.8,
            // addressKeyword: "",
            names:'',
            name1:'',
          }
      },
      mounted(){
        this.location.lat = this.$route.query.latitude,
          this.location.lng= this.$route.query.longitude,

          this.names= this.$route.query. names,
          this.name1= this.$route.query. name1

      },
      methods: {

        getLocationPoint(e) {
          this.lng = e.point.lng;
          this.lat = e.point.lat
          // let geoCoder = new BMap.Geocoder();
          // geoCoder.getPoint(this.addressKeyword, point => {
          //   this.selectedLng = point.lng;
          //   this.selectedLat = point.lat;
          // });
          // geocoder.getLocation(e.point, res=>{
          //     console.log(res);
          //   }
          // )}
        },
      }
    }
</script>

<style scoped lang="less">
.a {

  width: 500px;
  height: 300px;

  border: 1px solid black;
}
.a3{
  width:100%;
  height:30px;
  /*background:black;*/
  font-size:20px;border:1px solid black;
}
  .a1{

    width:50px;

    height:50px;
    /*background:black;*/
    color:red;
    font-size:20px;border:1px solid black;


}
</style>
