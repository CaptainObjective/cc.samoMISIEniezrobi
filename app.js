const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
mongoose.connect('mongodb://admin:admin62D.@ds121652.mlab.com:21652/samomisieniezrobi', { useNewUrlParser: true }).then(() => {
    console.log('ejj... chyba polaczylam sie z baza danych, lol');

});
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
// app.set("view engine", "pug");
// app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(express.static('views'));
const indexRoutes = require('./routes/index');


app.use('/', indexRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Jestem podlaczona do serwera ${port} bijacz`));