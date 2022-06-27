

/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
const path =   require('path');
const express = require('express');
const cors = require('cors');
var ActiveDirectory = require('activedirectory');
var config = {
    url: 'ldap://ldapredes.australiaeast.cloudapp.azure.com',
    baseDN: 'dc=ad,dc=local'
};

var ad = new ActiveDirectory(config);
var username;
var password;

const app = express();
const port = 3000;
app.set('views',path.join(__dirname,'views'));
//app.set('view engine', 'pug');

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(
    express.json({
        type: "*/*"
    })
);

app.use(cors());

app.post('/login', (req, res) =>{
    let user = req.body;
    console.log(user);
    username = user.username + "@ad.local";
    password = user.password;
    ad.authenticate(username, password, function(err, auth) {
        if (err) {
            console.log('Error 1   ' + new Date());
            res.sendStatus(400);
        }
        if (auth) {
            console.log('Bien   ' + new Date());
            res.sendStatus(200);
        }
    });
});

app.get('/',(req,res)=>{
        console.log(__dirname);
	res.sendFile(__dirname + '/views/index.html');
});
app.get('/js',(req,res)=>{
        console.log('llegamos');
        res.sendFile(__dirname + '/views/App.js');
});
app.get('/error',(req,res)=>{
	console.log('error');
	res.sendFile(__dirname + '/views/error.html');
});
app.get('/inicio',(req,res)=>{
	console.log('inicio');
	res.sendFile(__dirname + '/views/inicio.html');
});

app.listen(port, () => {

});
