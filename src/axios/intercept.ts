import axios from 'axios';
import env from '@/config';

const config: any = {};

config.baseURL = env.BASE_API

// config.withCredentials = true;  // 跨域

const instance = axios.create(config);

instance.interceptors.response.use((response: any) => {
  if (response.status === 200) {
    return response.data;
  }
});

export default instance;
