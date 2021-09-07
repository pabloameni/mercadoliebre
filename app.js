const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4000;

const app = express();
app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/home'))
    .get('/login', (req, res) => res.render('pages/login'))
    .get('/register', (req, res) => res.render('pages/register'))
    .listen(PORT, () => console.log(`Running on port ${PORT}`))