const path = require('path');
const fs = require('fs');

module.exports = {
  title: "文档系统", // 标题
  description: '文档系统的框架', // 描述
  head: [ 
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  // 主题配置
  themeConfig: {
    lastUpdated: 'Last Updated', // 最后更新时间
    sidebarDepth: 2, // 侧边栏搜索深度，将同时提取 h2 和 h3 标题。
    // 导航栏配置
    nav: [
      {
        text: 'VuePress说明',
        link: '/vuepress/guide'
      },
      {
        text: '目录2',
        link: '/category2/guide'
      }
    ],
    // 侧边栏配置
    sidebar: {
      "/vuepress/": [
        "guide",
        {
          title: '语法介绍',
          collapsable: false,
          children: [
            'child1/doc1',
            'child1/doc2'
          ]
        },
      ],
      "/category2/": [
        "guide",
        {
          title: '子目录1',
          collapsable: false,
          children: genSidebarConfig("category2/child1", true)
        },
        {
          title: '子目录2',
          collapsable: false,
          children: genSidebarConfig("category2/child2", true)
        }
      ]
    }
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