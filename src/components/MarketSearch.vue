<template>
  <div class="d-flex mb-4">
    <form class="form-inline my-3 my-lg-0">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="搜尋" name="" value="">
      </div>
      <div class="input-group-append">
        <button type="button" class="btn btn-outline-secondary" name="button">
          <i class="fa fa-times"></i>
        </button>
      </div>
    </form>
    <button type="button" class="btn btn-outline-primary ml-auto" name="button">重新取得資料</button>
  </div>
</template>

<script>
export default {
  name: 'MarketSearch',
  props: {

  }
}
</script>

<style lang="sass" scoped>
</style>
