# 导读

## 安装node环境
- 检查本机是否安装node。快捷键`win+R`输入 `cmd` 回车 在终端工具中输入 `node -v` 。返回版本号则可以跳过这一步
- 下载node [下载地址](https://nodejs.org/en/)

## 下载代码
- [下载地址](https://oa.sellerpro.top:5001/d/f/596381828242259227)


## 运行环境
```bash
# 安装依赖
npm install # 如果安装缓慢，先运行`npm config set registry https://registry.npm.taobao.org` 再执行

# 运行开发环境
npm run dev
```


## 配置说明
```js
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
```

## 部署
下述的指南基于以下条件：
- 文档放置在项目的`docs`目录中；
- 使用的是默认的构建输出位置；
- VuePress 以本地依赖的形式安装到你的项目中，并且配置了如下的 npm scripts:

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

在项目根目录下打开终端运行 `npm run build` 编译成静态资源文件

在你的项目中，创建一个如下的 deploy.sh 文件（请自行判断去掉高亮行的注释）:

``` bash{13,20,23}
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

::: tip
你可以在你的持续集成的设置中，设置在每次 push 代码时自动运行上述脚本。
:::