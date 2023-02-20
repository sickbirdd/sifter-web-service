const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/search", {
      target:"http://***REMOVED***:7000",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/models", {
      target:"https://api-inference.huggingface.co",
      changeOrigin: true,
    })
  );
};