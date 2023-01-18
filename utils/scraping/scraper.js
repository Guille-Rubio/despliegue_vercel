const puppeteer = require('puppeteer');

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

//TODO - Review scrapper & arrange platform codes for the values in the application object

const getPictureUrl = async () => {

    try {
        const browser = await puppeteer.launch({ headless: true });
        //ACCESS TO MERCURIO
        const page = await browser.newPage();
        await page.goto('https://beta.fakestore.shop/');
        await page.waitForSelector('#app > section');
        const h2s = await page.$$eval('h2', h2 => h2.map(h2 => h2.innerHTML.slice(0,h2.innerHTML.indexOf('<small>')).trim()));
        await browser.close();
        return h2s

    } catch (error) {
        console.log(error.message);
        throw error
    }

};

const scrapers = {
    getPictureUrl
};


module.exports = scrapers;

