<template>
<img  v-bind="bind" :style="style">
</template>

<script lang="ts">
import { StyleValue, defineComponent } from 'vue'

export default defineComponent({
  name: 'AppIcon',
  props: {
    icon: {
      type: String,
      default: undefined
    },
    size: {
      type: String,
      default: '1.6rem'
    },
  },

  computed: {
    bind() {
      return {
        src: this.icon,
        alt: this.icon,
      }
    },

    style(): StyleValue{
      return{
        width: this.size,
        height: this.size,
      }
    }
  }
})
</script>

<style lang="scss" scoped>
  img{
    filter: brightness(0);
    opacity: 20%;
  }
</style>