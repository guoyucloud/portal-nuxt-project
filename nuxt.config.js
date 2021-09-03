
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
	title: 'WEB前端技术',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon-16x16-next.ico' },
      { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon-32x32-next.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
	  {src: '@/plugins/element-ui', ssr: true},
	  {src: '~plugins/vue-particles', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
