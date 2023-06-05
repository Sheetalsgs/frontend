const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/data',
    createProxyMiddleware({
      target: 'http://alb-91808397.ap-south-1.elb.amazonaws.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/data2',
    createProxyMiddleware({
      target: 'http://alb-91808397.ap-south-1.elb.amazonaws.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/data3',
    createProxyMiddleware({
      target: 'http://alb-91808397.ap-south-1.elb.amazonaws.com',
      changeOrigin: true,
    })
  );
};
