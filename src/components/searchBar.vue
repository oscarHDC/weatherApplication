<template>
  <h1>Search city by name</h1>
  <AppIcon :icon="bgImg" />
  <input type="search" v-model="searchText" @input="handleSearch()">
  <searchResults :cities="cities"/>

</template>

<script lang="ts" >
import searchResults from '@/components/searchResults.vue'
import searchCitiesService from '@/shared/service/searchCitiesService.js'
import imgURL from '@/assets/icons/searchIcon.svg'
import AppIcon from './AppIcon.vue'

export default {
  name: 'SearchBar',
  components: { searchResults, AppIcon },
  data() {
    return {
      searchText: '',
      cities: [],
      bgImg: imgURL
    }
  },

  methods: {
    async handleSearch() {
      try{
        if(this.searchText){
          console.log(typeof this.bgImg)
          
          const res = await searchCitiesService.getCity(this.searchText)
          res ? this.cities = res.data : this.cities = []
        }else{
          this.cities = []
        }

      }catch(e){
        this.cities = []        
      }
    }
  },


}


</script>

<style lang="scss"></style>