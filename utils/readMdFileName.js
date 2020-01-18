const fs = require('fs')
const path1 = require('path')

const getfileNames = function (title = "前言", path, collapsable = false, sidebarDepth = 1) {
  let docpath = `./src${path}`
  const readDir = fs.readdirSync(docpath).reduce((accumulator, value) => {
    if (value.toLocaleLowerCase() === "readme.md") {} else {
      accumulator.push(path + value.slice(0, -3))
    }
    return accumulator;
  }, [])
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