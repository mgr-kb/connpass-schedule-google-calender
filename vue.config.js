module.exports = {
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: "./srv"
    }
  },
  devServer: {
    proxy: {
      "/foo": {
        target: "http://localhost:3000"
      },
      "/event": {
        target: "http://localhost:3000"
      }
    }
  }
};
