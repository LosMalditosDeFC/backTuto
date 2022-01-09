var express = require('express');

var app  = express();

var mongoose = require('mongoose');

var cors = require('cors');
app.use(cors());

app.use(express.urlencoded({
    extended:false
}));

app.use(express.json())

var UsuarioRouter = require('./controllers/usuario');
var SesionesRouter = require('./controllers/sesiones');

app.use('/usuario',UsuarioRouter);
app.use('/sesiones',SesionesRouter);

var url='mongodb://127.0.0.1:27017/DBTUTO';

mongoose.connect(url,{
    useNewUrlParser: true
});

var db = mongoose.connection;

db.on('open', _ => {
    console.log('DB connect',url);
})

db.on('error', err => {
    console.log(err);
})

app.listen(5000, () => {
    console.log('ok');
})


