<template>
  <div class="result" @click="handleClick">
    <p>{{ city.name }}, {{ city.state }}</p>
    <p>{{ city.country }}</p>
  </div>

</template>

<script lang="ts">
export default{
  name: 'SearchResult',

  
  props: {
    city: {
      type: Object,
      required: true
    }
  },

  methods: {
    handleClick(){
      console.log(this.city.lon, this.city.lat)
    }
  }
  
}
</script>

<style lang="scss" scoped>
    .result{
      width: 100%;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      transition: all .3s ease-out;

     &:last-child{
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }    
  
    &:hover{
        background-color: #dedede;
      }

    }

</style>