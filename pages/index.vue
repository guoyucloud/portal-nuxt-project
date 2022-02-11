<template>
	<div class="welcome">
		<div class="welcome-main">
      <div class="welcome-logo">
        <img src="~/assets/GuoYuCloudLogoAndTitle.png" alt="">
      </div>
      <div class="welcome-go-home">
        <!--					<el-button-->
        <!--						class="welcome-go-home__button"-->
        <!--						type="danger"-->
        <!--						@click="_goHome()"-->
        <!--					>-->
        <!--						进入主页-->
        <!--					</el-button>-->
        <el-button
            class="welcome-go-home__button"
            type="danger"
            @click="_goJS()"
        >
          进入简书
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
        <el-button
            class="welcome-go-home__button"
            type="danger"
            @click="_goUtils()"
        >
          实用工具
        </el-button>
      </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Welcome',
		data () {
			return {
				githubUrl: 'https://github.com/guoyucloud',
				blogUrl: 'https://blog.guoyucloud.com',
        jsUrl: 'https://www.jianshu.com/u/2bd16cf6f5fe',
				mobileAppUrl: 'https://m.guoyucloud.com',
				pcAppUrl: 'https://main.guoyucloud.com',
        utilsUrl: '/utils'
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
      _goJS () {
        window.open(this.jsUrl)
      },
			_goBlog () {
				window.open(this.blogUrl)
			},
			_goGitHub () {
				window.open(this.githubUrl)
			},
      _goUtils () {
        window.open(this.utilsUrl)
      }
		}
	}
</script>

<style lang="scss">
	.welcome{
		display: flex;
    flex-flow: row wrap;
		width: 100%;
		height: 100%;
		.welcome-main{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
			width: 100%;
      .welcome-logo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50vw;
        img{
          width: 100%;
        }
      }
      .welcome-go-home{
        display: flex;
        justify-content: center;
        align-items: center;
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
	}
</style>
