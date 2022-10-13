const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

// src/api/index.js
const api = require('./api');

const app = new Koa();
const router = new Router();

// api 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// koa 라우터 설정
router.get('/', (ctx) => {
  ctx.body = '홈';
});

router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  // name의 존재 유무에 따라 다른 결과 출력
  // http://localhost:4000/about/react
  ctx.body = name ? `${name}의 소개` : '소개';
});

router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  // id의 존재 유무에 따라 다른 결과 출력
  // http://localhost:4000/posts?id=10
  ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
});

// 라우터 적용 전에 bodyparser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});

//
//
// koa 미들웨어 기본사용법
// app.use(async (ctx, next) => {
//   console.log(ctx.url);
//   console.log(1);
//   if (ctx.query.authorized !== '1') {
//     ctx.status = 401; // unauthorized 쿼리 파라미터가 포험되어 있어야 다음 미들웨어를 처리해줌, 아니면 안 해줌
//     return;
//   }
//   await next();
//   console.log('END');
// });

// app.use((ctx, next) => {
//   console.log(2);
//   next();
// });

// app.use((ctx) => {
//   ctx.body = 'hello would';
// });
