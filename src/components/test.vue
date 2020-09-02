<template>
  <div>{{ test }}</div>
</template>
<script>
export default {
  name: 'Test',
  props: {
    test: {
      type: String,
      required: true,
      validator: function (val) {
        return ['qwer', 'qed'].indexOf(val) !== -1
      }
    }
  }
}
</script>
