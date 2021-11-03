const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', function(reg, res, next){
    res.sendFile('home')
})

app.get('/about', function(reg, res, next){
    res.sendFile('about')
})

app.get('/works', function(reg, res, next){
    res.sendFile('works')
})





app.listen(2300, function() {
    console.log('Serveur démarré')
})