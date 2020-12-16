var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = require('./database.json');

var urlParser = bodyParser.urlencoded({})


app.get('/employees', (req, res) => {
    res.send(data);
});

app.get('/employees/:id', (req, res) => {
    var findID = data.workers.find(function(employee){
        return parseInt(req.params.id) == employee.id
    });
   if (!findID) {
       res.status(404).send("Error 404 Page Not Found.")
   }
   res.send(findID);
});

app.post('/employee', urlParser, function(req, res) {
    console.log(req.body);
    res.render('employees', {data: req.body});
})

app.listen(3000);