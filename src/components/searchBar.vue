<template>
  <h1>Search city by name</h1>
  <input type="search" v-model="searchText" @input="handleSearch()">
  <img src="@/assets/icons/search-outline.svg" alt="">
  <searchResults :cities="cities"/>

</template>

<script lang="ts" >
import searchResults from '@/components/searchResults.vue'
import searchCitiesService from '@/shared/service/searchCitiesService.js'

export default {
  name: 'SearchBar',
  components: {searchResults},

  data() {
    return {
      searchText: '',
      cities: []
    }
  },

  methods: {
    async handleSearch() {
      try{
        if(this.searchText){
          const res = await searchCitiesService.getCity(this.searchText)
          res ? this.cities = res.data : this.cities = []
        }else{
          this.cities = []
        }
      
      }catch(e){
        this.cities = []        
      }

      console.log(this.cities)
      
 
      
      
    }
  }


}


</script>

<style lang="scss"></style>