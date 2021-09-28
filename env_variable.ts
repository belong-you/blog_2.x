
const base_api = '/api'
let env: any = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_ROUTE_URL: '/',
  BASE_API: base_api,
  BASE_SOCKET: base_api + '/socket',
  ORIGIN: typeof window === 'object' ? window.location.origin : ''
};

if (process.env.NODE_ENV === 'development') {
  const ORIGIN = 'http://127.0.0.1:20010';

  env = Object.assign(env, {
    ORIGIN,
    BASE_API: ORIGIN + base_api,
  })
}

// env.BASE_API = 'http://hpyyb.cn/api';

export default env;