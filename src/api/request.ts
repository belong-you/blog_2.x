import axios from 'axios';
import env from '~/env_variable';

const config: any = {
  baseURL: env.BASE_API,
  // withCredentials: true,  // 跨域
};

const instance = axios.create(config);

// 拦截器
instance.interceptors.response.use((response: any) => {

  if (response.status === 200) {
    return response.data;
  } else {
    return response;
  }

});

export default instance;
