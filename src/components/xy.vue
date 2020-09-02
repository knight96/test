<template>
  <div class="div-emit">
    <div style="background-color: #ecce54">{{ emitedProp }}</div>
    <button @click="handleEmit1">emit event</button>
    <button @click="handleEmit2">emit update</button>
  </div>
</template>

<script>
export default {
  props: {
    emitedProp: null
  },
  methods: {
    handleEmit1 () {
      this.$emit('emit-event', new Date().getSeconds())
    },
    handleEmit2 () {
      this.$emit('update:emitedProp', new Date().getSeconds())
    }
  }
}
</script>

<style lang="css" scoped>
.div-emit {
  padding: 15px;
  background-color: #f8ebb9;
}
</style>
