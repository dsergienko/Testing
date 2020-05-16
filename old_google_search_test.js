var webdriver = require('selenium-webdriver')
By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver')

test.describe('Google Search', function () {
    var driver;

    test.before(function () {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    });

    test.it('should apend query to title', function () {
        driver.get('https://www.google.com/');
        driver.findElement(By.name('q')).sendKeys('webdriver');
        driver.findElement(By.name('btnG')).click();
        driver.wait(until.titleIs('webdriver - Поиск в Google'), 1000);
    });

    test.after(function () {
        driver.quit();
    });
});    