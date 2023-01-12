const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ extended: false }));
app.set('view engine', 'pug');
app.set('views', './views');



app.get('/', (req, res) => {
  res.status(200).json({ msg: "Hello World" });
});

app.get('/hello', (req, res) => {
  res.status(200).json({ msg: "route to /hello is ok" });
});

app.get('/pug', (req, res) => {
  res.status(200).render('index');
});




app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`));




