'use strict';

// 屏蔽ip
module.exports = (options, app) => {

  // 返回一个异步方法
  return async function checkUser(ctx, next) {
    // const forbidIp = '127.0.0.1';

    // console.log('-----------');
    // console.log('获取当前IP：', ctx.request.ip);
    // console.log(options); // 传入的参数

    // if (ctx.request.ip === forbidIp) {
    //   ctx.status = 403;
    //   ctx.message = 'error:ip is forbided'; // 不能是中文
    // } else {
    //   await next(); // 必须next() 才能正常打开页面
    // }

    await next(); // 必须next() 才能正常打开页面

  };
};
