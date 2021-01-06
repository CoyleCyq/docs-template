# vuepress 特色语法

## 目录
- 输入 
```
[[toc]]
```

- 输出

[[toc]]

## 提示

- 输出

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 点击查看代码
  ```bash
    ::: tip
    这是一个提示
    :::

    ::: warning
    这是一个警告
    :::

    ::: danger
    这是一个危险警告
    :::
  ```
:::

## 标识

- 输入
```
<Badge text="beta" type="warning"/> <Badge text="默认主题"/>
```

- 输出

<Badge text="beta" type="warning"/> <Badge text="默认主题"/>



## Emoji
你可以在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json 'https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json')上看到所有的Emoji
- 输入
```
:tada: :100: :joy:
```

- 输出

:tada: :100: :joy:


## 可切换的代码块

- 输入

````
<code-group>
<code-block title="YARN" active>
```bash
yarn create vuepress-site [optionalDirectoryName]
```
</code-block>

<code-block title="NPM">
```bash
npx create-vuepress-site [optionalDirectoryName]
```
</code-block>
</code-group>
````

- 输出

<code-group>
<code-block title="YARN" active>
```bash
yarn create vuepress-site [optionalDirectoryName]
```
</code-block>

<code-block title="NPM">
```bash
npx create-vuepress-site [optionalDirectoryName]
```
</code-block>
</code-group>


## 高亮代码块

- 输入

````
``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
````

- 输出

``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

## 本地项目图片

- 输入

```html
<!-- $withBase: 是VuePress提供的方法，接收一个参数，返回 基础路径 + 参数 的 url -->
<!-- 基础路径在config.js配置，默认是 base: '/' -->
<img :src="$withBase('/img/image1.jpg')">
```

- 输出

<img :src="$withBase('/img/image1.jpg')">


## 大图预览

- 输入

```html
<!-- 使用elementUI提供的el-image组件 -->
<el-image :src="$withBase('/img/image1.jpg')" :preview-src-list="[$withBase('/img/image1.jpg')]" />
```
- 输出

<el-image :src="$withBase('/img/image1.jpg')" :preview-src-list="[$withBase('/img/image1.jpg')]" />
