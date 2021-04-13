import axios from './intercept';

/**
 * 获取笔记列表
 * @returns 
 */
export const apiGetNoteLabel = () => axios.get('/note/label');

/**
 * 获取指定笔记文件内容
 * @returns 
 */
export const apiGetNoteFile = (url: string) => axios.get('/note/getfile', {
  params: {
    url,
  }
});