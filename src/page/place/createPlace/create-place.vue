<template>
  <div class="create-place">
  	<bread-crumb :breads="listAdd" />
  	<!-- <create-form />[this.$route.params.id === undefined ? listAdd : listEdit]-->
  </div>
</template>

<script type="text/ecmascript-6">
  import BreadCrumb from 'components/breadCrumb/bread-crumb'
  export default {
    name: 'create-place',
    components: {
      BreadCrumb
    },
    data () {
      return {
        listAdd: [
          { name: '场馆管理', to: '/place' },
          { name: '新增场馆' }
        ],
        listEdit: [
          { name: '场馆管理', to: '/place' },
          { name: '编辑' }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.create-place 
    height:50px
</style>