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
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 3rem;
    
    &:last-child{
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }
</style>