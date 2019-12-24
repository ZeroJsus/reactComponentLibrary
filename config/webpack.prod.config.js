/* 
  生产环境中打包使用的webpack配置
*/
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
  mode: "production",
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    path: path.join(__dirname, "../lib/"),
    filename: "index.js",
    libraryTarget: "umd", // 采用通用模块定义
    libraryExport: "default", // 兼容ES6的模块系统，CommonJS和AMD模块规范
  },
  module: {
    rules: [
      {
        test: /\.css/,
        loader: [MiniCssExtractPlugin.loader, "css-loader?modules"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "common.min.css" // 提取出来的公共css的名称
    })
  ],
  externals: { // 定义外部依赖，避免打包react和react-dom
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    antd: {
      root: "antd",
      commonjs2: "antd",
      commonjs: "antd",
      amd: "antd"
    }
  }
}

module.exports = merge(prodConfig, baseConfig);