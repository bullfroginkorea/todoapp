const express = require('express');
const app = express();

app.listen(8080,function () {
    console.log('listening on 8080')
});

app.get('/pet',function(요청,응답) {
    응답.send('펫쇼핑할 수 있는 사이트입니다.');
})
app.get('/beauty',function(요청,응답) {
    응답.send('뷰티용품사세요.');
})
app.get('/',function (요청,응답) {
    응답.sendFile(__dirname+'/index.html')
})