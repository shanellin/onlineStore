<template>
  <div class="about">
    <h1>This is an client page</h1>
    <button type="button" class="btn btn-primary ml-1" @click="RouterGo()">
      返回上一頁
    </button>
    <router-link class="ml-1" :to="{name: 'about', params: {verb: 'said'}, query: {author: 'ShaneLin'}}">前往about頁面(傳參)</router-link>
  </div>
</template>

<script type="text/javascript">
  export default{
    methods: {
      RouterGo(){
        this.$router.go(-1);
      },
      goAbout(){
        this.$router.push({name: 'about', params: {verb: 'said'}});
      }
    }
  }
</script>
