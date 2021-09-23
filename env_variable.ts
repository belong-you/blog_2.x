let env: any = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_ROUTE_URL: '/',
  BASE_API: ''
};

if (process.env.NODE_ENV === 'development') {
  env = Object.assign(env, {
    BASE_API: 'http://127.0.0.1:20010/api',
  })
}

env.BASE_API = 'http://hpyyb.cn/api';  // ..

export default env;