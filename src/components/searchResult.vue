<template>
  <div class="result">
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

      &:hover{
        background-color: rgb(191, 191, 191);
      }

      p:hover{
        color: green;
        transition: all .2s ease-out;
      }
    }
</style>