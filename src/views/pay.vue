<template>
  <div class="about">
    <h1>This is an pay page</h1>
    <button type="button" class="btn btn-primary ml-1" @click="RouterGo()">
      返回上一頁
    </button>
  </div>
</template>

<script type="text/javascript">
  export default{
    methods: {
      RouterGo(){
        this.$router.go(-1);
      }
    }
  }
</script>
