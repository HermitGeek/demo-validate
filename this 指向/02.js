var obj ={
    say: function () {
        console.log(this);
    }
};

obj.say();
(obj.say)();
(obj.say = obj.say)();
(false || obj.say)();