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
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    position: absolute;
    top: 3rem;
  }
</style>