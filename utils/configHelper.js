const getFileNames = require('./readMdFileName')


var siderBarConfig = function (params) {

  let siderBar = {
    "/vue/source/": [getFileNames("源码分析", "/vue/source/", false, 1)],
    "/vue/components/": [getFileNames("组件化", "/vue/components/", false, 1)],
    "/Js/ES6/": [getFileNames("ES6", "/Js/ES6/", false, 1)],
    "/Js/Canvas/": [getFileNames("Canvas", "/Js/Canvas/", false, 1)],
    "/Algorithms/base/": [getFileNames("基础", "/Algorithms/base/", false, 1)],
  }
  return siderBar
}
module.exports = siderBarConfig