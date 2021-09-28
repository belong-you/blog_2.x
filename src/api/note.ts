import axios from './request';

/**
 * 获取笔记列表
 * @returns 
 */
export const api_getNoteLabel = () => axios.get('/note/label');

/**
 * 获取指定笔记文件内容
 * @returns 
 */
export const api_getNoteFile = (url: string) => axios.get('/note/getfile', {
  params: {
    url,
  }
});
