<template>
	<div class="welcome">
		<div class="welcome-main">
			<div class="welcome-title">
				<img src="~/assets/GuoYuCloudLogoAndTitle.png" alt="">
				<div class="welcome-go-home">
					<el-button
						class="welcome-go-home__button"
						type="danger"
						@click="_goHome()"
					>
						进入主页
					</el-button>
					<el-button
						class="welcome-go-home__button"
						type="danger"
						@click="_goBlog()"
					>
						进入博客
					</el-button>
					<el-button
						class="welcome-go-home__button"
						type="danger"
						@click="_goGitHub()"
					>
						GitHub
					</el-button>
				</div>
			</div>
			<client-only>
				<vue-particles
					color="#dedede"
					:particle-opacity="0.7"
					:particles-number="80"
					shape-type="circle"
					:particle-size="4"
					lines-color="#dedede"
					:lines-width="1"
					:line-linked="true"
					:line-opacity="0.4"
					:lines-distance="150"
					:move-speed="3"
					:hover-effect="true"
					hover-mode="grab"
					:click-effect="true"
					click-mode="push"
				/>
			</client-only>
		</div>
		<footer class="welcome-footer">
			<span>@GuoYu</span>
			&nbsp;|&nbsp;
			<span>WEB前端技术</span>
			&nbsp;|&nbsp;
			<span><a href="http://www.beian.miit.gov.cn/" target="_blank">津ICP备18000299号-1</a></span>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'Welcome',
		data () {
			return {
				githubUrl: 'https://github.com/guoyucloud',
				blogUrl: 'https://blog.guoyucloud.com',
				mobileAppUrl: 'https://m.guoyucloud.com',
				pcAppUrl: 'https://main.guoyucloud.com'
			}
		},
		components: {
		},
		methods: {
			_isMobile () {
				let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
				return flag
			},
			_goHome () {
				if (this._isMobile()) {
					window.open(this.mobileAppUrl)
				} else {
					window.open(this.pcAppUrl)
				}
			},
			_goBlog () {
				window.open(this.blogUrl)
			},
			_goGitHub () {
				window.open(this.githubUrl)
			}
		}
	}
</script>

<style lang="scss">
	.welcome{
		position: relative;
		width: 100%;
		height: 100%;
		.welcome-main{
			width: 100%;
			text-align: center;
			display: flex;
			flex-flow: row wrap;
			justify-content:center;/*x轴对齐方式*/
			align-items:center;     /*y轴对滴方式*/
			height: 100vh;        /**屏幕高度百分百*/
			.welcome-title{
				img{
					width: 100%;
				}
				.welcome-go-home{
					width: 100%;
					.welcome-go-home__button{
						/*background-color: rgb(197,48,39);*/
						width: 105px;
						color: #FFF;
						background-color: rgba(197,0,0,0.6);
						border-color:rgba(197,48,39,0.6);
					}
					.welcome-go-home__button:hover{
						/*background-color: rgb(197,48,39);*/
						color: #FFF;
						background-color: rgba(197,48,39,1);
						border-color:rgba(197,48,39,1);
					}
				}
			}
			#particles-js{
				position: fixed;
				z-index: -1;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: url("~assets/background.jpg");
			}
		}
		.welcome-footer{
			font-size: 12px;
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			bottom: 0;
			color: white;
			a{
				color: white;
				text-decoration: none;
			}
		}
	}
</style>
