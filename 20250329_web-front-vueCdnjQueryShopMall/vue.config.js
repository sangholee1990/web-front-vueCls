const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 퍼블릭 경로
  publicPath: "/shop",
});
