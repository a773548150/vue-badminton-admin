<template>
  <div class="menu-wrapper">
    <ul class="menu-ul">
		<li v-for="item in menu">
			<router-link v-bind:to="item.to" v-bind:active-class="activeClass">{{ item.txt }}</router-link>
		</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      menu: Array,
      activeClass: String
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/base"
	.menu-wrapper 
	    background-color: #fff;
	    width: 100%;
	    height: 50px;
	    border-bottom: 1px solid #eee;

		.menu-ul 
		    margin-left: 30px;
		    height: 100%;

			li 
			    display: inline-block;
			
				a
				    box-sizing: border-box;
				    display: block;
				    font-size: 14px;
				    color: #111;
				    margin-right: 35px;
				    height: 50px;
				    line-height: 50px;
				
				.active
				    border-bottom: 2px solid #e74c75;
				    font-weight: 700;
				
</style>