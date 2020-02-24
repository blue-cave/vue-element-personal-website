<template>
  <div class="content">
    <h1>{{msg}}:{{getCount}}</h1>
    <button @click="changeCount()">累加</button>
  </div>
</template>
<script>
export default {
  name: 'test1',
  data () {
    return {
      msg: 'test'
    }
  },
  computed: {
    getCount () {
      return this.$store.state.count
    }
  },
  methods: {
    changeCount () {
      this.$store.commit('addCount')
    }
  }
}
</script>
<style scoped>

</style>
