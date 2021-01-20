export default {
  data () {
    return {
      datamix: 0
    }
  },
  methods: {
    findChange () {
      this.datamix2 = this.data1
      console.log('mixin console', this.data1)
    }
  }
}
