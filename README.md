# despliegue_vercel
Basic deploy of a Hello World Node.js backend with Express in Vercel


## In your local project
1. Create a new node project\
    `npm init -y`
2. Install Express\
    `npm i express`
3. Add your `index.js` to the root of the project\
    `touch index.js`
4. Add your Express Hello World code 
  ```
  const express = require('express')
  const app = express()
  const port = 3000

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
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
    should print `Hello World!`

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
















