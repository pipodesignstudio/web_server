const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT;
require('dotenv').config()

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});

// Servir contenido dinámico

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Javier'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic');
});
app.get('/elements', (req, res) => {
    res.render('generic');
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + 'public/404.html');
});


app.listen(port)