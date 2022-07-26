var express = require('express'); // express를 불러옴. =import
var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000, function() {
    console.log('Express App listening on port 3000');
})