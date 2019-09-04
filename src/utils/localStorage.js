/**
 * 本地储存中有三个方法都放在这个文件中
 * @param {*} key 表示键
 * @param {*} item 表示值
 * 第一个是存入值
 * 第二个是获得值
 * 第三个是删除值
 */
export const setItem = (key, item) => {
//  储存必须是字符串所以转化
  window.localStorage.setItem(key, JSON.stringify(item))
}
export const getItem = (key) => {
  return JSON.parse(window.localStorage.getItem(key))
}
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
