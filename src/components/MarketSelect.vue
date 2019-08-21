<template>
  <div class="list-group sticky-top">
    <a href="#" class="list-group-item list-group-item-action"  @click.prevent="searchText = item.name" :class="{ 'active': (item.name === searchText) || (searchText == '' && item.name == '全部顯示')}" v-for="(item, index) in selectList">
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

  }
}
</script>

<style lang="sass" scoped>
</style>
