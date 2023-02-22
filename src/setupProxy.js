const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/search", {
      target:"http://***REMOVED***:7000",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/inference", {
      target:"http://127.0.0.1:8000",
      changeOrigin: true,
    })
  );
};