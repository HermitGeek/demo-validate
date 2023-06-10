'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const list = await this.service.news.getList();
    const handleHelper = await this.ctx.helper.handleHelper();


    await ctx.render('home', {
      list,
      handleHelper,
      csrf: ctx.csrf,
    });
  }

  async add() {
    const { ctx } = this;
    console.log('---------');

    console.log(ctx.request);
  }
}

module.exports = HomeController;
