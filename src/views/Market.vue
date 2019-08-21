<template>
  <div class="Market">
    <div class="">
      <div class="container main-content mb-3">
        <div class="row">
          <div class="col-md-3">
            <MarketSelect @selector="selector" :searchType="searchType" />
          </div>
          <div class="col-md-9">
            <MarketSearch :selectorValue="selectorValue" @SearchValue="SearchValue" />
            <MarketContent :selectorValue="selectorValue" @addCar="addCar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MarketSelect from '@/components/MarketSelect.vue'
import MarketSearch from '@/components/MarketSearch.vue'
import MarketContent from '@/components/MarketContent.vue'

export default {
  name: 'Market',
  components: {
    MarketSelect,
    MarketSearch,
    MarketContent
  },
  data:function(){
    return {
      selectorValue: '',
      searchType: ''
    }
  },
  methods:{
    selector(name){
      const that = this;
      if (name == '全部顯示') {
        that.selectorValue = '';
      } else {
        that.selectorValue = name;
      }
    },
    SearchValue(type){
      const that = this;
      switch (type) {
        case 'cancel':
          that.searchType == '' ? that.searchType = '全部顯示' : that.searchType = '';
          break;
      }
    },
    addCar(add){
      const that = this;
      add ? that.$emit('addCar', true) : null;
    }
  }
}
</script>

<style lang="sass" scoped>
  .Market
    z-index: 10
</style>
