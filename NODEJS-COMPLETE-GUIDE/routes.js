const fs = require("fs");

const requestHandler = (req, res) => {
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
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }); // Sync는 동기화임. 이 파일 생성 전까지 코드 실행을 막는 특별한 메소드임
    });
  }
  //   process.exit(); 서버 종료
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;

// export가 여러 개인 경우
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";
// 앞에 있는 module을 생략 가능
