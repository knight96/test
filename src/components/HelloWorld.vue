<template>
  <div class="main-content">
    <input v-model="input1"/>
    <button @click="testclick">test</button>
    <button @click="testclick2">test2</button>
    <input v-model="input2"/>
    <el-button type="success" @click="elclick">123</el-button>
    <div class="bottom"></div>
    <el-dialog :visible.sync="dialogVisible">123456</el-dialog>
  </div>
</template>

<script>

import PassTwoDimensionalCode from './PassTwoDimensionalCode'
import bro1 from './bro1'
import bro2 from './bro2'
var con2 = 'qwer'
export default {
  name: 'HelloWorld',
  components: {
    PassTwoDimensionalCode,
    bro1,
    bro2
  },
  watch: {
  },
  computed: {

  },
  data () {
    return {
      input1: '',
      input2: '',
      dialogVisible: false
    }
  },
  created () {
  },
  methods: {
    testclick () {
      var con1 = 2
      this.input1 = con1
      this.input2 = con2
    },
    testclick2 () {
      // eslint-disable-next-line no-undef
      console.log(con1, con2)
    },
    elclick () {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="css" scoped>
.main-content {
  background-color: #ffffff;
}
.bottom {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 500px;
  background-color: aquamarine;
}
</style>
