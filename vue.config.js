const publicPath =
  process.env.NODE_ENV === 'production' &&
  process.env.npm_lifecycle_event === 'build:gitpage'
    ? '/wholelifecircle/'
    : '/'

module.exports = {
  publicPath
}
