const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://scscproject-engname.com",
      changeOrigin: true,
    })
  );
};
