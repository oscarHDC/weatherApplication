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
      max-width: 520px;
      padding: 20px;
      border: 1px solid black;
      border-radius: 7px;
      display: flex;
      justify-content: space-between;
    }
</style>