module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://mall-pre.springboot.cn",
        changeOrigin: true,
        // 这个选项是，将我们前端在请求接口时加上的/api，设置为空，以便放松正确的请求。
        pathRewrite: {
          "/api": ''
        }
      }
    }
  }
}