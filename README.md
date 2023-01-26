# Deployment of puppeteer in Vercel
Deploy of a Node.js backend with Express using Puppeteer in Vercel.



1. Set production/development environments

Edit your scripts in `package.json`

```
"scripts": {
    "start": "NODE_ENV=production node index.js",
    "dev": "NODE_ENV=development nodemon index.js"
```

2. Install `puppeteer-core` and `chrome-aws-lambda` from your terminal
```
npm i puppeteer-core chrome-aws-lambda
```
Please bear in mind that serverless functions in Vercel have a limit of 50mb, therefore we will need to use a lighter version of Puppeteer and Chromium, `puppeteer-core` and `chrome-aws-lambda`.


3. Edit `package.json` dependencies and node version
```
    "engines": {
        "node": "^14"
    },
    "dependencies": {
        "chrome-aws-lambda": "^6",
        "puppeteer-core": "^6", 
    }
    //other packages omitted
```


4. In your scraper file, pass `options` to puppeteer when launch. The options will switch depending on the `process.env.NODE_ENV` value, so your app access correctly to Chrome both in develpment and in production environment.
```
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

const scrapper = async ()=>{
    const browser = await puppeteer.launch(options);
    //My scraping code ...
}
```

5. Add `vercel.json` to the root of your project 
```
{
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/index.js"
        }
    ]
}
```

6. Commit your changes

7. Go to your project in [Vercel](https://vercel.com/dashboard) and set your environment variables 
`NODE_ENV=production`

Variables must be set before deployment

8. Push your changes to Vercel

If you have your gitHub linked to Vercel
`git push`

You can visit the deployment of this project in [Vercel](https://despliegue-vercel-rama-express.vercel.app/)

Also you can try the scraping [here](https://despliegue-vercel-rama-express.vercel.app/film/scrap)

Thanks to [Mikael Kitas](https://github.com/michaelkitas/Puppeteer-Vercel/blob/master/index.js)


