// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // extended는 비표준 대상의 분성이 가능한지를 나타냄

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  // .post를 하면 POST요청에만 응답함, GET에는 응답 X
  console.log(req.body); // 이렇게만 쓰면 req.는 요청 본문을 parsing하지 않기 때문임(그래서 undefined만 뜸)
  res.redirect("/"); // 이 경로로 리다이렉트함
});

app.use("/", (req, res, next) => {
  res.send("<h1>hello from Express!</h1>"); // setHeader()로도 설정 가능하지만 send()로 해줘도 헤더는 알아서 파악함
}); // 새로운 미들웨어 사용가능
// next(); 다음 미들웨어로 요청을 이동시키려면 next()를 사용하면 됨

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
// 이 2줄을 간단하게 사용 가능함

// const server = http.createServer(app);
// 이것이 바로 Node.js의 주된 Event Driven Architecture(EDA)임
// 이것이 바로 createServer의 콜백 함수임

// server.listen(3000);
// listen은 node가 스크립트를 바로 종료하지 않고 계속 실행되면서 listen함

// 1. 이렇게 함수를 정의하여 불러올 수 있음
// function rqListener(req,res){

// }
// // res는 응답에만 사용됨

// Node.js의 코어 모듈
// 1. http - 서버 생성하거나 http 요청 및 응답 작업, 서버 출시 및 요청을 보내는 것
// 2. https - 서버 생성하거나 http 요청 및 응답 작업, 모든 전송 데이터가 암호화되는 SSL 암호화 서버를 출시할 때 도움됨
// 3. fs - 파일시스템
// 4. path - 경로 구축
// 5. os - 운영체제 관리
