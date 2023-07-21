const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getProducts);
// join은 마지막에 경로를 출력함. 그리고 여러 세그먼트를 이어 붙여서 이 경로를 구축함
// __dirname은 운영체제의 절대 경로를 이 프로젝트 폴더로 고정해주는 전역 변수임
// 현재 routes 폴더이기 때문에 옆 폴더로 이동하기 위해서 ../

module.exports = router;
