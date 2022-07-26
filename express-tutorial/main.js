var express = require('express'); // express를 불러옴. =import
var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/user/:id', function(req, res) { // 동적인 값(:id)를 받아 
    res.send('Received a GET request, param: ' + req.params.id);
});

app.post('/user', function(req, res) {
    res.json({success:true}) // json 형태의 응답
});

app.put('/user', function(req, res) {
    res.status(400).json({message:'Hey, you. Bad Request!'});
});

app.delete('/user', function(req, res) {
    res.send('Received a DELETE request');
});

app.listen(3000, function() {
    console.log('Express App listening on port 3000');
})
