<template>
  <div class="content">
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
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
