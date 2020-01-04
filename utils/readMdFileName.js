const fs = require('fs')

const getfileNames = function (title = "前言", path, collapsable = false, sidebarDepth = 1) {
  console.log(path);

  const readDir = fs.readdirSync(path).map((value) => {
    path + value.slice(0, -3)
  })
  console.table(readDir)
  return {
    title: title,
    path: path,
    collapsable: collapsable,
    sidebarDepth: sidebarDepth,
    children: readDir
  }
}

module.exports = getfileNames

