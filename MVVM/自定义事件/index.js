function Test() {
  /// <summary>这是一个自定义类型</summary>

  // 继承CursomObject中的属性
  CursomObject.apply(this);
}
// 继承CursomObject中的函数
Test.prototype = new CursomObject();

// 定义一个从Test类型中派生出来的对象
var a = new Test();

// 绑定一个message事件的侦听器
a.addEventListener(
  "message",
  function(e) {
    console.log(e);
  },
  false
);

// 再绑定一个message事件的侦听器
a.addEventListener(
  "message",
  function(e) {
    console.log("内容:" + e);
  },
  false
);

// 触发message事件
a.fireEvent("message", "这是参数……");
