<template>
<img v-bind="bind" :style="style" src="" >

</template>

<script lang="ts">
import { StyleValue, defineComponent } from 'vue'

export default defineComponent({
  name: 'AppIcon',
  props: {
    src: {
      type: String,
      default: undefined
    },
    size: {
      type: String,
      default: '16px'
    }
  },

  computed: {
    bind() {
      return {
        src: this.src,
        alt: this.src,
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

<style lang="scss" scoped></style>