/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

const express = require('express');
const cors = require('cors');
var ActiveDirectory = require('activedirectory');

var config = {
    url: 'ldap://20.28.232.180',
    baseDN: 'dc=ad,dc=local'
};

var ad = new ActiveDirectory(config);
var username;
var password;

const app = express();
const port = 3000;

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
    username = user.username;
    password = user.password;
    ad.authenticate(username, password, function(err, auth) {
        if (err) {
            console.log(err);
            res.status(400).send('Leo puto');
            return;
        }
        if (auth) {
            console.log('Leo puto');
            res.status(200).send('Leo puto');
            return;
        }
        else {
            console.log('Leo re puto');;
        }
    });
});



app.listen(port, () => {
    console.log("Leo re re puto " + port);
});
