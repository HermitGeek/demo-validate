const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.lagou.com/');
   await driver.findElement(By.css('#changeCityBox ul.clearfix li:nth-of-type(1)')).click();

    await driver.findElement(By.id('search_input')).sendKeys('高级前端', Key.RETURN);

  } finally {
    // await driver.quit();
  }
})();


