var WebDriver = require('selenium-webdriver');
var By = WebDriver.By;
var browser = new WebDriver.Builder().withCapabilities(WebDriver.Capabilities.chrome()).build();

describe('test for web', function(){	
	
	it('search in google',function(done){
	
		browser.get('http://www.google.com');
		browser.findElement(By.id('lst-ib')).sendKeys('jquery');
		browser.findElement(By.value("Google Search")).click();
		browser.wait(function(){
			done();
		},5000);
		var actRes = browser.findElement(By.id('lst-ib')).val();
		var expRes = browser.findElement(By('ol#rso li.g div.rc h3.r a').text()
		expect(actRes).toEqual(expRes);
	});
});