const webpack = require ('webpack');//引入webpack
const opn = require ('opn');//打开浏览器
const merge = require ('webpack-merge');//webpack配置文件合并
const path = require ('path');
const baseWebpackConfig = require ('./webpack.base.conf');//基础配置

let config = merge (baseWebpackConfig, {
  output: {
    path: path.resolve (__dirname, '../../build'),
    filename: 'js/bundle.js',
    chunkFilename: "js/[name]-[id].js",
    publicPath: ''
  },
  plugins: [
    /*设置开发环境*/
    new webpack.DefinePlugin ({
      'process.env': {
        NODE_ENV: JSON.stringify ('development'),
      }
    }),
    /*设置热更新*/
    new webpack.HotModuleReplacementPlugin (),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        include: [
          path.resolve (__dirname, "../../app"),
          path.resolve (__dirname, "../../entryBuild")
        ],
        exclude: [
          path.resolve (__dirname, "../../node_modules")
        ],
      }
    ]
  },
  /*设置api转发*/
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    inline: true,
    contentBase: path.resolve (__dirname, '../../build'),
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: [
      {
        context: ['/api/**', '/u/**'],
        target: 'http://localhost:8080/',
        secure: false
      }
    ],
    /*打开浏览器 并打开本项目网址*/
    after () {
      opn ('http://localhost:' + this.port);
    }
  }
});

module.exports = config;
