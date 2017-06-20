# css-tool
[![npm](https://img.shields.io/npm/v/npm.svg)]()

Use native JavaScript to make a plugin which can get and set CSS attribute.After compressing it's less than 1KB.

## quick start
```
<script src="./css-tool.min.js"></script>
```

### init
1. use  `var ct = new cssTool()` in your script to create cssTool instance.
2. or just use global `cssTool()`

### api
- `get(elem, attr)` get an attribute of node `elem`
- `set(elem, attr, value)` change an attribute of node `elem` into `value`

## todo list
- Operate multiple attributes
- Use ES6 to reconfigure this project
- publish as a npm module

## contribution
If you have any problem,open issue or pull request.I will appreciate it.