var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) { // 동적인 값(:id)를 받아 
    res.send('Received a GET request, param > ' + req.params.id);
});

router.post('/', function(req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({
        success:true,
        user: req.body.username
    }) // json 형태의 응답
});

router.put('/', function(req, res) {
    res.status(400).json({message:'Hey, you. Bad Request!'});
});

router.delete('/', function(req, res) {
    res.send('Received a DELETE request');
});

module.exports = router;