<template>
  <div>
    子组件
    <input v-model="bro2" />
  </div>
</template>

<script>
import mixintest from './mixintext.js'
// import { mapGetters } from 'vuex'
export default {
  mixins: [mixintest],
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  watch: {
    bro2: {
      handler: function (newVal, old) {
        this.$emit('input', newVal)
      }
    }
  },
  computed: {
    bro2: {
      get: function () {
        return this.value
      },
      set: function () {
        this.$emit('input', this.bro2)
      }
    }
  },
  methods: {
    changegege () {
      this.$emit('input', this.bro2)
    }
  }
}
</script>
