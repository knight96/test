<template>
  <div class="main-content">
    <div class="yasuo" :style="yasuostle">
    </div>
    <button @click="handleClick">点击</button>
    <div>
      <input v-model="num1" />
      <!-- <input v-model="emitedProp" /> -->
    </div>
    <xy
      @emit-event="emitEvent"
      :emited-prop.sync="num2"
    />
  </div>
</template>

<script>
import Test from './test.vue'
import xy from './xy.vue'

export default {
  name: 'HelloWorld',
  components: {
    Test,
    xy
  },
  computed: {

  },
  data () {
    return {
      yasuostle: {},
      num1: 0,
      num2: 0
    }
  },
  watch: {
    emitedProp: {
      handler: function (newVal, oldVal) {
        console.log('emit update', newVal)
      }
    }
  },
  methods: {
    handleClick () {
      this.yasuostle = { opacity: 0.1 }
    },
    emitEvent (data) {
      this.num1 = data
    }
  },
  created () {
  }
}
</script>

<style scoped>
.main-content {
  background-color: #ababab;
}
.yasuo {
  width: 250px;
  height: 250px;
  background-color: blue;
  transition: all .8s;
}
</style>
