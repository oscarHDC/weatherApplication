<template>
    <div class="results__container">
      <searchResult v-for="city in cities" :city="city" :key="city" @click="a(city)" />
    </div>
</template>

<script lang="ts">
import searchResult from '@/components/searchResult.vue'
import { City } from '@/shared/types/common'

export default{
  name: 'searchResults',

  components: {searchResult},

  props: {
    cities: [] as Array<any>
  },

  data(){
    return{
      city: {
        name: String,
        lat: Number,
        lon: Number
      }
    }
  },

  methods: {
    a(c: any){
      this.city.name = c.name
      this.city.lat = c.lat
      this.city.lon = c.lon
      
    }
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
    top: 3.4rem;
    
    &:last-child{
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }
</style>