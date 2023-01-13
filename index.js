const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ extended: false }));
app.set('view engine', 'pug');
app.set('views', './views');
//app.engine('.pug', require('pug').__express);



app.get('/api', (req, res) => {//OK
  res.status(200).json({ msg: "Hello World" });
});

app.get('/api/hello', (req, res) => {//OK
  res.status(200).json({ msg: "route to /hello is ok" });
});

app.get('/', (req, res) => {//OK!!
  try {
    res.status(200).render(__dirname + '/views/index.pug');
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
});

app.get('/send-file', (req, res) => {//OK
  try {
    res.status(200).sendFile(__dirname + '/views/index.html');
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
});


app.get('/film', (req, res) => {//OK!!
  try {
    console.log("PRUEBA");
    res.status(200).render(__dirname + '/views/film.pug', { data: "Superman" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
});

app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`));




