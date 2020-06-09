/*
 * 1.- Create server with express
 * 2.- Set up a middleware that allow access to certain users [55,10]
 * 3.- Return a response implements promises or async await methods
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('agregar id de usuaario por url');
});

app.get('/:user', (req, res, next) => {
    const array1 = [55, 10];
    var tetheredGetWord = new Promise((resolve, reject) => {

        const isLargeNumber = (element) => element === parseInt(req.params.user);
        const response = array1.findIndex(isLargeNumber);

        if (response > -1) {
            resolve("usuario encontrado");
        } else {
            reject("usuario no encontrado");
        }
    });

    return tetheredGetWord.then((resp) => { return res.status(200).json({ response: resp }) })
        .catch((resp) => { return res.status(500).json({ response: resp }) });

});



app.listen(3000, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});