const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // 다음 미들웨어로 요청을 이동시키려면 next()를 사용하면 됨
}); // 새로운 미들웨어 사용가능

app.use((req, res, next) => {
  console.log("In another middleware!");
}); // 새로운 미들웨어 사용가능

const server = http.createServer(app);
// 이것이 바로 Node.js의 주된 Event Driven Architecture(EDA)임
// 이것이 바로 createServer의 콜백 함수임

server.listen(3000);
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
