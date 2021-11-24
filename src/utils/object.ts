/**
 * 深度克隆对象
 * @param origin 
 * @param target 
 * @returns 
 */
export function deepCloneObj(origin: any, target: any = {}) {
  const toStr = Object.prototype.toString;
  for (const prop in origin) {
    if (origin.hasOwnProperty(prop)) {  // 查看自身属性是否存在
      // 判断是数组还是对象
      if (origin[prop] !== null && typeof (origin[prop]) === 'object') {
        target[prop] = toStr.call(origin[prop]) == '[object Array]' ? [] : {};
        deepCloneObj(origin[prop], target[prop]);  // 重新克隆子级
      } else {
        target[prop] = origin[prop];
      }
    }
  }
  return target;
}