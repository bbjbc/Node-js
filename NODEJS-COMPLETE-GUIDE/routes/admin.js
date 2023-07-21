const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  // .post를 하면 POST요청에만 응답함, GET에는 응답 X
  products.push({ title: req.body.title });
  res.redirect("/"); // 이 경로로 리다이렉트함
});

exports.routes = router;
exports.products = products;
