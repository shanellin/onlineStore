<template>
  <div class="d-flex mb-4">
    <form class="form-inline my-3 my-lg-0">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="搜尋" name="" :value="searchInput">
      </div>
      <div class="input-group-append">
        <button type="button" class="btn btn-outline-secondary" name="button" @click="cancel">
          <i class="fa fa-times"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MarketSearch',
  props: {
    selectorValue: String
  },
  data:function(){
    return {
      searchInput: ''
    }
  },
  watch: {
    selectorValue: function () {
      this.searchInput = this.selectorValue;
    }
  },
  methods: {
    cancel(){
      this.searchInput = '';
      this.$emit('SearchValue', 'cancel');
    }
  }
}
</script>

<style lang="sass" scoped>
  form
    flex-wrap: nowrap !important
</style>
