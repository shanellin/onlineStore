<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="#" class="navbar-brand router-link-exact-active router-link-active">
        <i class="fab fa-vuejs text-info"></i> 就是要購物
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active" v-for="(item, index) in navBarList" :key="index">
            <a class="nav-link" href="#"><router-link :to="item.link">{{item.name}}</router-link></a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-end">
      <div class="container">
        <div class="p-3 bg-lighter">
          <h1 class="display-3 font-weight-bold">永遠只挑最好的</h1>
        </div>
      </div>
    </div>
    <router-view/>
    <footer class="bg-light text-muted py-5">
      <div class="container">
        <ul class="list-inline text-center">
          <li class="list-inline-item">© Copright 2019 ShaneLin</li>
          <li class="list-inline-item"><a class="text-info"><i class="fab fa fa-instagram"></i> Instagrame</a></li>
          <li class="list-inline-item"><a class="text-info"><i class="fab fa fa-facebook-square"></i> Facebook</a></li>
          <li class="list-inline-item"><a class="text-info"><i class="text-info"></i> About</a></li>
        </ul>
        <p class="text-center">vue practice</p>
      </div>
    </footer>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  export default {
    name: 'App',
    data: function () {
      return {
        navBarList: [{name:'Market', link:'/'}, {name:'client', link:'/client'}, {name:'pay', link:'/pay'}, {name:'About', link:'/about'}]
      }
    },
    computed: {
      ...mapGetters(['isLoading'])
    },
    methods: {
      // 含參數的 funtion 必須使用 dispatch 的方式才能夠正確傳入參數
      // removeCart(id) {
      //   this.$store.dispatch('removeCart', id);
      // },
      // 展開並取用 actions
      //...mapActions(['getCart']),
    },
    created() {
      //this.getCart();
    },
    components: {
      //Home,
    },
  };
</script>
<style lang="sass">
@import url("~@fortawesome/fontawesome-free/css/all.css")
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:300&display=swap')
.jumbotron
  h1
    border-radius: 10px
    background: rgba(152, 152, 152, 0.66)
    color: white
.jumbotron-bg
  background: url('https://images.unsplash.com/photo-1477901492169-d59e6428fc90?w=1350')
  background-size: cover
  background-position: center center
  min-height: 400px
.text-info
  color: #17a2b8!important
.fab
  font-family: Font Awesome\ 5 Brands
.list-inline-item
  display: inline-block
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #17a2b8!important
</style>
