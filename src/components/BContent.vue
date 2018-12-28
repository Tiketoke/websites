<template>
    <div class="content">
     <section class="sec">
       <div class="ids">
         <div class="large-header">
           <div class="top">
             <img :src="imgsBan" alt="" class="img1">
             <div class="img2">
               <img :src="QQS" alt="">
             </div>
             <div class="mid">
                <p class="p1" v-if="languge == 'cn'">{{descrs[0].site_qq}}</p>
                <p class="p1" v-else>{{descrs[0].site_phone}}</p>
                <p class="p2" v-if="languge == 'cn'">{{descrs[0].site_fax}}</p>
                <p class="p2" v-else>{{descrs[0].site_qqtwo}}</p>
             </div>
           </div>
           <div class="bot container-fluid">
              <div style="padding-left: 0px; padding-right: 0px; margin-top: 80px;" class="item container-fluid" id="amao1">
                <div class="mao1 container">
                    <div class="item_1s">
                      <p class="p1" v-if="languge == 'cn'">
                        奇迹资本区别区传统VC的特点
                      </p>
                      <p class="p1" v-else>
                        Characteristics of Traditional VC in Miracle Capital Distinction Zone
                      </p>
                      <ul v-for="item in characteristic" :id="item.id">
                        <li v-if="languge == 'cn'">
                          <img src="../assets/images/colo-q.png" alt="">
                          {{item.title}}
                        </li>
                        <li v-else>
                          <img src="../assets/images/colo-q.png" alt="">
                          {{item.en_title}}
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
              <div class="item2 container-fluid itmesCavs" style="padding-left: 0px; padding-right: 0px;">
              <div class="" id="particles">
                <vue-particles
                  color="#fff"
                  :particleOpacity="0.7"
                  :particlesNumber="120"
                  shapeType="circle"
                  :particleSize="4"
                  linesColor="#fff"
                  :linesWidth="1"
                  :lineLinked="true"
                  :lineOpacity="0.4"
                  :linesDistance="150"
                  :moveSpeed="2"
                  :hoverEffect="false"
                  hoverMode="false"
                  :clickEffect="true"
                  clickMode="push"
                  class="lizi"
                >
                </vue-particles>
              </div>

                <div class="item2_s container">
                  <div class="item2_s1">
                    <p class="p1" v-if="languge == 'cn'">
                      <img src="../assets/images/xin.png" alt="">
                        是时候，为资本重新赋能啦！
                      <img src="../assets/images/xin.png" alt="">
                    </p>
                    <p class="p1" v-else>
                      <img src="../assets/images/xin.png" alt="">
                      It's time to re-empower capital！
                      <img src="../assets/images/xin.png" alt="">
                    </p>
                    <p class="p2">
                      <img src="../assets/images/mors-xing.png" alt="">
                    </p>
                    <div class="item2_1">
                      <p class="p3" v-if="languge == 'cn'">
                       奇迹资本
                      </p>
                      <p class="p3" v-else>
                        Miracle capital
                      </p>
                      <ul>
                        <li v-for="item in capital" :id="item.id" v-if="languge == 'cn'">
                          <img :src="item.image" alt="">
                          <span>{{item.title}}</span>
                        </li>
                        <li v-for="item in capital" :id="item.id" v-else>
                          <img :src="item.image" alt="">
                          <span>{{item.en_title}}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="item2_1">
                      <p class="p3" v-if="languge == 'cn'">
                        奇迹资本
                      </p>
                      <p class="p3" v-else>
                        Miracle capital
                      </p>
                      <ul >
                        <li v-for="item in capitalLP">
                          <img :src="item.image" alt="">
                          <span>{{item.title}}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="item2_2">
                      <a href="baidu.com" class="p1_1" v-if="languge == 'cn'">
                        <img src="../assets/images/head7.png" alt="" class="pic1">
                        立即成为奇迹资本LP
                      </a>
                      <a href="baidu.com" class="p1_1" v-else>
                        <img src="../assets/images/head7.png" alt="" class="pic1">
                        Become a Wonder Capital LP
                      </a>
                      <p class="p2_1" v-if="languge == 'cn'">
                        联系邮箱 QQ.coms
                      </p>
                      <p class="p2_1" v-else>
                        Contact mailbox QQ.coms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item3 container-fluid"  style="padding-left: 0px; padding-right: 0px;" id="mao2">
                <div class="item3_s container" >
                  <div class="item3_s1">
                      <div class="item2_1">
                        <p class="p3" v-if="languge == 'cn'">奇迹资本投资案例：</p>
                        <p class="p3" v-else>Miracle Capital Investment Case：</p>
                        <ul >
                          <li v-for="(item,index) of casees" :id="item.id">
                            <a href="#">
                              <img :src="item.image" alt="">
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="item2_2" id="mao3">
                          <p class="p2_s" v-if="languge == 'cn'">
                            想要获得奇迹资本的投资？期待我们给予彼此的惊喜！
                          </p>
                        <p class="p2_s" v-else>
                          Want to invest in miracle capital? Expect us to surprise each other!
                        </p>
                        <a href="" class="p1_1" v-if="languge == 'cn'">
                          <img src="../assets/images/book.png" alt="" class="pic_1">
                          提交商业计划书
                        </a>
                        <a href="" class="p1_1" v-else>
                          <img src="../assets/images/book.png" alt="" class="pic_1">
                          Submitting Business Plans
                        </a>
                        <p class="p2_1"  v-if="languge == 'cn'">
                          我们期望为创业者服务,与创业者共同成长,
                          <br>
                          与创业者一起改变世界
                          <img src="../assets/images/see.png" alt="">
                          为社会创造长期价值。
                        </p>
                        <p class="p2_1" v-else>
                          We expect to serve entrepreneurs and grow with them.
                          <br>
                          Change the world with entrepreneurs
                          <img src="../assets/images/see.png" alt="">
                          Create long-term value for society.
                        </p>
                      </div>
                  </div>
                </div>
              </div>
           </div>
         </div>
       </div>
     </section>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "BContent",
      props:{
        descrs:Array,
        languge:String,
      },
      data(){
        return{
          imgsBan:'',
          eleH:'',
          QQS:'',
          characteristic:[],
          casees:[],
          capital:[],
          capitalLP:[],
        }
      },
      methods: {
        getDetailInfo () {
          axios.get('/api/index/show', {
          }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
          res = res.data;
          console.log(res)
          if(res.status == 1){
            const data = res.msg;
            this.imgsBan =data.banner[0].image;
            this.QQS = data.banner2[0].image;
            this.characteristic =data.characteristic;
            this.casees =data.cases;
            this.capital =data.capital;
            this.capitalLP =data.capitalLP;

          }
        }
      },
      mounted () {
        this.getDetailInfo();
      }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  #particles{
    position: absolute;
    width: 200px;
    height: 400px;
    right:0;
    top 50px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
    .lizi{
      width: 100%;
      height: 100%;
    }
  .top .img1 {
    width: 100%;
    background-size: cover;
  }
  .sec{
    background: #0f132c;
    margin-top: 90px;
  }
    .ids{
      padding: 0px;
      position: relative;
      margin-right: auto;
      margin-left: auto;
      width 100%
    }
  .large-header{
    width: 100%;
    min-height: 920px;
    height:auto;
  }
  .sec .top{
    width: 100%;
    position: relative;
    margin-top: 40px;
  }
  .ids:before,.container-fluid:before{
    display: table;
    content: " ";
  }
  .ids:after,.container-fluid:after{
    display: table;
    content: " ";
  }
  .sec .top .img2 {
    width: 100%;
    position: absolute;
    top: 180px;
    left: 0;
    text-align: center;
  }
  .sec .top .img2 img{
    width: 75px;
    -webkit-animation:container  3s infinite;
    animation:container 3s infinite;
    filter: drop-shadow(0 0 2px rgba(255,255,255,.1));
    -webkit-filter: drop-shadow(0 0 2px hsla(0,0%,100%,.1));
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing :border-box;
  }



  .sec .bot {
    width: 100%;
  }
  .sec .top .mid {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .mid .p1 {
    font-size: 28px;
    letter-spacing: 0;
    text-align: center;
    color: #fff;
    font-weight: 300;
    margin-top: 30px;
  }
  .mid .p2 {
    font-size: 20px;
    font-weight: 100;
    letter-spacing: 0;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    opacity: .8;
  }
  .bot .item .p1{
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0;
    color: #f2f4ff;
  }
  .bot .item ul li{
    width: 100%;
    line-height: 30px;
    font-size: 16px;
    letter-spacing: 0;
    color: #f2f4ff;
    font-weight: 300;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 25px;
  }
  .sec .bot .item ul{
    margin-top: 40px;
  }
  .sec .bot .item ul li img {
    width: 15px;
    height: 16px;
    margin-top: 7px;
    margin-right: 10px;
  }
  .sec .bot .item .item_1s{
    padding-bottom: 80px;
  }
  @media (max-width: 991px) and (min-width: 915px){
    .item2 .item2_s .item2_s1, .item .item_s .item_1s{
      margin: 0 40px;
    }
  }
  .sec .bot .item2{
    background url("../assets/images/ban3.png")no-repeat 100% 0;
    background-size: 60% 33%;
    position: relative;
    padding-bottom: 120px;
  }
  .sec .bot .item2 .item2_s1 {
    border-top: 1px dashed #6a7090;
    padding-top: 80px;
  }
  .sec .bot .item2 .p1{
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0;
    color: #f2f4ff;
  }
  .sec .bot .item2 .p1 img{
    width: 21px;
    margin-right: 10px;
  }
  .sec .bot .item2 .p2{
    width: 100%;
    text-align: center;
    margin-top: 14px;
  }
  .sec .bot .item2 .p2 img{
    width: 2px;
  }
  .sec .bot .item2 .item2_1 .p3{
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0;
    color: #f2f4ff;
  }
  .sec .bot .item2 .item2_1 ul{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 40px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .sec .bot .item2 .item2_1 ul li, .sec .bot .item2 .item2_1 ul li a{
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
  }
  .sec .bot .item2 .item2_1 ul li{
    margin-right: 20px;
    margin-bottom: 80px;
  }
  .sec .bot .item2 .item2_1 ul li:nth-child(3n){
    margin-right 0
  }
  .sec .bot .item2 .item2_1 ul li img{
    width: 200px;
  }
  .sec .bot .item2 .item2_1 ul li span{
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0;
    text-align: center;
    color: #f2f4ff;
    margin-top: 10px;
  }
  .sec .bot .item2 .item2_2 {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 40px;
  }
  .sec .bot .item2 .item2_2 .p1_1,.sec .bot .item3 .item2_2 .p1_1{
    width: 640px;
    height: 120px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: url('../assets/images/btn_5.png') no-repeat;
    background-size: 100%;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0;
    color: #fff;
    display block;
  }
    .itmesCavs{
      position:relative;
    }

  .sec .bot .item2 .item2_2 .p1_1 .pic1 {
    margin-right: 14px;
    width: 74px;
  }
  .sec .bot .item3 .item3_s1 .item2_2 .p1_1 .pic_1 {
    margin-right: 14px;
    width: 64px;
  }
  .sec .bot .item2 .item2_2 .p2_1{
    text-align: center;
    font-size: 17px;
    letter-spacing: 0;
    color: #fff;
    margin-top: 20px;
    font-weight: 300;
    opacity: .8;
  }
  .sec .bot .item2 .item2_2 .p1_1, .sec .bot .item3 .item2_2 .p1_1{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .sec .bot .item3 .item3_s1{
    border-top: 1px dashed #6a7090;
    padding-top: 80px;
  }


  .sec .bot .item3 .item2_1 .p3 {
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0;
    color: #f2f4ff;
  }
  .sec .bot .item3 .item2_1 ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 50px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .sec .bot .item3 .item2_1 .p3{
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0;
    color: #f2f4ff;
  }

  .sec .bot .item3 .item2_1 ul li{
    margin-right: 75px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 158px;
    margin-bottom: 60px;
  }
  .sec .bot .item3 .item2_1 ul li img:last-child {
    margin-right: 0;
    margin-bottom: 0;

  }
  .sec .bot .item3 .item2_1 ul li img {
    width: 100%;
  }
  .sec .bot .item3 .item2_2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 40px;
  }
  .sec .bot .item3 .item2_2 .p2_s{
    margin-bottom: 40px;
    text-align: center;
    font-size: 17px;
    letter-spacing: 0;
    color: #fff;
    font-weight: 300;
    opacity: .8;
  }

  .sec .bot .item3 .item2_2 .p2_1{
    line-height: 40px;
    text-align: center;
    font-size: 17px;
    letter-spacing: 0;
    color: #fff;
    margin-top: 50px;
    font-weight: 300;
    opacity: .8;
  }
  .sec .bot .item3 .item2_2 .p2_1 img{
    width: 25px;
    margin: 0 10px;
  }
  .sec .bot .item3 {
    background: url(../assets/images/ban54.png) no-repeat 0 100%;
    background-size: 21% 47%;
    position: relative;
    margin-bottom: 100px;
  }

  @media (max-width: 649px) and (min-width: 520px){
    .sec .top {
      margin-top: 140px;
    }
    .sec .top .img1 {
      top: 34px;
    }
  }
  @media (max-width: 991px) and (min-width: 915px){
    .sec .top .img2{
      top: 37%;
    }
    .item3 .item3_s .item3_s1{
      margin: 0 40px;
    }
    .item3 .item3_s .item3_s1 .item2_1 ul li:nth-child(3n) {
      margin-right: 0!important;
    }
  }


  @media (min-width: 992px){
    .container {
      width: 970px;
    }
  }
  @media (max-width: 914px) and (min-width: 800px){
    .item2 .item2_s .item2_s1, .item .item_s .item_1s{
      margin: 0 40px;
    }
  }

  @media (min-width: 768px){
    .container {
      width: 750px;
    }
  }
  @media (max-width: 799px) and (min-width: 749px){
    .item2 .item2_s .item2_s1, .item .item_s .item_1s {
      margin: 0 32px;
    }
  }

  @media (max-width: 742px) and (min-width: 650px){
    .sec .bot .item2 .item2_s1,.sec .bot .item .item_1s{
      margin: 0 107px;
    }
    .item3 .item3_s .item3_s1 .item2_1 ul li:nth-child(2n){
      margin-right: 0!important;
    }
  }
  @media (max-width: 649px) and (min-width: 520px){
    .sec .bot .item2 .item2_s1,.sec .bot .item .item_1s{
      margin: 0 42px;
     }

  }


</style>
