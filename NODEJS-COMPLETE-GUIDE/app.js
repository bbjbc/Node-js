const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    }); // 요청에 대한 모든 데이터를 얻을 때까지 함수가 실행됨
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  //   process.exit(); 서버 종료
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});
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
