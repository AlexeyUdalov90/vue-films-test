module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/variables.scss";'
      }
    }
  },

  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/icons',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/svg-sprite.svg'
      },
      pluginOptions: {
        plainSprite: true
      }
    }
  }
}
