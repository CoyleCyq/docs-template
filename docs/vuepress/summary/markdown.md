# markdown 语法介绍

vue支持markdown语法，下面简单的介绍一些常用的语法

## 标题
- 输入
```
# h1 标题
## h2 标题
### h3 标题
#### h4 标题
##### h5 标题
###### h6 标题
```
- 输出



## 表格

- 输入
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```
- 输出

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


## 引用
- 输入

```
> 这是引用内容
```

- 输出

> 这是引用内容

## 列表

- 输入

```
- 列表
  - 列表1-1
    - 列表1-2
    - 列表1-3
  - 列表2-1
    - 列表2-2
```

- 输出

- 列表
  - 列表1-1
    - 列表1-2
    - 列表1-3
  - 列表2-1
    - 列表2-2

## 代码块
- 输入

````
```ts
function sum(a, b) {
  return a + b
}
```
````

- 输出
```ts
function sum(a: number, b: number): number {
  return a + b
}

sum(123, 456)
```

## 斜体
- 输入
```
_Compact style:_
```
- 输出

_Compact style:_


## 超链接

- 输入

- 输出
  - [百度](https://www.baidu.com/)
  - [redmine 带title属性](http://192.168.1.228/ 'http://192.168.1.228/')

## 图片

- 输入

```
![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
```

- 输出

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
