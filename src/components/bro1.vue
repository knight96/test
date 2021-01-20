<template>
  <div>
    <button @click="bro1click">bro1</button>
    <input v-model="data1" />
    <div>{{ data2 }}</div>
    <div>{{ data3 }}</div>
    <div>{{ 'url:      ' + getvl('wheresql') }}</div>
    <div>
      <div
        v-for="item in list"
        :key="item">
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import mixintest from './mixintext.js'
import Vue from 'vue'
import { Base64 } from 'js-base64'
// let Base64 = require('js-base64').Base64
export default {
  mixins: [mixintest],
  data () {
    return {
      list: [1, 2, 3, 4],
      data1: 1,
      url1: "/dc/query?tablename=table1&luluka=lol&wheresql= in ( 'sql' )",
      url: '/pm/query?pageIndex=1&orderBy=time%20desc,nename'
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-unused-vars
    var vm = new Vue({})
  },
  computed: {
    data2: {
      get: function () {
        return (Base64.encode(this.data1)).split('').join('')
      }
    },
    data3: {
      get: function () {
        return window.btoa(unescape(encodeURIComponent(this.data1)))
      }
    }
  },
  methods: {
    bro1click () {
      this.data1 += 1
      this.getParam(this.url)
    },
    getParam (url) {
      const reg = /(?:\?|&)(\w+)={0,1}/g
      const paramlist = []
      for (;;) {
        const obj = reg.exec(url)
        if (obj) {
          paramlist.push(obj[1])
        } else break
      }
      // eslint-disable-next-line no-unreachable
      console.log('listttt', paramlist)
      paramlist.forEach(item => {
        console.log('values:', this.getvl(item))
      })
    },
    getvl (name) {
      var reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\s|&|$)', 'i')
      if (reg.test(this.url)) return RegExp.$2.replace(/\+/g, ' ')
    }
  }
}
</script>
