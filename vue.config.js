module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8888,
    host: '0.0.0.0',
    open: true,
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/oystersiller/'
  //   : '/',
};
