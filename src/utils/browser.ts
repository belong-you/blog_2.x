/**
 * 截取 location.pathname 参数
 * @param src 
 * @returns 
 */
export const pathNameSplit = (src: string) => {
  const arr = src.split(/\//);
  return arr;
}