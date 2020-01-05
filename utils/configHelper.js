const getFileNames = require('./readMdFileName')


var siderBarConfig = function (params) {
  let siderBar = {
    "/vue/source/": [getFileNames("源码分析", "/vue/source/", false, 1)],
    "/vue/components/": [getFileNames("组件化", "/vue/components/", false, 1)],
  }
  console.log(JSON.stringify(siderBar));

  return siderBar
}
module.exports = siderBarConfig 