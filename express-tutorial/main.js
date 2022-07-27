var express = require('express'); // express를 불러옴. =import
var app = express();
var user = require('./routes/user'); // 유저 라우트 모듈 불러옴

// 미들웨어 작성
var myLogger = function(req, res, next) {
	console.log(req.url);
	next();
};

app.use(myLogger);

app.use('/user', user);

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000, function() {
    console.log('Express App listening on port 3000');
})
