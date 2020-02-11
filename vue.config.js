module.exports = {
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: "./srv"
    }
  },
  devServer: {
    proxy: {
      "/event": {
        target: "http://localhost:3000"
      }
    }
  }
};
