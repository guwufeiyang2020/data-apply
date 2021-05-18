const path = require('path');
const resolve = function (dir) {
  return path.join(__dirname, dir);
};
module.exports = {
  devServer: {
    port: 3333,
    open: true,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn', // 后台服务地址替换
        changeOrigin: true,
        pathRewrite: {
          '/api':''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // 新版本sass-loader， 将data改成prependData进行配置
        data: `@import "@/assets/scss/mixin.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    // 因为vuecli 3默认开启prefetch(预先加载模块)，提前获取用户未来可能会访问的内容
    // 在首屏会把这十几个路由文件，都一口气下载了
    // 所以我们要关闭这个功能
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    // 别名配置
    config.resolve.alias
      .set('@', resolve('src'))

    config.optimization.runtimeChunk('single');
    
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
}
