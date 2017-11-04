# css-tool
[![npm](https://img.shields.io/npm/v/npm.svg)]()

Use native JavaScript to make a plugin which can get and set CSS attribute.After compressing it's less than 1KB.

## quick start
We suggest you to import this moudule with npm like this:
```js
import cc from 'css-tool';
```
also you can
```
<script src="./css-tool.min.js"></script>
```

### init
1. if you are import from node_moudules, there is no need to init it.
2. use  `var ct = new cssTool()` in your script to create cssTool instance.
3. or just use global `cssTool()`.

### api
- `get(elem, attr)` get an attribute of node `elem`
- `set(elem, attr, value)` change an attribute of node `elem` into `value`

## todo list
- [ ] Operate multiple attributes
- [x] Use ES6 to reconfigure this project
- [x] publish as a npm module

## contribution
If you have any problem,open issue or pull request.I will appreciate it.