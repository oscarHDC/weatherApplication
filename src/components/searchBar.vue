<template>
  <div class="searchBar__container">
    <div class="searchBar">
      <AppIcon :icon="iconImg" />
      <input type="search" v-model="searchText" @input="handleSearch()" placeholder="Search a city">
    </div>
    <searchResults :cities="cities"/>
  </div>

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
      iconImg: imgURL
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
    }
  },


}


</script>

<style lang="scss">

  .searchBar{
    padding: 10px;
    background-color: white;
    border-radius: 7px;
    width: 100%;
    display: flex;
    gap: 1rem;

    input{
      border: none;
      outline: none;
      background: unset;
      appearance: none;
      width: 100%;
    }

    &__container{
      max-width: 35rem;
      margin: 0 auto;
      position: relative;
    }
  }


</style>