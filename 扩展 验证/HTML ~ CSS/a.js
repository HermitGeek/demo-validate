// 声明类
class Point {
  // 构造函数的 属性、方法
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // static 关键字 声明静态方法；静态属性目前还不能声明
  // 静态方法 只能类本身 访问（super 可以代表当前类）；实例对象不能访问
  static classMethod() {
    return super.classMethod();
  }


  // 原型对象 方法
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}


var p = new Point(1, 2);


// 继承
class Point {}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);    
        
        // 相当于调用父类的构造函数，塑造子类的构造函数，改变子类this指向
        this.color = color;
    }
}

const obj = new ColorPoint(1, 2, 3);

console.log(obj);   // {color: 3}