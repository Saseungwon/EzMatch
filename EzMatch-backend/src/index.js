const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
  ctx.body = 'hello would';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
