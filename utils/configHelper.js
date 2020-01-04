const getFileNames = require('./readMdFileName')

var siderBarConfig = function (params) {
  let siderBar = {
    "/vue/source/": getFileNames("源码分析", "/vue/source/", false, 1),
    "/vue/components": getFileNames("组件化", "/vue/source/", false, 1),
  }
  return siderBar
}
module.exports = siderBarConfig 