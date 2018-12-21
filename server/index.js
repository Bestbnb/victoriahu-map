const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const db = require('./../db/index.js');

app.use(express.static(path.join(__dirname, './../client/dist/')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './../client/dist/index.html')));

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
app.listen(port, () => console.log(`Map component listening on port ${port}!`));