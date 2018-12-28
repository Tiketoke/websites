<template>
  <div>
    <home-header></home-header>
    <home-content :descrs="texts" ></home-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import  HomeHeader from './Header';
  import  HomeContent from './BContent';
  import  HomeFooter from './Footer';
  import  axios from 'axios';
 import  {mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      texts:{},
    }
  },
  components:{
    HomeHeader,
    HomeContent,
    HomeFooter
  },
  methods: {

    getDetailInfo () {
      axios.get('/api/index/show', {
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data;
      if(res.status == 1){
        const data = res.msg;
        this.texts=data.config;
        console.log(this.texts)
      }
    }
  },
  computed:{
    ...mapGetters([
      'setMsg'
    ])
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
