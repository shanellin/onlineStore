<template>
  <div class="list-group sticky-top selector">
    <a href="#" class="list-group-item list-group-item-action" :key="index"  @click.prevent="choose(item.name)" :class="{ 'active': (item.name === searchText) || (searchText == '' && item.name == '全部顯示')}" v-for="(item, index) in selectList">
      <i :class="item.class">{{item.name}}</i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MarketSelect',
  data: function () {
    return {
      searchText: '',
      selectList: [{name: '外套', class: 'fa fa-street-view'}, {name: '洋裝', class: 'fa fa-street-view'}, {name: '帽', class: 'fa fa-street-view'}, {name: '全部顯示', class: 'fa'}]
    }
  },
  props: {
    searchType: String
  },
  methods: {
    choose(name){
      const that = this;
      that.searchText = name;
      that.$emit('selector', name);
    }
  },
  watch: {
    searchType: function(){
      const that = this;
      if ((that.searchType == '') || (that.searchType == '全部顯示')) {
        that.searchText = '';
        that.$emit('selector', '全部顯示');
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .selector
    z-index: 2
</style>
