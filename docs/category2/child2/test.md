# 测试页面
<style lang="scss">
.el-calendar .el-calendar-table {
  display: table !important;
}
</style> 

<el-calendar v-model="value"></el-calendar>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>