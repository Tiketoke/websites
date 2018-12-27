<template>
  <div>
    <home-header></home-header>
    <div class="container-fluid box" style="padding-right: 0px; padding-left: 0px; background: rgb(15, 19, 44);margin-top: 90px;">
      <div class="container">
        <div class="tit">LEGAL DISCLAIMER</div>
        <div class="con">
          <div class="item">
            <p class="p1">1. Information published on Qiji.com</p>
            <p class="p2">
              The website https://Qiji.com/ (hereinafter, referred to as the "Website") provides information and material of a general nature. You are not authorized and nor should you rely on the Website for legal advice, business advice, or advice of any kind. You act at your own risk in reliance on the contents of the Website. Should you make a decision to act or not act you should contact a licensed attorney in the relevant jurisdiction in which you want or need help. In no way are the owners of, or contributors to, the Website responsible for the actions, decisions, or other behavior taken or not taken by you in reliance upon the Website.
            </p>
          </div>
          <div class="item">
            <p class="p1">2. Information published on Qiji.com</p>
            <p class="p2">
              The website https://Qiji.com/ (hereinafter, referred to as the "Website") provides information and material of a general nature. You are not authorized and nor should you rely on the Website for legal advice, business advice, or advice of any kind. You act at your own risk in reliance on the contents of the Website. Should you make a decision to act or not act you should contact a licensed attorney in the relevant jurisdiction in which you want or need help. In no way are the owners of, or contributors to, the Website responsible for the actions, decisions, or other behavior taken or not taken by you in reliance upon the Website.
            </p>
          </div>
          <div class="item">
            <p class="p1">3. Information published on Qiji.com</p>
            <p class="p2">
              The website https://Qiji.com/ (hereinafter, referred to as the "Website") provides information and material of a general nature. You are not authorized and nor should you rely on the Website for legal advice, business advice, or advice of any kind. You act at your own risk in reliance on the contents of the Website. Should you make a decision to act or not act you should contact a licensed attorney in the relevant jurisdiction in which you want or need help. In no way are the owners of, or contributors to, the Website responsible for the actions, decisions, or other behavior taken or not taken by you in reliance upon the Website.
            </p>
          </div>
        </div>
      </div>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import  HomeHeader from './Header';
  import  HomeFooter from './Footer';
  export default {
    name: "privacy",
    components:{
      HomeHeader,

      HomeFooter
    }
  }
</script>

<style lang="stylus" scoped>
  .container-fluid {
    margin-right: auto;
    margin-left: auto;
  }
  .tit{
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    width: 100%;
    margin-top: 50px;
  }
  .con{
    margin-top: 40px;
    margin-bottom: 85px;
  }
  .con .item {
    margin-bottom: 40px;
  }
  .con .item .p1{
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    line-height: 30px;
  }
  .con .item .p2{
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    line-height: 30px;
    opacity: .8;
  }
  .container {
    overflow hidden;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px){
    .container {
      width: 750px;
    }
  }

</style>
