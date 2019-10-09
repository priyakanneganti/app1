const express = require('express');
const app = express();

const bodyParser = require('body-parser')


var MongoDB = require('mongodb')
var MongoClient = MongoDB.MongoClient;
var db = null;

//Connecting to mongodb
MongoClient.connect('mongodb://localhost:27017/todo', function (err, dbObj) {
    if (err) throw err
    db = dbObj;
});



// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/todoCreate", function (req, res) {
    db.collection('tasks').insert(req.body);
    res.send({ msg: "Record created..." });
});

app.post("/todoUpdate", function (req, res) {
    console.log(req.body.taskId);

    db.collection('tasks').update({ _id: MongoDB.ObjectId(req.body.taskId) }, { $set: { taskStatus: req.body.taskStatus } }, function (err, result) {
        if (err) {
            throw err
        } else {
            res.send({ msg: "Record  Updated..." });
        }

    })
    //db.collection('tasks').insert(req.body);
});

app.post("/todoDelete", function (req, res) {
    db.collection('tasks').remove({ _id: MongoDB.ObjectId(req.body.taskId) }, function (err, result) {
        if (err) {
            throw err
        } else {
            res.send({ msg: "Record  Deleted..." });
        }
    });
});

app.get('/todo', function (req, res) {
    db.collection('tasks').find().toArray(function (err, result) {
        if (err) throw err
        res.send(result);
    });

})

app.listen(3009, function () {
    console.log('Example app listening on port 3009!')
})