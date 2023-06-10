var name = 'windowName';

var obj = {
    name: 'objName',
    getName: function() {
            return this.name;

    }
};

console.log(obj.getName());
console.log((obj.getName)());
console.log((obj.getName = obj.getName)()); // 先赋值，再执行赋值后的结果；因为赋值表达式的值是本身，所以this不能得到维持