
<template>
  <div class="container">
    <h1>Weather Application</h1>
    <SearchBar />
  </div>
</template>


<script lang="ts">
import SearchBar from '@/components/searchBar.vue'

export default {
  components: { SearchBar }
}
    
</script>

<style lang="scss" >
@import "@/assets/styles/main.scss";
@import "@/assets/styles/colors.scss";

$grey: #999;

body{
  font-size: 10px;
}

</style>
