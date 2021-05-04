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

/**
 * 滚动条、锚链接（记得取消 a 标签默认事件）跳转过渡  默认回到顶部
 * @param ele 元素节点
 */
export const scrollTo = (num = 0) => {
  window.scrollTo({
      top: num,
      behavior: "smooth" 
  });
}
