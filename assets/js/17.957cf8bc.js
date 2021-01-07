(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{369:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"关于this的指向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于this的指向"}},[t._v("#")]),t._v(" 关于this的指向")]),t._v(" "),a("h5",{attrs:{id:"this对象是基于函数的执行环境绑定的。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this对象是基于函数的执行环境绑定的。"}},[t._v("#")]),t._v(" this对象是基于函数的执行环境绑定的。")]),t._v(" "),a("p",[t._v("比较常见的例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Robert Downey Jr."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" film"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tony Stark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("film"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//A")]),t._v("\nfilm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//打印出的this是"Tony Stark"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//B")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//打印出的this是"Robert Downey Jr."')]),t._v("\n")])])]),a("p",[t._v("A和B的调用为什么会输出两种不同的值呢？")]),t._v(" "),a("p",[t._v("从内存的"),a("strong",[t._v("数据结构")]),t._v("来看：")]),t._v(" "),a("p",[t._v("变量film保存着对象的地址，getName的value属性同时又保存着函数的地址，如下图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/youknowHRT/document/raw/master/imgs/this_1.jpg",alt:"this_1"}})]),t._v(" "),a("p",[a("code",[t._v("var myName=film.getName")]),t._v("只是把函数的地址指向myName，\n而这个函数，通俗点讲就好比一个演员，在film中叫做Tony，但在现实生活中就是Robert了。this就是film和现实世界这两个环境的指代。")]),t._v(" "),a("p",[t._v("如图所示"),a("img",{attrs:{src:"https://gitee.com/youknowHRT/document/raw/master/imgs/this_2.jpg",alt:"this_2"}})]),t._v(" "),a("p",[t._v("另外，我们知道函数有一个"),a("strong",[t._v("call")]),t._v("方法，"),a("code",[t._v("film.getName()")]),t._v(" 实际是"),a("code",[t._v("film.getName.call(film)")]),t._v("的一种语法糖写法。")]),t._v(" "),a("p",[t._v("call方法语法：\nfun.call(thisArg, arg1, arg2, ...)")]),t._v(" "),a("p",[t._v("thisArg就是this的指向，\n如果thisArg为undefined或者null，则自动指向全局对象window")]),t._v(" "),a("p",[t._v("如上面的"),a("code",[t._v("myName()")]),t._v(" 可转化为"),a("code",[t._v("myName.call(undefined)")]),t._v("，this就是undefined,自动指向全局对象。")]),t._v(" "),a("p",[t._v("最后补充两点，")]),t._v(" "),a("p",[t._v("1、"),a("strong",[t._v("匿名函数的执行环境具有全局性")]),t._v("，其this对象通常指向window。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Robert Downey Jr."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" film"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tony Stark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n   \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfilm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//输出 "Robert Downey Jr."')]),t._v("\n")])])]),a("p",[t._v("2、箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this")])])}),[],!1,null,null,null);s.default=e.exports}}]);