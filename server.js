const express = require('express');
const app = express();
// body-parser 쓰려면~ ! body-parser은 요쳥 데이터 해석 도와줌 
app.use(express.urlencoded({extended: true})) 
app.listen(8080,function () {
    console.log('listening on 8080')
});

app.get('/pet',function(요청,응답) {
    응답.send('펫쇼핑할 수 있는 사이트입니다.');
})
app.get('/beauty',function(요청,응답) {
    응답.send('뷰티용품사세요잉.');
})
app.get('/',function (요청,응답) {
    응답.sendFile(__dirname+'/index.html')
})
app.get('/write',function (요청,응답) {
    응답.sendFile(__dirname+'/write.html')
})
//7장 어떤사람이 /add 경로로 POST요청을 하면.. 
// ??을 해주세요
app.post('/add',function (요청,응답) {
    응답.send('전송완료')
    console.log(요청.body.title)
})