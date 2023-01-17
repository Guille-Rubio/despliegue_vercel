const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ extended: false }));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
//app.engine('.pug', require('pug').__express);

app.get('/api', (req, res) => {
  res.status(200).json({ msg: "Hello World" });
});

app.get('/api/hello', (req, res) => {
  res.status(200).json({ msg: "route to /hello is ok" });
});

app.get('/', (req, res) => {
  try {
    res.status(200).render('index.pug');
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
});

app.get('/film', (req, res) => {
  try {
    res.status(200).render('film.pug', { data: "Superman" });
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




