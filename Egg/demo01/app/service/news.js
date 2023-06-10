'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getList() {

    return [ 31, 33, 456, 67, 7 ];
  }
}

module.exports = NewsService;
