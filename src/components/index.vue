<template>
  <div>
    <home-header v-on:childByValue="childByValue" :descrs="texts" :languge="name"></home-header>
    <home-content :descrs="texts" :languge="name"></home-content>
    <home-footer :descrs="texts" :languge="name"></home-footer>
  </div>
</template>

<script>
  import  HomeHeader from './Header';
  import  HomeContent from './BContent';
  import  HomeFooter from './Footer';
  import  axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      name:'cn',
      texts:[],
    }
  },
  components:{
    HomeHeader,
    HomeContent,
    HomeFooter
  },
  methods: {
    childByValue: function (childValue) {
      // childValue就是子组件传过来的值
      this.name = childValue;
    },
    getDetailInfo () {
      axios.get('/api/index/show', {
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data;
      if(res.status == 1){
        const data = res.msg;
        this.texts.push(data.config);
        console.log(this.texts)
      }
    }
  },
  mounted () {
    this.getDetailInfo();
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

</style>
