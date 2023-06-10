var schedule = require('node-schedule');
var date = new Date((new Date()).getTime() + 10000);

// console.log(date);

var job = schedule.scheduleJob(new Date((new Date()).getTime() + 3000), function(){
  console.log('世界将在今天走向 结束.');
});
