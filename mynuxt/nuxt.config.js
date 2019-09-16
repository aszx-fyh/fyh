module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "奶油面包好好吃啊",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
    // "@nuxtjs/eslint-module"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // host: "fyh.com",
    // port: "8080",
    prefix: "/api"
  },
  proxy: {
    "/api/qq/": {
      target: "https://pacaio.match.qq.com",
      pathRewrite: { "^/api/qq/": "" }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  serverMiddleware: [],
  hooks: {
    render: {
      done(renderer) {}
    }
  }
}
