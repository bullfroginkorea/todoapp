const express = require('express');
const app = express();
// body-parser 쓰려면~ ! body-parser은 요쳥 데이터 해석 도와줌 
app.use(express.urlencoded({extended: true})) 
app.set('view engine', 'ejs'); //ejs를쓰겠습니다 
//몽고디비연결위해 + 라이브러리도 설치해야함 npm install mongodb@3.6.4 
var db; //변수하나필요
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://bullfroginkorea:Imdan7942!@cluster0.mh81n6i.mongodb.net/todoapp?retryWrites=true&w=majority'
,function (에러,client) {
    if (에러) return console.log(에러) // 에러 대부분은 url오타 혹은 함수오타임 
        
    db = client.db('todoapp'); //todoapp이라는 database(폴더)에 연결좀요 
 //post라는 collection에 넣을게여 /이름과나이를db에 저장해보자 
    // db.collection('post').insertOne({이름:'John',나이:20},function (에러,결과) {
    //     console.log('저장완료');
    // });
    app.listen(8080,function () {
        console.log('listening on 8080') //접속완료되면 8080에 node server 띄워주세영
    });
})


// app.listen(8080,function () { //mongodb 콜백함수로넣어주삼 db접속되면 띄워주세요~ 
//     console.log('listening on 8080')
// });

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
    응답.send('전송완료');
    console.log(요청.body.title);
    console.log(요청.body);
    console.log(요청.body.date);
    db.collection('post').insertOne({제목:요청.body.title, 날짜:요청.body.date},function (에러,결과) {
        console.log('저장완료');
    })
})
//list로 접속(get)하면 데이터로꾸민 html보여줄것
app.get('/list',function (요청,응답) { // /list로 접속하면 실행됌 
    // db에 저장된 post라는 collection 안의 모든 데이터를 꺼내주세요 암기 ! 
    db.collection('post').find().toArray(function (에러,결과) {
        console.log(결과);
        응답.render('list.ejs',{posts:결과}); //html에 보여주세요 니까 순서는 이게 뒤 위치 잘확인 
    });
    
    

})