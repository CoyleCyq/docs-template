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

````html
<code-group>
<code-block title="JS" active>
```js
function sum(a, b) {
  return a + b
}
sum(123, 456)
```
</code-block>

<code-block title="TS">
```ts
function sum(a: number, b: number): number {
  return a + b
}
sum(123, 456)
```
</code-block>
</code-group>
````

- 输出

<code-group>
<code-block title="JS" active>
```js
function sum(a, b) {
  return a + b
}
sum(123, 456)
```
</code-block>

<code-block title="TS" >
```ts
function sum(a: number, b: number): number {
  return a + b
}
sum(123, 456)
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

## 本地项目图片 + 图片预览

- 输入

```html
<!-- $withBase: 是VuePress提供的方法，接收一个参数，返回 基础路径 + 参数 的 url -->
<!-- 基础路径在config.js配置，默认是 base: '/' -->
<img :src="$withBase('/img/image1.jpg')">
```

- 输出
<img :src="$withBase('/img/image1.jpg')">

## 流程图

> [流程图使用教程](https://flowchart.vuepress.ulivz.com/#install)

- 输入
```
@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend
```

- 输出
@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend


- 下一个例子

- 输入
```
@flowstart ant
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
@flowend
```

- 输出

@flowstart ant
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
@flowend