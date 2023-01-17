# despliegue_vercel con pug
Deploy of a Hello World Node.js backend with Express in Vercel using pug as view engine.


## In your local project
1. Create a new node project\
    `npm init -y`
2. Install Express and pug\
    `npm i express pug pg sequelize`
3. Add your `index.js` to the root of the project\
    `touch index.js`
4. Add your app code to `index.js`
  ```
  const express = require('express');
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  const api = require('./routes/api');
  const films = require('./routes/films');
  
  app.use(express.json({ extended: false }));
  app.set('view engine', 'pug');
  app.set('views', __dirname + '/views');
  //app.engine('.pug', require('pug').__express);
  
  app.use('/api', api);
  app.use('/film', films);
  
  app.get('/', (req, res) => {
    try {
      res.status(200).render('index.pug');
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  });
  
  
  app.get('/send-file', (req, res) => {
    try {
      res.status(200).sendFile(__dirname + '/views/index.html');
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  });
  
  app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`));
  
  ```
  

5. Add your start script to `package.json`

```
"scripts": {
    "start":"node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

6. Add `vercel.json` to the root of your project\
`touch vercel.json`

In `vercel.json` use the following configuration
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
            "dest": "/"
        }
    ]
}
```

7. Test your app, run:\
    `npm start`\
    in your browser visit:\
    `http://127.0.0.1:3000`,\
    should print \
    `Hola Mundo!`\
    `Desplegado en Vercel`

8. Commit and push your project
`git add .`
`git commit -m "ADD deployment config"`
`git push`


## In Vercel
1. SignUp/Log In and go to your dashboard `https://vercel.com/dashboard`
2. Click on `Add new` > `project`
3. Import your project by linking your gitHub repository
4. Grant the necessary permits to Vercel
5. Select the gitHub repository you want to import, and import
6. In configure project view leave as it is and click `deploy`
7. On completion continue to dashboard
8. Click on visit

You can try the deployed version of this project [here](https://despliegue-vercel.vercel.app/) 















