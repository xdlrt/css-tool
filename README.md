# css-tool

## 原生 javascript 实现 css 属性的 set 和 get

### 初始化方法
- `var ct = new cssTool()`构建 cssTool 实例
- 直接 `cssTool().get(elem, attr)` 进行调用

### api
- `get(elem, attr)`获取节点 elem 的 attr 属性值
- `set(elem, attr, value)`设置节点 elem 的 attr 属性为 value

### 相关资料
[我们来翻翻元素样式的族谱-getComputedStyle](https://xdlrt.github.io/2017/01/30/2017-01-30/)
