let homePage = require('../pages/homepage.js');

describe(' demo calculator tests', function () {

    it('addtion test', function () {

        homePage.get('http://juliemr.github.io/protractor-demo/');

        homePage.enterFirstNumber('2');
        homePage.enterSecondNumber('3');

        homePage.clickGo();

        homePage.verifyResult('5');

        browser.sleep(10000);
    });

    it('Sustraction test', function () {

        homePage.get('http://juliemr.github.io/protractor-demo/');

        homePage.enterFirstNumber('7');
        homePage.enterSecondNumber('3');

        homePage.clickGo();

        homePage.verifyResult('10');

        browser.sleep(10000);
    });

})