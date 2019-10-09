const express = require('express');
const request = require('request');

const app = express();

app.use('/app', express.static('src'));
app.use('/modules', express.static('node_modules'));


app.get('/products', function (req, res) {
    res.send([{prodName:"Product 1" , code:"CX1001"},
              {prodName:"Product 2" , code:"CX1002"},
              {prodName:"Product 3" , code:"CX1003"},
              {prodName:"Product 4" , code:"CX1004"},
              {prodName:"Product 5" , code:"CX1005"},
              {prodName:"Product 6" , code:"CX1006"}]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})




