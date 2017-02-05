# css-tool

## 原生 javascript 实现 css 属性的 set 和 get

### 初始化方法
- `var ct = new cssTool()`构建 cssTool 实例
- 直接使用`cssTool().get/set`

### api
- `get(elem, attr)`获取节点 elem 的 attr 属性值
- `set(elem, attr, value)`设置节点 elem 的 attr 属性为 value

### 相关资料
- [我们来翻翻元素样式的族谱-getComputedStyle](https://xdlrt.github.io/2017/01/30/2017-01-30/)
- [手把手带你用原生js实现css属性的set和get](http://xdlrt.github.io/2017/02/05/2017-02-05)
## License

The MIT License (MIT)

Copyright (c) 2017 Icarus

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
