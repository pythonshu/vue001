<template>
    <div class="vue005">

      <button @click="baoc">保存</button>
      <button @click="diao">调取</button>
      <h1>{{kss}}</h1>
      <ul>
        <li class="left" v-for="(value,index) in namearry" :key="index">
        <!--<li v-for="(v,index) in names" :key="index">-->
          <p>{{value.name}}</p>
        </li>
        <!--</li>-->
      </ul>

      <input type="file"
             @change="importf(this)"
             accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
    </div>
</template>
<script>

  import Vue from "vue";
    export default {
        name: "vue005",
      data(){
          return{
          ssl:'无房户就饿返回',
            kss:'',
            namearry:[],
            names:[1,2,3,4,5,6,7,8]
        }
      },
      methods:{
          baoc(){
          this.$store.commit('bc',this.ssl)
        },
        diao(){
          this.kss=this.$store.state.ssk;
        },
        // excel表上传
        importf(obj) {

          let _this = this;

          let inputDOM = this.$refs.inputer;   // 通过DOM取文件数据

          this.file = event.currentTarget.files[0];

          var rABS = false; //是否将文件读取为二进制字符串

          var f = this.file;

          var reader = new FileReader();

          //if (!FileReader.prototype.readAsBinaryString) {

          FileReader.prototype.readAsBinaryString = function(f) {

            var binary = "";

            var rABS = false; //是否将文件读取为二进制字符串

            var pt = this;

            var wb; //读取完成的数据

            var outdata;

            var reader = new FileReader();

            reader.onload = function(e) {

              var bytes = new Uint8Array(reader.result);

              var length = bytes.byteLength;

              for(var i = 0; i < length; i++) {

                binary += String.fromCharCode(bytes[i]);

              }

              var XLSX = require('xlsx');

              if(rABS) {

                wb = XLSX.read(btoa(fixdata(binary)), { //手动转化

                  type: 'base64'

                });

              } else {

                wb = XLSX.read(binary, {

                  type: 'binary'

                });

              }

              // outdata就是你想要的东西 excel导入的数据

              outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);

              // excel 数据再处理

              let arr = []

              outdata.map(v => {

                let obj = {}

                obj.account = v.登录账号

                obj.name = v.姓名

                obj.department = v.部门

                obj.secondDepartment = v.二级部门

                obj.status = v.状态

                obj.id = v.id

                arr.push(obj)

              })

              _this.accountList = [...arr];

              console.log( _this.accountList);
                _this.namearry=_this.accountList;

                console.log(_this.namearry);
              // _this.reload();
              // return

            }

            reader.readAsArrayBuffer(f);

          }

          if(rABS) {

            reader.readAsArrayBuffer(f);

          } else {

            reader.readAsBinaryString(f);

          }



        }

      },

    }
</script>
<style scoped lang="less">
  .left{
    width:100px;
    height:15px;
    p{
      line-height:10px;

    }
  }
</style>
