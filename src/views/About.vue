<template>
  <div class="about">
    <h1>This is an about page - router practice</h1>
    <h2 class="mt-2">{{ $route.query.author }} {{ $route.params.verb }}</h2>
    <button type="button" class="btn btn-primary ml-1" @click="RouterPush()">
      前往client頁面
    </button>
    <button type="button" class="btn btn-primary ml-1" @click="RouterReplace()">
      跳轉至pay頁面
    </button>
    <button type="button" class="btn btn-primary ml-1" @click="RouterGo()">
      返回上一頁
    </button>
  </div>
</template>

<script type="text/javascript">
  export default{
    data(){
      return {
        items: []
      }
    },
    created(){
      console.log(this.$router.params);
        console.log(this.$router);
      this.$router.options.routes.forEach(route => {
        this.items.push({
          name: route.name, path: route.path
        })
      })
    },
    methods: {
      RouterPush(){
        this.$router.push('/client');
      },
      RouterReplace(){
        this.$router.replace('/pay');
      },
      RouterGo(){
        this.$router.go(-1);
      }
    }
  }
</script>
