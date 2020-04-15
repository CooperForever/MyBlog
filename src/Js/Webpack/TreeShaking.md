# Tree Shaking
当引入某个模块中部分内容不需要全部引入时   
1.只支持ES Module   
### Webpack中的使用
mode: production 自动使用  
optimization:{
  usedExports: true
}   
package.json {
  sideEffect:[]
}    