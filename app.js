var express = require('express');
var controller = require('./controllers/controller');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//set up emplate engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

app.use(controller);



//listen to port
app.listen(3000);
console.log('you are listening to port 3000');
