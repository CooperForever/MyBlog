const siderBarConfig = require('../../utils/configHelper.js')

module.exports = {
  title: "Cooperforever",
  dest: './docs/',  // 设置输出目录
  base: '/MyBlog/',
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // Don't forget to install moment yourself
          const moment = require('moment')
          moment.locale('zh-CN')
          return moment(timestamp).fromNow()
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: 'Vue', link: '/vue', items: [
          { text: '源码分析', link: '/vue/source/' },
          { text: '组件', link: '/vue/components/' }
        ]
      },
      { text: 'React', link: '/React' },
      {
        text: 'Js', link: '/Js', items: [
          { text: 'ES6', link: '/Js/ES6/' }
        ]
      },
      { text: 'Game', link: '/Game' },
      { text: 'Cesium', link: '/Cesium' },
      { text: 'Github', link: 'https://github.com/cooperforever', target: '_blank' },
    ],
    sidebar: siderBarConfig()
    // {
    //   "/vue/source/": [
    //     {
    //       title: '源码分析',   // 必要的
    //       path: '/vue/source/',      // 可选的, 应该是一个绝对路径
    //       collapsable: false, // 可选的, 默认值是 true,
    //       sidebarDepth: 1,    // 可选的, 默认值是 1
    //       children: [
    //         '/vue/source/响应式原理',
    //         '/vue/source/keep-alive'
    //       ]
    //     }
    //   ],
    //   "/vue/components/": [{
    //     title: '组件化',   // 必要的
    //     path: '/vue/components/',      // 可选的, 应该是一个绝对路径
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/vue/compoents/组件化'
    //     ]
    //   }]
    // }
  }
}