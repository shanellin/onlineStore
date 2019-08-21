<template>
  <div class="Market">
    <div class="">
      <div class="container main-content mb-3">
        <div class="row">
          <div class="col-md-3">
            <MarketSelect />
          </div>
          <div class="col-md-9">
            <MarketSearch />
            <MarketContent />
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
  }
}
</script>

<style lang="sass" scoped>
  .Market
    z-index: 10
</style>
