module.exports = {
  module: {
    // 定义webpack中的公共校验规则
    rules: [
      {
        // 进行解析的正则文件
        test: /\.(js|jsx)$/,
        // 使用的加载器
        use: "babel-loader",
        // 包含的额外文件夹信息
        exclude: /node_modules/
      }
    ]
  }
}