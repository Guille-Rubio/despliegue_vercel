const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ extended: false }));
app.set('view engine', 'pug');
app.set('views', './views');
//app.engine('.pug', require('pug').__express);



app.get('/', (req, res) => {//OK
  res.status(200).json({ msg: "Hello World" });
});

app.get('/hello', (req, res) => {//OK
  res.status(200).json({ msg: "route to /hello is ok" });
});

app.get('/send', (req, res) => {//OK
  res.status(200).send('<h1>Prueba ruta GET /send</h1>');
});

app.get('/pug', (req, res) => {//internal server error
  try {
    res.status(200).render('index.pug');
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

app.get('/send-file', (req, res) => {//OK
  try {
    res.status(200).sendFile(__dirname + '/views/index.html');
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

app.get('/send-pug', (req, res) => {//descarga el archivo del navegador
  try {
    res.status(200).sendFile(__dirname + '/views/index.pug');
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
})

app.get('/render-html', (req, res) => {//descarga el archivo del navegador
  try {
    res.status(200).render('./views/index.html');
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
})


app.get('/film', (req, res) => {
  try {
    res.status(200).render('film.pug', { data: "Superman" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
})


app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`));




