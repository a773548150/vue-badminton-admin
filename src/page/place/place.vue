<template>
  <div class="place">
    <top-menu :menu="menu" :activeClass="activeClass" />
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import TopMenu from 'components/topMenu/top-menu'
  export default {
    name: 'place',
    data () {
      return {
        menu: [
          {
            to: '/place',
            txt: '场馆管理'
          }
        ],
        activeClass: 'active'
      }
    },
    components: {
      TopMenu
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#app-container
	marginLeft: '200px'
</style>