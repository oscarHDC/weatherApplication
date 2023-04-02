<template>
  <div class="results__container">
    <searchResult v-for="city in cities" :city="city" :key="city" />
  </div>
</template>

<script lang="ts">
import searchResult from '@/components/searchResult.vue'
export default{
  name: 'searchResults',
  components: {searchResult},
  props: {
    cities: [] as Array<any>
  }
}
</script>

<style lang="scss" scoped>
  .results__container{
    max-width: 800px;
    height: 100px;
  }
</style>