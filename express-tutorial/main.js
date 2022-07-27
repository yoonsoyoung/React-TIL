var express = require('express'); // express를 불러옴. =import
var app = express();
var user = require('./routes/user'); // 유저 라우트 모듈 불러옴
var morgan = require('morgan'); // npm 미들웨어 사용
var bodyParser = require('body-parser');

// 미들웨어 작성
// var myLogger = function(req, res, next) {
// 	console.log(req.url);
// 	next();
// };
// app.use(myLogger);

// morgan 로깅 미들웨어 사용
app.use(morgan('dev'));
// body-parser 미들웨어 사용
app.use(bodyParser.json());

app.use('/user', user);

// 정적 파일 제공
app.use('/', express.static('public'));

app.listen(3000, function() {
    console.log('Express App listening on port 3000');
})
