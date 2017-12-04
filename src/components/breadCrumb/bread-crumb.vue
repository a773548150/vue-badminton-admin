<template>
  <div class="breadcrumb-all">
	  <div class="breadcrumb" v-for="(item, index) in breads" :key="index">
	  	<router-link v-bind:to="item.to" v-if="index < breads.length - 1">{{ item.name }}</router-link>
	  	<span v-else >{{ item.name }}</span>
	  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      breads: Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.breadcrumb-all
    box-sizing: border-box;
    color: #333;
    font-size: 0;
    line-height: 0;
    height: 36px;
    padding: 15px 25px;
    border-bottom: 1px solid #eee;
    background-color: #f8f8f8;
    padding-top: 18px;
    
	.breadcrumb
        display: inline-block;
        
		a, span 
		    display: inline-block;
		    color: #38f;
		    font-size: 12px;
	    

	    a::after 
		    content: '/';
		    display: inline-block;
		    color: #bbb;
		    margin: 0 5px;
.breadcrumb span {
    color: #333;
}
</style>