<template>
  <h1>{{ city.name }}</h1>
  <p>{{ city.weather[0].main }}</p>
  <p>{{ city.visibility }}</p>
  <p>{{ city.main.feels_like }}</p>
</template>

<script lang="ts">

export default{
  name: 'WeatherPanel',

  props: {
    city: {
      type: Object,
      required: true,
    }
  }
    
}

</script>

<style lang="scss" scoped>


</style>