const pkg = require('./package')
const path = require('path')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Fathan Rohman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'google-site-verification', content: 'Lrag3LpOLdb0BNSOpgVMPHqm0cmXmC95ZfW8FqEpa9w' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['@Root'] = path.join(__dirname);
      config.resolve.alias['@Assets'] = path.join(__dirname, 'assets');
      config.resolve.alias['@Components'] = path.join(__dirname, 'components');
      config.resolve.alias['@Config'] = path.join(__dirname, 'config');
      config.resolve.alias['@Helpers'] = path.join(__dirname, 'helpers');
      config.resolve.alias['@Layouts'] = path.join(__dirname, 'layouts');
      config.resolve.alias['@Middleware'] = path.join(__dirname, 'middleware');
      config.resolve.alias['@Mixin'] = path.join(__dirname, 'mixin');
      config.resolve.alias['@Pages'] = path.join(__dirname, 'pages');
      config.resolve.alias['@Plugins'] = path.join(__dirname, 'plugins');
    }
  }
}
