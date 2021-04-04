const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const port = 3000;

const API_SERVICE_URL = 'https://hw-web-api.herokuapp.com';

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use('/', express.static(__dirname + '/dist'));

// Proxy
app.use(
  '/api',
  cors(),
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);
