<template>
  <div class="tab-pane">
    <div class="row align-items-stretch">
      <div class="col-md-4 mb-4" v-for="(item, index) in clothList" :key="index" v-show="(selectorValue == '') || (item.category == selectorValue)">
        <div class="card box-shadow text-center h-100">
          <img class="card-img-top" :src="item.imageUrl" :alt="item.description">
          <div class="card-body">
            <h4 class="card-title">{{item.title}}</h4>
            <p class="card-text text-left">{{item.content}}</p>
          </div>
          <div class="card-footer border-top-0 bg-white">
            <button type="button" name="button" class="btn btn-outline-secondary btn-block btn-sm" @click="addCar">
              <i class="fa fa-cart-plus">加到購物車</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'MarketContent',
  data: function(){
    return {
    }
  },
  props: {
    selectorValue: String
  },
  computed: {
    ...mapState(['clothList'])
  },
  methods: {
    addCar(){
      this.$emit('addCar', true);
    }
  },
  mounted(){
    const that = this;
    that.$store.dispatch('GetAPI', {url: 'https://vue-course-api.hexschool.io/api/CASPERPATH/products/all'}).then((res) => {
      that.$store.commit('SetCloth', res.products);
    })
  }
}
</script>

<style lang="sass" scoped>
</style>
