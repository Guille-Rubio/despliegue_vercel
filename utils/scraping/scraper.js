const puppeteer = require('puppeteer-core');
require('chrome-aws-lambda');

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}



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
    console.log(process.platform);
    try {
        const options = await getOptions(false);
        const browser = await puppeteer.launch(options);
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

