const express = require('express');
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use(express.static(__dirname + "/public"));

/// root
app.use('/', routes);

app.listen(3000, ()=>{
    console.log('Listening on PORT 3000.....')
})