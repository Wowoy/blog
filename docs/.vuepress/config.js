module.exports = {
    title: 'XueJi\'s blog',
    description: '乘风破浪的爱唱歌爱钢琴的敲代码小姐姐',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '前端', link: '/accumulate/' },
        {text: '算法', link: '/algorithm/'},
        {text: '读书', link: 'https://baidu.com'}      
      ],
    //   sidebar: 'auto', // 侧边栏配置
    // sidebar: [
    //   {
    //     title: '前端',
    //     // collapsable: false,
    //     children: [
    //      {
    //        title:'React',
    //       //  collapsable: false,
    //        children: [
    //          '',
    //        ]
    //      }
    //     ]
    //   },
    //   {
    //     title: '二组题目',
    //     children: [
    //       ['/home2', 'home2自定义题目'], 
    //       '/home3',
    //       '/中文',
    //     ]
    //   }
    // ],
    // sidebarDepth: 3,
    },
    plugins: ['autobar']
  };