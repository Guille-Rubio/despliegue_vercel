const puppeteer = require('puppeteer-core');
const chrome = require('chrome-aws-lambda');

//https://github.com/whitep4nth3r/puppeteer-demo

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

///tmp/chromium

const exePath =
    process.platform === "win32"
        ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
        : process.platform === "linux"
            ? "/usr/bin/google-chrome"
            : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function getOptions(isDev) {
    let options;
    if (isDev) {
        options = {
            args: [],
            executablePath: exePath,
            headless: true,
        };
    } else {
        options = {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
        };
    }
    return options;
}


//TODO - Review scrapper & arrange platform codes for the values in the application object

const getPictureUrl = async () => {
    console.log("plaform", process.platform);
    console.log("ExePath", exePath);
    console.log("CHROME", await chrome.executablePath);
    try {
        const options = await getOptions(false);
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

