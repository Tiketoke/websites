<template>
  <div class="container-fluid box" style="padding-left: 0px; padding-right: 0px;">
    <div class="" id="ids" style="padding: 0px; position: relative;">
        <div class="bot container-fluid" style="padding: 0px;">
          <div class="line"></div>
          <div class="footer" style="background: rgb(15, 19, 44);">
            <div class="container1">
                <div class="footer-top">
                  <div class="left1">
                    <h4>
                      <img  alt="" :src="descrs.site_logo">
                    </h4>
                  </div>
                  <div class="lines">
                    <span></span>
                  </div>
                  <div class="fot">
                      <div class="about">
                        <div>
                          <ul class="list-unstyled">
                            <li>
                              <router-link tag="a" to="/legal" v-if="setMsg == 'cn'" >法律</router-link>
                              <router-link tag="a" to="/legal" v-else >Law</router-link>
                            </li>
                            <li>
                              <router-link tag="a" to="/privacy" v-if="setMsg == 'cn'" >隐私</router-link>
                              <router-link tag="a" to="/privacy" v-else >Privacy</router-link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul class="list-unstyled">
                            <li>
                              <a href="#" @click="jump()" v-if="setMsg == 'cn'">
                                新闻
                              </a>
                              <a href="#" @click="jump()" v-else>
                                News
                              </a>
                            </li>
                            <li>
                              <a href="#" @click="jump2()" v-if="setMsg == 'cn'">
                                关于
                              </a>
                              <a href="#" @click="jump2()" v-else>
                                About
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul class="list-unstyled">
                            <li>
                              <a href="#" @click="jump3()"  v-if="setMsg == 'cn'">
                                联系
                              </a>
                              <a href="#" @click="jump3()" v-else>
                                contact
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    <div class="row footer-bottom container-fluid" style="padding-left: 0px; padding-right: 0px; background: rgb(17, 31, 56);">
      <ul class="list-inline text-center">
        <li class="" style="color: rgb(242, 244, 255);">Copyright © 2018 Qiji.com. All Rights Reserved. </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import * as $ from 'jquery'
  import axios from 'axios'
  import {mapGetters} from 'vuex'
    export default {
      name: "Footer",
      data(){
          return {
            logos:'',
            descrs:{}
          }
      },
      methods:{
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
          let total = $('#amao1').offset().top;
          total=Number(total-130);
          $("html,body").animate({ scrollTop: total }, 1000)
        },
        jump3 () {
// 获取需要滚动的距离
          let total = $('#mao3').offset().top;
          total=Number(total);
          // $(window).animate({
          //
          // })
          $("html,body").animate({ scrollTop: total }, 1000)
        },
        getDetailInfo () {
          axios.get('/api/index/show', {
          }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
          res = res.data;

          if(res.status == 1){
            const data = res.msg;
            this.descrs=data.config;

          }
        },
      },
      computed:{
        ...mapGetters([
          'setMsg'
        ])
      },
      mounted () {
        this.getDetailInfo();

      },
    }
</script>

<style lang="stylus" scoped>
  .footer {
    padding: 0 20px;
    box-sizing: border-box;
    margin: 0 auto;
    height: 185px;
    min-width: 320px;
  }
  .footer .container1 {
    width: 100%;
    height: 185px;
  }
  .footer .container1 .footer-top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 185px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .footer .container1 .left1 h4 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
  }
  .footer .container1 .list-unstyled li{
    margin-bottom: 20px;
  }
  .footer .container1 .list-unstyled{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 55px;
  }
  .footer .container1 .lines{
    height: 185px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .footer .container1 .left1 h4 img{
    width: 85px;
    margin-top: -13px;
  }
  .footer .container1 .about, .footer .container1 .fot{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .footer .container1 .about div{
    margin-top: -39px;
    margin-right: 30px;
  }
  .footer .container1 .list-unstyled a {
    font-size: 13px;
    color: #fff;
    font-weight: 300;
    text-decoration: underline;
  }
  .footer .container1 .lines span {
    width: 1px;
    height: 71px;
    opacity: .5;
    background-color: #888;
    display: inline-block;
  }
  .footer .container1 .left1{
    margin-right: 30px;
  }
  .footer .container1 .fot{
    margin-left: 30px;
  }
  .bot .line{
    width: 100%;
    height: 2px;
    background: #182129;
  }
  .footer-bottom{
    height: 58px;
    background: #f7f8fa;
  }
  .row {
    margin: 0;
  }
  .footer-bottom ul{
    height: 58px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .footer-bottom ul li {
    font-size: 13px;
    text-align: center;
    color: #888;
    font-weight: 300;
  }
  .list-inline {
    margin-left: -5px;
  }
  .list-inline>li {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
  }
  @media (max-width: 914px) and (min-width: 800px){



  }
  @media (min-width: 1200px){
    .footer .container1 .list-unstyled a{
      font-size: 17px;
    }
  }
  @media (min-width: 915px){
    .footer .container1 .list-unstyled a {
      font-size: 17px;
    }
  }


</style>
