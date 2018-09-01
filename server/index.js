import Koa from 'koa';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HelloWorld from '../client/src/components/HelloWorld';

app.use(async ctx => {
  ctx.body = ReactDOMServer.renderToString(<HelloWorld />);
});

app.listen(3000);
