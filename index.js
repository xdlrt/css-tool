/**
 * @author Icarus
 * @name css-tool.js
 * @description 原生 JS 实现 CSS 属性的 get 与 set，兼容主流浏览器与 IE78
 *
 * 用法：
 * import cc from 'css-tool';
 * cc.get(elem,'font-size');
 * cc.set(elem,'opacity','0.5');
 *
 */

class CssTool {
  elem; // dom元素
  attr; // 需要获取/设置的属性

  constructor() {

  }

  /**
   * 驼峰命名法转换，IE78使用
   * font-size --> fontSize
   * @param {String} attr
   * @param {String} match 匹配到的字符串，如-s
   * @param {String} p1 (\w)是一个捕获，这里是捕获到的字符，如s
   * @return 返回驼峰命名方式的css属性名
   */
  static camelCase(attr) {
    return attr.replace(/-(\w)/g, function (match, p1) {
      return p1.toUpperCase();
    });
  }

  /**
   * IE78下获取透明度的值
   * @param  elem 获取值的 dom
   * @return {Number} 透明度的值，默认为1
   * IE78下设置透明度 filter: alpha(opacity=0) 取值为0-100
   */
  static getFilter(elem) {
    var filter = elem.currentStyle.getAttribute('filter').match(/alpha\(opacity=(.*)\)/i);
    var value = parseFloat(filter[1]);
    if (!isNaN(value)) {
      // 转化为0-1
      return value ? value / 100 : 0;
    }
    return 1;
  }

  /**
    * 获取样式
    * @param {Object} elem 获取值的dom元素
    * @param {String} attr 获取的样式名称，如font-size
    * @return 返回样式属性值
    */
  get(elem, attr) {
    // 现代浏览器和IE9+
    if (window.getComputedStyle) {
      return window.getComputedStyle(elem, null).getPropertyValue(attr);
    } else {
      // 不支持 getComputedStyle 的浏览器，主要是IE678
      // 获取 width 和 height 时的判断条件
      const condition =
        (attr === 'width' || attr === 'height')
        && (elem.currentStyle[attr] === 'auto');
      // IE78兼容
      // 获取浮动使用 styleFloat
      if (attr === 'float') {
        return elem.currentStyle.getAttribute('styleFloat');
      }
      // 获取透明度
      if (attr === 'opacity') {
        return getFilter(elem);
      }
      // 直接获取外部样式表未设置的 width 和 height 返回值为 auto
      // 为了获取精确的 px 值，使用 getBoundingClientRect 方法
      // getBoundingClientRect 可以获得元素四个点相对于文档视图左上角
      // 的 top、left、bottom、right值，进行简单计算即可
      if (condition) {
        var clientRect = elem.getBoundingClientRect();
        return (
          attr === 'width'
            ? clientRect.right - clientRect.left
            : clientRect.bottom - clientRect.top
        ) + 'px';
      }
      return elem.currentStyle.getAttribute(camelCase(attr));
    }
  }

  /**
   * 设置元素css样式值
   * @param {Object} elem 设置值的dom元素
   * @param {String} attr 设置样式名称，如font-size
   * @param {String} value 设置样式的值，如16px
   */
  set(elem, attr, value) {
    // IE78 设置透明度需特殊处理
    if (attr === 'opacity') {
      // 针对 IE7 的 hack
      // filter 滤镜要求 hasLayout=true 才能执行
      // IE浏览器且 hasLayout=false 时执行
      if (!!elem.currentStyle && !elem.currentStyle.hasLayout) {
        elem.style.zoom = 1;
        attr = 'filter';
        value = 'alpha(opacity=' + value * 100 + ')';
      }
    }
    // 通用方式
    elem.style.cssText += ';' + (attr + ':' + value) + ';';
  }

}

const cc = new CssTool();
export default cc;