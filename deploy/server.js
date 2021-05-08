const express = require("express");
const app = new express();

app.use(express.static("./public"));

app.use(async (req, res) => {
  const render = require('./public/umi.server');
  res.setHeader('Content-Type', 'text/html');

  const context = {};
  const { html, error, rootContainer } = await render({ path: req.url, context });

  res.send(html);
});

app.listen(2000, err => {
  err && console.log(err);
  console.log('服务已启动...');
});