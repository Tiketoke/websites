<template>
  <div>
    <home-header></home-header>
    <home-content></home-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import  HomeHeader from './Header';
  import  HomeContent from './BContent';
  import  HomeFooter from './Footer';
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components:{
    HomeHeader,
    HomeContent,
    HomeFooter
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
