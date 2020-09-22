const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const { init, verifyToken } = require('./verify-db');
const fs = require('fs');
const app = express();
//require("firebase/firestore");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

let db = null;

app.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

app.get('/foo', (request, response) => {
    response.send({ result: 'SUCCESS!!' });
});
app.get('/writeDb', function(req, res) {
    if (!db) {
        db = init();
    }
    elfReadFile(__dirname + '/addresses-list.json')
        .then(json => {
            const addresses = JSON.parse(json.result);
            writeData(addresses, db);
            res.send({ result: 'success' });
        })
        .catch(ex => {
            res.send({ result: 'error', error: ex });
        });
});

const writeData = (people, db) => {
    return new Promise(function(resolve, reject) {
        const batch = db.batch();
        people.forEach(person => {
            var addressR = db
                .collection('address')
                .doc(person.lastName + '_' + person.firstName);
            batch.set(addressR, person);
        });
        console.log('ready to commit');
        batch
            .commit()
            .then(dbData => {
                console.log('NiceDb');
                resolve({ result: 'writeData: NiceDb', dbData: dbData });
            })
            .catch(function(err) {
                reject({ result: 'error bad', error: err });
            });
    });
};

function getAddress(db) {
    return new Promise(function(resolve, reject) {
        db.collection('address')
            .get()
            .then(dbs => {
                resolve(dbs);
            })
            .catch(ex => {
                console.log(ex);
                reject(ex);
            });
    });
}

app.get('/address-list-db', function(req, res) {
    'use strict';
    if (db === null) {
        db = init();
    }
    console.log('Address list from db is called');
    verifyToken(req.query.token)
        .then(() => {
            getAddress(db).then(dbs => {
                const data = dbs.docs.map(doc => doc.data());
                res.send(data);
            });
        })
        .catch(ex => {
            console.log('COULD NOT VERIFY TOKEN');
            res.send({ result: 'error', error: ex });
        });
});

app.get('/worker', (request, response) => {
    response.render('worker', {
        title: request.query.title
    });

    // elfReadFile('foo.txt' , 'utf8').then(result => console.log (result));
});
//module.exports = router;

app.get('/get-address-list', function(request, response) {
    console.log('call get adressList', JSON.stringify(request.query, null, 4));
    console.log('taken should be here:' + request.query.token);
    verifyToken(request.query.token)
        .then(() => {
            elfReadFile('./addresses-list.json')
                .then(json => {
                    console.log('THE JSON IN /addresses-list', json);
                    //response.send(json.docs.map(doc =>doc.data()));
                    response.send(JSON.parse(json.result));
                })
                .catch(ex => {
                    response.send({ result: 'error', error: ex });
                });
        })
        .catch(err => {
            console.log('COULD NOT VERIFY TOKEN');
            response.send({ result: 'not logged in to Firebase', error: err });
        });
});

const elfReadFile = fileName => {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve({
                result: data
            });
        });
    });
};
//module.exports = router;

exports.app = functions.https.onRequest(app);
