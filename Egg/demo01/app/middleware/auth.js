'use strict';

module.exports = (option, app) => {
  return async (ctx, next) => {
    ctx.state.csrf = ctx.csrf;

    await next();
  };
}
;
