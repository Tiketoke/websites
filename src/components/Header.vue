<template>
  <div class="header">
    <div class="navbar-fixed-top">
      <div class="pic">
        <router-link to="/" tag="a">
          <img :src="imgUrl" alt="">
        </router-link>
      </div>
      <div class="nav_left">
        <div class="nav_left1">
          <a herf="" class="spn1" @click="jump()">最新动态</a>
          <a herf=""  class="spn1" @click="jump2()">联系我们</a>

          <li>
            <router-link to="/index">{{ $t("message.index") }}</router-link>
          </li>
          <el-dropdown>
            <span class="el-dropdown-link spn2">
                <img src="../assets/images/quan.png" alt="" style="width: 18px; display: inline-block;">
            </span>
            <el-dropdown-menu slot="dropdown" class="lists">
              <el-dropdown-item @click="changeLang(cn)"><img src="../assets/images/cn.png" alt="" style="width: 24px; height: 24px; border-radius: 50%; margin-right: 8px;">简体中文</el-dropdown-item>
              <el-dropdown-item @click="changeLang(en)"><img src="../assets/images/en.png" alt="" style="width: 24px; height: 24px; border-radius: 50%; margin-right: 8px;">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import * as $ from 'jquery'
  import Vue from 'vue';
    export default {
        name: "Header",
      data(){
          return{
            imgUrl:'',
            hidd:'false',
            locale: 'cn',
            lang:'ENG'
          }
      },
      methods: {
        selectStyle(){
          var _this=this;
          this.$nextTick(function () {
            _this.hidd =true;
          });
        },
        outStyle(){
          var _this=this;
          _this.hidd =false;
        },
        getDetailInfo () {
          axios.get('/api/detail.json', {

          }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
          res = res.data;
          if(res.ret && res.data){
            const data = res.data;
            this.imgUrl = data.logo;
          }
        },
        jump () {
// 获取需要滚动的距离
          let total = $('#mao2').offset().top;
          total=Number(total-80);
           // $(window).animate({
           //
           // })
          $("html,body").animate({ scrollTop: total }, 1000)
        },
        jump2 () {
// 获取需要滚动的距离
          let total = $('#mao3').offset().top;
          $("html,body").animate({ scrollTop: total }, 1000)
        },
        changeLang () {
          // 增加传入语言
          if(this.locale=='cn'){
            this.lang='ENG';
            this.locale='en';
          }else{
            this.lang='中文';
            this.locale='cn';
          }
          this.$cookie.set('lng', this.locale=='cn'?'0':'1', 1);
          window.location.reload();//进行刷新改变cookie里的值
        }
      },
      mounted () {
        this.getDetailInfo();
        if(this.$cookie.get('lng')=='0'){
          this.locale='cn';
          this.lang='ENG';
        }else{
          this.locale='en';
          this.lang='中文';
        }
        this.$cookie.set('lng', this.locale=='cn'?'0':'1', 1);
      },
      watch: {
        locale (val) {
          this.$i18n.locale = val;
          console.log("locale",val);
        }
      }

    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'

  .navbar-fixed-top{
    background: #0f132c;
    border-color: #0f132c;
    height: 90px;
  }
  .popper__arrow,.popper__arrow:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    top: -10px;
    border-left:10px solid transparent;
    border-right:10px solid transparent;
    border-bottom:10px solid #fff;
  }
    .pic{
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      width: 100%;
      height: 90px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  .pic img{
    width: 120px;
    display :block
  }
  .nav_left{
    height: 90px;
    position: absolute;
    right: 70px;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .nav_left .nav_left1 .spn1 {
    font-weight: 300;
    letter-spacing: 0;
    color: #f2f4ff;
    opacity: .8;
  }
  .el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
  }
  .navbar-fixed-top {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    border-width: 0 0 1px;
    z-index: 1030;
  }
  @media (min-width: 1200px){
    .nav_left .nav_left1 .spn1 {
      margin-right: 35px;
      font-size: 16px;
    }
  }

  @media (max-width: 1074px) and (min-width: 992px){
    .nav_left .nav_left1 .spn1{
      margin-right: 35px;
      font-size: 16px;
    }
  }
  @media (max-width: 991px) and (min-width: 915px){
    .nav_left .nav_left1 .spn1 {
      margin-right: 25px;
      font-size: 16px;
    }
  }
  @media (max-width: 914px) and (min-width: 800px){
    .nav_left .nav_left1 .spn1{
      margin-right: 15px;
      font-size: 16px;
    }
  }
  @media (max-width: 799px){
   .nav_left .nav_left1 .spn1 {
      margin-right: 10px;
      font-size: 12px;
    }
  }


</style>
