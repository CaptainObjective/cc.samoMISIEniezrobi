const express = require ("express");
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require ('method-override');
mongoose.connect ('mongodb://admin:admin62D.@ds121652.mlab.com:21652/samomisieniezrobi', { useNewUrlParser: true }).then (() => {
console.log('ejj... chyba polaczylam sie z baza danych, lol');

});
const app = express ();

app.use (bodyParser.urlencoded({extended:false}));
app.use (methodOverride('_method'));
app.set ("view engine", "pug");
const indexRoutes = require ('./routes/index');
app.use ('/', indexRoutes);
const port = process.env.PORT || 3000;
app.listen (port, () =>console.log(`Jestem podlaczona do serwera ${port} bijacz`));