const { ['log'] : c } = console;

/**
 * 截取 location.pathname 参数
 * @param src 
 * @returns 
 */
export const pathNameSplit = (src: string) => {
  const arr = src.split(/\//);
  return arr;
}

/**
 * 延迟加载
 * @param time 
 * @returns 
 */
export const sleep = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
}

