const fs = require('fs')

fs.readFile('/Users/zhangxin/Desktop/code-test/isEqual/new.json', 'utf8' , (err, newData) => {



fs.readFile('/Users/zhangxin/Desktop/code-test/isEqual/old.json', 'utf8' , (err, oldData) => {

  

  console.log(newData.replace(/\s/g, ''), newData.replace(/\s/g, '').length);

  console.log(oldData.replace(/\s/g, ''), oldData.replace(/\s/g, '').length);

  console.log('---', newData.replace(/\s/g, '') === oldData.replace(/\s/g, ''));
})

})


