const path = require('path');
const fs = require('fs');

module.exports = {
  title: "文档系统",
  description: '文档系统的框架',
  head: [ 
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  // 主题配置
  themeConfig: {
    lastUpdated: 'Last Updated', // 最后更新时间
    sidebarDepth: 2, // 侧边栏搜索深度，将同时提取 h2 和 h3 标题。
    // 导航
    nav: [
      {
        text: '目录1',
        link: '/category1/guide'
      },
      {
        text: '目录2',
        link: '/category2/guide'
      }
    ],
    sidebar: {
      "/category1/": [
        "guide",
        {
          title: '文档1',
          collapsable: false,
          children: genSidebarConfig("category1/child1", true)
        },
        {
          title: '文档2',
          collapsable: false,
          children: genSidebarConfig("category1/child2", true)
        }
      ],
      "/category2/": [
        "guide",
        {
          title: '文档1',
          collapsable: false,
          children: genSidebarConfig("category2/child1", true)
        }
      ]
    }
  },
  sass: { indentedSyntax: true },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true
    },
  }
};

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir);
  let files = fs.readdirSync(p);
  let subDir = hasSub ? dir.split('/')[1] : '';
  files = files.map(item => {
    item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
    return item;
  });
  return files;
}