const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

//https://github.com/whitep4nth3r/puppeteer-demo
//https://github.com/michaelkitas/Puppeteer-Vercel

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}






//TODO - Review scrapper & arrange platform codes for the values in the application object

const getPictureUrl = async () => {
    console.log(process.env);
    let options = {};
    if (process.env.NODE_ENV === "production") {
        options = {
            args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
            defaultViewport: chrome.defaultViewport,
            executablePath: await chrome.executablePath,
            headless: true,
            ignoreHTTPSErrors: true,
        };
    } else {
        const exePath =
            process.platform === "win32"
                ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
                : process.platform === "linux"
                    ? "/usr/bin/google-chrome"
                    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
        options = {
            args: [],
            executablePath: exePath,
            headless: true,

        }

    }

    try {

        const browser = await puppeteer.launch(options);
        //ACCESS TO MERCURIO
        const page = await browser.newPage();
        await page.goto('https://beta.fakestore.shop/');
        await page.waitForSelector('#app > section');
        const h2s = await page.$$eval('h2', h2 => h2.map(h2 => h2.innerHTML.slice(0, h2.innerHTML.indexOf('<small>')).trim()));
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

