# css-tool
[![npm](https://img.shields.io/npm/v/npm.svg)]()

原生 JavaScript 封装一个可以获取和赋值 css 属性的插件。压缩后体积只有不到 1KB。

## 快速开始
```
<script src="./css-tool.min.js"></script>
```

### 初始化方法
1. 在你的脚本中使用 `var ct = new cssTool()` 创建 cssTool 实例
2. 直接使用 `cssTool()`

### api
- `get(elem, attr)`获取节点 elem 的 attr 属性值
- `set(elem, attr, value)`设置节点 elem 的 attr 属性为 value

## 待完成
- [ ] 操作多个属性
- [ ] 使用 ES6 改写
- [ ] 发布为 npm 模块

## 相关资料
- [我们来翻翻元素样式的族谱-getComputedStyle](https://xdlrt.github.io/2017/01/30/2017-01-30/)
- [手把手带你用原生js实现css属性的set和get](http://xdlrt.github.io/2017/02/05/2017-02-05)

## 贡献
如果你有任何问题，欢迎提 issue 或者 pr。