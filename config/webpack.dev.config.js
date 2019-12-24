/* 
  开发时使用的webpack配置
*/
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const devConfig = {
  mode: "development",
  // 入口文件的位置
  entry: path.join(__dirname, "../example/src/app.js"),
  output: {
    path: path.join(__dirname, "../example/src/"),
    // 打包之后的文件名称
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.min\.css$/,
        loader: ['style-loader','css-loader?modules'],
      },
      {
        test: /\.min\.css$/,
        loader: ['style-loader','css-loader'],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "../example/src/"),
    compress: true,
    port: 3001, // 启动端口为3001的服务
    open: true // 自动打开浏览器
  }
};
module.exports = merge(devConfig, baseConfig);
// 合并基础配置和开发环境的配置