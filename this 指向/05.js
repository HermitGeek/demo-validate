var name = 'windowName';

var obj = {
    name: 'objName',
    getName: function() {
        return function() {
            return this.name;
        }
    }
};

console.log(obj.getName()());