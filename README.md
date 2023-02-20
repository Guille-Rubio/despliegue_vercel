# Deployment of puppeteer in Vercel
Deploy of a Node.js backend with Express using and MongoDb and mongoose in Vercel.



1. Set production/development environments

Edit your scripts in `package.json`

```
"scripts": {
    "start": "NODE_ENV=production node index.js",
    "dev": "NODE_ENV=development nodemon index.js"
```

2. Install `mongodb` and `mongoose` from your terminal

```
npm i mongodb mongoose
```



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


4. Set up your MongoDB connection in Atlas

Go to Mongo Atlas

Create user, save your username and password in the .env

Choose Cloud Environment for your cluster

Add your IP

Create the cluster

Click connect 

Click connect your application

Copy your uri under section 2. Replace &lt;password&gt; with your saved password and save it as `MONGODB_URI` in your `.env`


Connect your app to Mongo Altas in Express 



```
const mongoose = require("mongoose");

const connectMongoDb = async () => {

    if (process.env.NODE_ENV === 'production') {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true
        });

        const db = mongoose.connection;//objeto de la conexion

        // Eventos
        db.on("error", error => console.log(error));
        db.once("open", () => console.log("connection to db established"))
    }

    if (process.env.NODE_ENV === 'development') {
        mongoose.connect('mongodb://127.0.0.1:27017/movieApp')

        const db = mongoose.connection;//objeto de la conexion

        // Eventos
        db.on("error", error => console.log(error));
        db.once("open", () => console.log("connection to db established"))

    }
}

module.exports = { mongoose, connectMongoDb };

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

6. Test your app

Test your app, run:
`npm run dev`\
in your browser visit:
`http://127.0.0.1:3000/scrap`,
should print:
```

```
\
7. Commit your changes

\
8. Go to your project in [Vercel](https://vercel.com/dashboard) and set your environment variables `NODE_ENV=production`

Variables must be set before deployment

9. Push your changes to Vercel

If you have your gitHub linked to Vercel
`git push`

If not, 

`vercel login` 

and once loged in

`vercel`


You can visit the deployment of this project in [Vercel](https://despliegue-vercel-rama-express.vercel.app/)

Also you can try the scraping [here](https://despliegue-vercel-rama-express.vercel.app/film/scrap)




