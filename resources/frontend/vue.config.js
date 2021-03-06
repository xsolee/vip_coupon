const path = require("path");

module.exports = {
 
  // publicPath: '/metronic/preview/vue/demo1/',
  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../../public/assets/app',
  publicPath: process.env.NODE_ENV === 'production'
    ? 'public/assets/app/'
    : '/',

  // modify the location of the generated HTML file.
  indexPath: process.env.NODE_ENV === 'production'
    ? '../../../resources/views/app.blade.php'
    : 'index.html',
  configureWebpack: {
  

    
   
    devServer: {
 //     proxy: 'http://localhost:8081',
      headers: { "Access-Control-Allow-Origin": "*" }
    },
    resolve: {
      alias: {
        // If using the runtime only build
        vue$: "vue/dist/vue.runtime.esm.js" // 'vue/dist/vue.runtime.common.js' for webpack 1
        // Or if using full build of Vue (runtime + compiler)
        // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        /* ... */
      });

    /* config.module
      .rule("eslint")
      .use("eslint-loader")
      .tap(options => {
        options.configFile = path.resolve(__dirname, ".eslintrc.js");
        return options;
      }); */
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: __dirname
        }
      },
      sass: {
        prependData: `@import "@/assets/sass/global/integration/frameworks/vue/vuetify/variables.scss"`
      },
      scss: {
        prependData: `@import "@/assets/sass/global/integration/frameworks/vue/vuetify/variables.scss";`
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
