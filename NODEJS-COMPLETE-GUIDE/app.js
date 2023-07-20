// const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
// extended는 비표준 대상의 분성이 가능한지를 나타냄
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

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
