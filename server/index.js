const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const db = require('./../db/index.js');

app.use(express.static(path.join(__dirname, './../client/dist/public/')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './../client/dist/public/index.html')));

app.get('/render', (req, res) => {
    res.sendFile(path.join(__dirname, './../client/dist/public'));
})

app.get('/map', (req, res) => {
    var random = Math.floor(Math.random() * 100) + 1  
    var sql = 'select * from map where id = (?)';
    db.query(sql, [random], (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
})

app.get('/recommendations', (req, res) => {
    var random = Math.floor(Math.random() * 100) + 1;
    var randomTwo = Math.floor(Math.random() * 100) + 1;
    var randomThree = Math.floor(Math.random() * 100) + 1;
    var randomFour = Math.floor(Math.random() * 100) + 1 ; 
    var sql = 'select * from recommendations where rec_id IN ((?), (?), (?), (?))';
    db.query(sql, [random, randomTwo, randomThree, randomFour], (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
})


app.listen(port, () => console.log(`Map component listening on port ${port}!`));