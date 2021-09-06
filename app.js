const express = require('express');

const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}/');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});