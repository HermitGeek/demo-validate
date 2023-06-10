const fs = require('fs')

fs.readFile('/Users/zhangxin/Desktop/code-test/01.html', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data.replace(/\s/g, ''), data.replace(/\s/g, '').length)
})
