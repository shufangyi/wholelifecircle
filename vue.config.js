const publicPath =
  process.env.NODE_ENV === 'production' &&
  process.env.npm_lifecycle_event === 'build:gitpage'
    ? '/wholelifecircle/'
    : '/'

module.exports = {
  publicPath,
  css: {
    loaderOptions: {
      scss: {
        // 全局注入 scss 变量
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  }
}
