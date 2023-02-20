import {CONF} from "./config";
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/search", {
      target: CONF['SEARCH_URL'],
      changeOrigin: true,
    })
  );
};