<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    say() {
      console.log('aaa')
        
    }
  }

}

</script>

<template>
    <section class="section">
        <h1 class="section__title ">Section title</h1>
        <p class="section__text">Section text</p>
    </section>

    <h1 class="section__title">Example</h1>
</template>

<style lang="scss" scoped>
@import "./assets/styles/main.scss";
</style>
