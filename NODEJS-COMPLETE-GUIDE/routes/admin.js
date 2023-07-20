const path = require("path");

const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  // .post를 하면 POST요청에만 응답함, GET에는 응답 X
  console.log(req.body); // 이렇게만 쓰면 req.는 요청 본문을 parsing하지 않기 때문임(그래서 undefined만 뜸)
  res.redirect("/"); // 이 경로로 리다이렉트함
});

module.exports = router;
