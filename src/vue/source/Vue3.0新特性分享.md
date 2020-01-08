# VUE 3.0 新特性--摘自尤大VueConf分享
## VUE 3.0 设计目标 
 * 更快更小
 * 加强TypeScript支持
 * 加强API设计一致性
 * 提高自身可维护性
 * 开放更多底层功能
 ### 如何更快?
 * Object.defineProperty -> Proxy
 * Virtural DOM重构
 * 更多编译时优化
     - Slot默认编译为函数
     - Monomorphic vnode factory
     - Compiler-generated flags for vnode/children types
### 新的DIFF算法
* 最简单情况
* 节点结构变化
### ~~Class API~~ Function-based API
* 对比Class API
    - 更好的TypeScript类型推导支持
    - 更灵活的逻辑复用能力
    - Tree-shaking 友好
    - 代码更容易被压缩
