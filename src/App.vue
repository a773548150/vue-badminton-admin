<template>
  <div id="app">
    <home-page-aside />
    <div id="app-container">
    	<router-view></router-view>
    </div>
  </div>
</template>

<script>
import HomePageAside from 'components/homePageAside/home-page-aside'

export default {
  name: 'app',
  components: {
    HomePageAside
  }
}
</script>
<style>
#app-container{
	margin-left: 200px;
}	
</style>
