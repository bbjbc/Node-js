const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>hello from Express!</h1>"); // setHeader()로도 설정 가능하지만 send()로 해줘도 헤더는 알아서 파악함
}); // 새로운 미들웨어 사용가능
// next(); 다음 미들웨어로 요청을 이동시키려면 next()를 사용하면 됨

module.exports = router;
