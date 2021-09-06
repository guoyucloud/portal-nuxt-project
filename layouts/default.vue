<template>
  <div class="guoyucloud-layout">
    <nuxt />
    <client-only>
      <vue-particles
          class="layout-particles"
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
    <div class="welcome-footer">
      <span>@GuoYu</span>
      &nbsp;|&nbsp;
      <span>WEB前端技术</span>
      &nbsp;|&nbsp;
      <span><a href="http://www.beian.miit.gov.cn/" target="_blank">津ICP备18000299号-1</a></span>
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

#particles-js{
  background-image: url("~assets/background.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
.guoyucloud-layout{
  position: relative;
  width: 100vw;
  height: 100vh;
  .layout-particles{
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .welcome-footer{
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 100%;
    color: white;
    a{
      color: white;
      text-decoration: none;
    }
  }
}


</style>
