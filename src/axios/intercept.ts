import axios from 'axios';

const config: any = {};

if (process.env.NODE_ENV === 'development') {
  config.baseURL = 'http://127.0.0.1:20010/api';
} else {
  config.baseURL = 'http://hpyyb.cn/api';
}
// config.baseURL = 'http://note.bozai.tech/api';
// config.withCredentials = true;  // 跨域

const instance = axios.create(config);

instance.interceptors.response.use((response: any) => {
  if (response.status === 200) {
    return response.data;
  }
});

export default instance;
