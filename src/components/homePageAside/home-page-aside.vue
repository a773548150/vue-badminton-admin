<template>
    <aside id="app-aside">
        <div class="aside-wrapper">
            <div class="aside-container">   
                <div class="store-info">
                    <div class="pic">
                        <img alt="头像" src="http://img.yzcdn.cn/upload_files/2017/04/06/FkzPke7UiK-QgqA0_KFby82u6KV7.png" width="45" height="45"/>
                    </div>
                    <div class="detail">
                        <div class="title">篮球篮球</div>
                        <div class="tag">
                            <div class="auth">未认证</div>
                            <div class="type">有赞美业</div>
                        </div>
                    </div>
                </div>   
                <nav class="store-nav">
                    <ul>
                        <li>
                            <i class="icon iconfont icon-changdiguanli"></i>
							<router-link tag="div" class="router-link" to="/place">
						        <span class="tab-link">场馆管理</span>
						    </router-link>                            
                        </li>
                        <li>
                            <i class="icon iconfont icon-jiaolian"></i>
							<router-link tag="div" class="router-link" to="/coach">
						        <span class="tab-link">教练管理</span>
						    </router-link>                             
                        </li>
                        <li>
                            <i class="icon iconfont icon-kecheng"></i>
                            <router-link tag="div" class="router-link" to="/course">
						        <span class="tab-link">课程管理</span>
						    </router-link> 
                        </li>
                        <li>
                            <i class="icon iconfont icon-dingdan"></i>
							<router-link tag="div" class="router-link" to="/order">
						        <span class="tab-link">订单管理</span>
						    </router-link>                             
                        </li>
                        <li>
                            <i class="icon iconfont icon-xueyuan"></i>
							<router-link tag="div" class="router-link" to="/student">
						        <span class="tab-link">学员管理</span>
						    </router-link>                              
                        </li>
                        <li>
                            <i class="icon iconfont icon-paiqi"></i>
							<router-link tag="div" class="router-link" to="/schedule">
						        <span class="tab-link">教练排期</span>
						    </router-link>                             
                        </li>
                        <li>
                            <i class="icon iconfont icon-ttpodicon"></i>
							<router-link tag="div" class="router-link" to="/setting">
						        <span class="tab-link">运营设置</span>
						    </router-link>                             
                        </li>
                    </ul>
                </nav>
            </div>
        
        <div class="aside-userinfo">
            <Button type="ghost">退出登录</Button>
        </div>
      </div>
    </aside>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue'
	import { Button } from 'iview'

	export default {}

	Vue.component('Button', Button)
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/base"
  	
	#app-aside 
	    position: fixed;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    box-shadow: none;
	    background: #222;
	    border-right: 1px solid #eee;
		.aside-wrapper
		    width: 200px;
		    height: 100%;
		    overflow-x: hidden;
				
			.aside-container 
			    box-sizing: border-box;
			    width: 220px;
			    height: 100%;
			    padding: 25px 15px;
			    overflow-y: auto;
			    overflow-x: hidden;
			    background: #fff;
			
		/* 左边栏上面的商铺信息 */
				.store-info
				    display: flex;
				    width: 100%;
				    height: 56px;
				    border-bottom: 1px solid #eee;
				
					.pic 
					    width: 45px;
					    height: 45px;
					
					.detail 
					    flex: 1;
					    padding-left: 10px;
					    font-size: 14px;
					
						.title 
						    width: 115px;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    white-space: nowrap;
						    margin-bottom: 10px;
						
							.tag div
							    display: inline-block;
			
							.tag .auth 
							    box-sizing: border-box;
							    min-width: 40px;
							    height: 20px;
							    line-height: 20px;
							    padding: 0 5px;
							    font-size: 12px;
							    vertical-align: middle;
							    text-align: center;
							    border-radius: 1px;
							    color: #fff;
							    border: 0;
							    background-color: #bbb;
							    margin-right: 5px
							
							.tag .type 
							    box-sizing: border-box;
							    min-width: 40px;
							    height: 20px;
							    line-height: 20px;
							    padding: 0 5px;
							    font-size: 12px;
							    vertical-align: middle;
							    text-align: center;
							    border-radius: 1px;
							    color: #fff;
							    border: 0;
							    background-color: #e74c75;
							    
				.store-nav 
				    width: 100%;
				    min-height: 600px;
				    margin-top: 20px;
				    
					ul 
					    list-style: none;
					    
						li 
						    position: relative;
						    height: 45px;
						    line-height: 36px;
						    cursor: pointer;
						    padding-left: 15px;
						    margin-bottom: 10px;
						    
						    .icon 
							    font-size: 14px;
							    display: inline-block;
							    width: 18px;
							    height: 18px;
							    line-height: 18px;
							    margin-top: 13px;
							    color: black;
							    
							.tab-link
							    position: absolute;
							    top: 0px;
							    left: 0px;
							    right: 0;
							    bottom: 0;
							    color: #666;
							    display: inline-block;
							    font-size: 14px;
							    padding-top: 4px;
							    padding-left: 43px;
								
							.tab-link:hover
								background: rgba(0, 0, 0, .03);
									
							.tab-link.active
								background: rgba(0, 0, 0, .03);
								
	
		.aside-userinfo
		    position: fixed;
		    bottom: 0;
		    left: 15px;
		    box-sizing: border-box;
		    width: 170px;
		    height: 52px;
		    font-size: 12px;
		    border-top: 1px solid #eee;
	
</style>